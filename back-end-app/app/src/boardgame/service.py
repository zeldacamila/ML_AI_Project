# Logic for Boardgame (to interact with the ML trained model)
import io
import os
import re
from typing import List

import boto3
import botocore
import botocore.exceptions
import joblib
import numpy as np
from dotenv import load_dotenv
from openai import OpenAI
from pydantic import ValidationError

from .schemas import GameParams

load_dotenv()

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

client = OpenAI(api_key=OPENAI_API_KEY)

bucket_name = os.getenv("BUCKET_NAME")
model_path = os.getenv("MODEL_PATH")
aws_access_key_id = os.getenv("AWS_ACCESS_KEY")
aws_secret_key = os.getenv("AWS_SECRET_KEY")

def load_model(
        bucket_name=bucket_name, 
        model_path=model_path, 
        aws_access_key=aws_access_key_id, 
        aws_secret_key=aws_secret_key):
    """
    Load Model from S3

    Parameters:
        - Bucket_name: Name of the bucker
        - Model_path: Path of the model in the bucket

    This function retrieves the model file stored in the specified S3 bucket and loads it for use.

    Returns
        Model ready for using it.
    """
    # Create a client for S3
    s3 = boto3.client('s3', aws_access_key_id=aws_access_key, aws_secret_access_key=aws_secret_key)
    try:
        # Get the object model from S3
        obj = s3.get_object(Bucket=bucket_name, Key=model_path)
    except botocore.exceptions.ClientError as e:
        # If a client error is thrown, then check that it was a 404 error.
        # If it was a 404 error, then the bucket does not exist
        error_code = int(e.response['Error']['Code'])
        if error_code == 404:
            print(f"No such file {model_path} in bucket.")
            return None
        else:
            raise
    # Get the streaming body from the object
    streaming_body = obj["Body"]

    # Create a bytes buffer to store the object dat
    model_buff = io.BytesIO()

    # Define the chunk size for reading the streaming body
    chunk_size = 1024 * 1024

    # Read the streaming body in chunks and write to the bytes buffe
    for chunk in iter(lambda: streaming_body.read(chunk_size), b""):
        model_buff.write(chunk)

    # Go back to the start of the bytes buffer
    model_buff.seek(0)

    # Load the model from the bytes buffer
    model = joblib.load(model_buff)
    return model


# Función para normalizar los datos
def normalize_data(game_params: GameParams):
    """
    Normalize game parameters.

    Parameters:
        game_params (GameParams): Game parameters to be normalized.

    Returns:
        np.array: Normalized game parameters.
    """
    try:
        # Validate the input data
        game_params = GameParams(**game_params)
    except ValidationError as e:
        print(f"Invalid game parameters: {e}")
        return None
    # Define observed maximums and minimums for each feature
    max_players_count = 999.0  # Observed maximum for number of players
    min_players_count = 0.0  # Observed minimum for number of players
    max_age = 42.0  # Observed maximum for age
    min_age = 0.0  # Observed minimum for age
    max_playtime_minutes = 60000  # Observed maximum for playtime
    min_playtime_minutes = 0  # Observed minimum for playtime
    max_avg_rating = 9  # Observed maximum for rating
    min_avg_rating = 1  # Observed minimum for rating
    max_year_published = 2016  # Observed maximum for year_published
    min_year_published = 1950  # Observed minimum for year_published

    # Normalize each feature
    max_players_norm = (game_params.max_players - min_players_count) / (
        max_players_count - min_players_count
    )
    min_players_norm = (game_params.min_players - min_players_count) / (
        max_players_count - min_players_count
    )
    max_playtime_norm = (game_params.max_playtime - min_playtime_minutes) / (
        max_playtime_minutes - min_playtime_minutes
    )
    min_playtime_norm = (game_params.min_playtime - min_playtime_minutes) / (
        max_playtime_minutes - min_playtime_minutes
    )
    playtime_norm = (game_params.playtime - min_playtime_minutes) / (
        max_playtime_minutes - min_playtime_minutes
    )
    youngest_player_age_norm = (game_params.youngest_player_age - min_age) / (
        max_age - min_age
    )
    avg_rating_norm = (game_params.avg_rating - min_avg_rating) / (
        max_avg_rating - min_avg_rating
    )
    year_published_norm = (game_params.year_published - min_year_published) / (
        max_year_published - min_year_published
    )

    # Return normalized data as a numpy array
    normalized_data = np.array(
        [
            max_players_norm,
            min_players_norm,
            max_playtime_norm,
            min_playtime_norm,
            playtime_norm,
            youngest_player_age_norm,
            avg_rating_norm,
            year_published_norm,
        ]
    )
    return normalized_data


# Load the model when the application starts
model = load_model()


def predict_category(normalized_data: np.array) -> str:
    """
    Predict Category

    Parameters:
        normalized_data (np.ndarray): The normalized game parameters.

    Predict the category of a game based on normalized game parameters.

    Returns:
        str: The predicted category of the game.
    """
    if not isinstance(normalized_data, np.ndarray):
        raise TypeError("Input data must be a numpy array.")

    if model is None:
        raise TypeError("Model has not been loaded.")
    prediction = model.predict([normalized_data])
    return prediction[0]


def fetch_game_recommendations(game_category: str) -> List[str]:
    """
    Fetch game recommendations

    Parameters:
        game_category (str): The category of the game.

    This function uses the game category to generate a prompt for OpenAI's GPT-3 model.
    The model then generates a list of recommended games in the given category.

    Returns:
        List[str]: A list of recommended games.
    """
    try:
        # Create a completion with OpenAI's GPT-3 model
        completion = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {
                    "role": "user",
                    "content": f"Can you list five board games in the category {game_category}?",
                }
            ],
            max_tokens=180,
        )
        # Get the content of the completion
        text_response = completion.choices[0].message.content
        # Split the content into lines to get a list of games
        boardgames_list = text_response.split("\n")
        # Remove any leading numbers from the game names
        boardgames_list = [
            re.sub(r"^\d+\.\s*", "", game) for game in boardgames_list if game.strip()
        ]
        return boardgames_list
    except Exception as e:
        print(f"Error while fetching recommendations from OpenAI for category {game_category}: {e}")
        return []
