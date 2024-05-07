import pytest
import uuid
from fastapi.testclient import TestClient
from app.main import app
from app.src.models import User
from app.core.db_config import Base, SessionLocal, engine
from app.src.user.router import get_db
from random import randint


Base.metadata.create_all(bind=engine)

client = TestClient(app)

@pytest.fixture(scope="module")
def test_user():
    # Crear un nuevo usuario
        db = SessionLocal()
        random_num = randint(1,10)
        new_user = User(
            id=str(uuid.uuid4()), 
            username='testuser'+ str(random_num), 
            email=f"testuser{str(random_num)}@example.com", 
            password='testpassword')
        # Añadir el nuevo usuario a la base de datos
        db.add(new_user)
        db.commit()
        yield new_user
        db.delete(new_user)
        db.commit()
        db.close()

        
def override_get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

app.dependency_overrides[get_db] = override_get_db
    
def test_create_recommendation(test_user):
    
    # Realizar la prueba
    response = client.post(f"/recommendations/?user_id={test_user.id}", 
                            json={'title':'elpepe', 'description': 'anyways'})
    print(response.json())
    assert response.status_code == 201

    

def test_get_recommendations_by_user_id(test_user):
    response = client.get(f"/recommendations/user/{test_user.id}")
    assert response.status_code == 200