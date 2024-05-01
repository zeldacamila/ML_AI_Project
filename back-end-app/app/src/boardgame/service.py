# Logic for Boardgame (to interact with the ML trained model)
from typing import List
from .schemas import GameParams
from openai import OpenAI
import joblib
import numpy as np
import os
import re

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))


def load_model():
    return joblib.load("app/ml_models/modelo_randomForest.pkl")


# Función para normalizar los datos
def normalize_data(game_params: GameParams):
    # Definir máximos y mínimos para cada característica
    max_players_count = 999.0  # Máximo observado para cantidad de jugadores
    min_players_count = 0.0  # Mínimo observado para cantidad de jugadores
    max_age = 42.0  # Máximo observado para edad
    min_age = 0.0  # Mínimo observado para edad
    max_playtime_minutes = 60000  # Máximo observado para playtime
    min_playtime_minutes = 0  # Mínimo observado para playtime
    max_avg_rating = 9  # Máximo observado para rating
    min_avg_rating = 1  # Mínimo observado para rating
    max_year_published = 1950  # Mínimo observado para year_published
    min_year_published = 2016  # Máximo observado para year_published

    # Normalización de cada característica
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


def predict_category(normalized_data):
    model = load_model()
    prediction = model.predict([normalized_data])
    return prediction[0]


def fetch_game_recommendations(game_category: str) -> List[str]:
    try:
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
        text_response = completion.choices[0].message.content
        boardgames_list = text_response.split("\n")
        boardgames_list = [
            re.sub(r"^\d+\.\s*", "", game) for game in boardgames_list if game.strip()
        ]
        return boardgames_list
    except Exception as e:
        print(f"Error while fetching recommendations from OpenAI: {e}")
        return []
