from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


class TestCreateRecommendations:
    """TestCreateRecommendations tests /recommendations"""

    def test_post_request_success(self):
        recommendation_data = {
            "title": "New Recommendation",
            "description": "This is a test recommendation",
        }
        response = client.post("/recommendations", json=recommendation_data)
        assert response.status_code == 201
        assert response.json()["title"] == recommendation_data["title"]
        assert "id" in response.json()
