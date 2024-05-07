#Router for BoardGame
from fastapi import APIRouter

from .schemas import GameParams
from .service import fetch_game_recommendations, normalize_data, predict_category

#ApiRouter for BoardGame
category_router = APIRouter()


@category_router.post("/recommend-boardgames")
async def recommend_boardgames(game_params: GameParams):
    normalized_data = normalize_data(game_params=game_params)
    category = predict_category(normalized_data)
    boardgames_list = fetch_game_recommendations(category)
    return boardgames_list
