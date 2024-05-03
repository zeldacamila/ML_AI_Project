# Pydantic models for validation of data to interact with the ML trained model
from pydantic import BaseModel


class GameParams(BaseModel):
    """
    Pydantic Class model for game parameters.

    Attributes:
        max_players (int): Maximum number of players.
        min_players (int): Minimum number of players.
        max_playtime (int): Maximum playtime.
        min_playtime (int): Minimum playtime.
        playtime (int): Average playtime.
        youngest_player_age (int): Minimum age of player.
        avg_rating (int): Average game rating.
        year_published (int): Year the game was published.
    """

    max_players: int
    min_players: int
    max_playtime: int
    min_playtime: int
    playtime: int
    youngest_player_age: int
    avg_rating: int
    year_published: int
