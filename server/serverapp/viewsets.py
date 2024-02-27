from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from serverapp.models import Prompt
from serverapp.serializers import PromptSerializer

# interface (controller) which will handle the requests
class PromptViewSet(viewsets.ModelViewSet):
    queryset = Prompt.objects.all()
    serializer_class = PromptSerializer
    permission_classes = [AllowAny]