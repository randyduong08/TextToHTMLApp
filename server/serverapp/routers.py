from rest_framework import routers
from serverapp.viewsets import UserViewSet
from serverapp.viewsets import PromptViewSet

# define endpoints of the API to be registered in urls.py
router = routers.SimpleRouter()
router.register(r'user', UserViewSet, basename="user")
router.register(r'prompt', PromptViewSet, basename="prompt")
urlpatterns = router.urls