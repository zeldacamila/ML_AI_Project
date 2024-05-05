# Endpoints for recommendation
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.db_config import SessionLocal

from . import schemas, service

rec_router = APIRouter()


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@rec_router.post("/", status_code=201)
def create_recommendation(
    user_id: str,
    recommendation: schemas.RecommendationCreate,
    db: Session = Depends(get_db),
):
    return service.create_recommendation(
        db, recommendation=recommendation, user_id=user_id
    )


@rec_router.get("/user/{userId}", status_code=200)
def read_user_recommendations(userId: str, db: Session = Depends(get_db)):
    recommendations = service.get_recommendations_by_user_id(db, user_id=userId).all()
    return {"userId": userId, "recommendations": recommendations}
