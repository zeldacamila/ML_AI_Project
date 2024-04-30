from fastapi.testclient import TestClient
from app.main import app
from app.core.db_config import Base
from app.core.db_test_config import TestingSessionLocal, engine
from app.src.user.router import get_db

Base.metadata.create_all(bind=engine)


def override_get_db():
    try:
        db = TestingSessionLocal()
        yield db
    finally:
        db.close()


app.dependency_overrides[get_db] = override_get_db

client = TestClient(app)


class TestUserRegistration:
    """TestUserRegistration tests /user/register"""

    def test_get_request_returns_405(self):
        """register endpoint only expect a post request"""
        response = client.get("/user/register")
        assert response.status_code == 405

    def test_post_request_without_body_returns_422(self):
        """request body should have username, email and password"""
        response = client.post("/user/register")
        assert response.status_code == 422

    def test_post_request_with_improper_body_returns_422(self):
        """all of username, password and email is required"""
        response = client.post("/user/register", json={"username": "Zelda"})
        assert response.status_code == 422

    def test_post_request_with_proper_body_returns_201(self):
        response = client.post(
            "/user/register",
            json={
                "username": "Zelda",
                "email": "zelda@hyrule.com",
                "password": "triforce123",
            },
        )
        assert response.status_code == 201


class TestUserLogin:
    """TestUserLogin tests /user/login"""

    def test_post_request_without_body_returns_422(self):
        """Login endpoint requires a body with 'email' and 'password'"""
        response = client.post("/user/login")
        assert response.status_code == 422, "Expected 422 for empty body"

    def test_post_request_with_incomplete_body_returns_422(self):
        """Both email and password are required for login"""
        response = client.post("/user/login", json={"email": "link@hyrule.com"})
        assert response.status_code == 422, "Expected 422 for incomplete body"

    def test_post_request_with_invalid_credentials_returns_401(self):
        """Invalid credentials should return 401 Unauthorized"""
        response = client.post(
            "/user/login", json={"email": "invalid@hyrule.com", "password": "wrongpass"}
        )
        assert response.status_code == 401, "Expected 401 for invalid credentials"

    def test_post_request_with_valid_credentials_returns_200(self):
        """Valid credentials should return 200 OK and user data"""
        response = client.post(
            "/user/login", json={"email": "zelda@hyrule.com", "password": "triforce123"}
        )
        assert response.status_code == 200
        assert "email" in response.json()
        assert response.json()["email"] == "zelda@hyrule.com"
