#Model for Recommendation
from datetime import datetime

from sqlalchemy import Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from app.core.db_config import Base


class Recommendation(Base):
    __tablename__ = "recommendations"

    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String(50), nullable=False)
    description = Column(String, nullable=False)
    creation_date = Column(DateTime, default=datetime.now())
    user_id = Column(String, ForeignKey("users.id"))

    user = relationship("User", back_populates="recommendations")
