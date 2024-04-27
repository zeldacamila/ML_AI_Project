#Logic for Recommendation, It is similiar as CRUD but only for Recommendation
from models import Recommendation
from schemas import RecommendationCreate
from sqlalchemy import desc
from sqlalchemy.orm import Session


def create_recommendation(
    db: Session, recommendation: RecommendationCreate, user_id: str
):
    db_recommendation = Recommendation(
        title=recommendation.title,
        description=recommendation.description,
        user_id=user_id,
    )
    db.add(db_recommendation)
    db.commit()
    db.refresh(db_recommendation)
    return db_recommendation


def get_recommendations_by_user_id(db: Session, user_id: str):
    return (
        db.query(Recommendation)
        .filter(Recommendation.user_id == user_id)
        .order_by(desc(Recommendation.creation_date))
    )
