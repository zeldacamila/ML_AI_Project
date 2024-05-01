# Pydantic models for validation of data to interact with the ML trained model
from pydantic import BaseModel


class GameParams(BaseModel):
    max_players: int
    min_players: int
    max_playtime: int
    min_playtime: int
    playtime: int
    youngest_player_age: int
    avg_rating: int
    year_published: int
