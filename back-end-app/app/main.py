# FastAPI app
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.db_config import Base, engine
from app.src.user.router import user_router
from app.src.recommendation.router import rec_router
from app.src.boardgame.router import category_router

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)  # Create the database tables

app.include_router(user_router, prefix="/user")
app.include_router(rec_router, prefix="/recommendations")
app.include_router(category_router, prefix="/games")

@app.get("/ping")
async def ping():
    return {"message": "pong"}