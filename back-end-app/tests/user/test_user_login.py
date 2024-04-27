from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


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
        # Asegrar que estas credenciales son válidas y están en la base de datos de prueba
        response = client.post(
            "/user/login", json={"email": "link@hyrule.com", "password": "correctpass"}
        )
        assert response.status_code == 200
        assert "email" in response.json()
        assert response.json()["email"] == "link@hyrule.com"
