# FastAPI app
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.db_config import Base, engine
from app.src.user.router import user_router
from app.src.recommendation.router import rec_router

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:5173",

]

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


@app.get("/ping")
async def ping():
    return {"message": "pong"}
