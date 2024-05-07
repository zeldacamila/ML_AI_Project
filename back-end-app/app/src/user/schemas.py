# Pydantic models for validation of data for users
from pydantic import BaseModel

from ..recommendation.schemas import Recommendation


class UserBase(BaseModel):
    username: str
    email: str


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id: str
    recommendations: list[Recommendation] = []

    class Config:
        from_attributes = True


class UserLogin(BaseModel):
    email: str
    password: str
