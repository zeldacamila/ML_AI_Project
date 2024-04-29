from sqlalchemy import create_engine
from sqlalchemy.orm.session import sessionmaker
from sqlalchemy.pool import StaticPool

DB_USERNAME_TEST = "test_db"
DB_PASSWORD_TEST = "test123"
DB_HOST_TEST = "localhost"
DB_NAME_TEST = "test"

DATABASE_URL = f"postgresql://{DB_USERNAME_TEST}:{DB_PASSWORD_TEST}@{DB_HOST_TEST}/{DB_NAME_TEST}"

engine = create_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False},
    poolclass=StaticPool,
)
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
