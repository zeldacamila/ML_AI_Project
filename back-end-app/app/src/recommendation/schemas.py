##Pydantic models for validation of data for Recommendation
from datetime import datetime

from pydantic import BaseModel


class RecommendationBase(BaseModel):
    title: str
    description: str


class RecommendationCreate(RecommendationBase):
    pass


class Recommendation(RecommendationBase):
    id: int
    creation_time: datetime
    user_id: str

    class Config:
        from_attributes = True
