from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from serverapp.models import User, Prompt
from serverapp.serializers import UserSerializer, PromptSerializer
from serverapp.data_processing import delimit_prompt_details
from text_classification.genre_model import GenreModel

# Create your views here.
# NOTE: Views in Django are "Request Handlers", not to be confused with front-end views
# NOTE: View functions are functions that take a request and return a response; "request handlers"
class PromptView(APIView):
    
    def get(self, request):
        prompt = Prompt.objects.all()
        serializer = PromptSerializer(prompt, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PromptSerializer(data=request.data)
        if serializer.is_valid():
            genre_sentiment: str = GenreModel().predict(str(serializer.data))
            serializer.save()
            tokens_array = delimit_prompt_details(serializer.data)              # parse the tokens from the prompt details
            return Response(data=tokens_array, status=status.HTTP_201_CREATED)  # return these tokens
            #return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)