from fastapi.testclient import TestClient

from app.main import app

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
