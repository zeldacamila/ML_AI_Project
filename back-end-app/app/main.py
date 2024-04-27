# FastAPI app
from fastapi import FastAPI

from app.core.db_config import Base, engine
from app.src.user.router import user_router
from app.src.recommendation.router import rec_router

app = FastAPI()

Base.metadata.create_all(bind=engine)  # Create the database tables

app.include_router(user_router, prefix="/user")
app.include_router(rec_router, prefix="/recommendations")


@app.get("/ping")
async def ping():
    return {"message": "pong"}
