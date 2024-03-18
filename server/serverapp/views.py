from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from serverapp.models import User, Prompt
from serverapp.serializers import UserSerializer, PromptSerializer
from serverapp.data_processing import delimit_prompt_details
from text_classification.genre_model import GenreModel
from sentiment_analysis.sentiment_model import SentimentModel
from django.template.loader import render_to_string

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
            serializer.save()
            sentiment_label: str = SentimentModel().predict(str(serializer.data))
            genre_class: str = GenreModel().predict(str(serializer.data))
            print(genre_class)
            print(sentiment_label)

            tokens_array = delimit_prompt_details(serializer.data)              # parse the tokens from the prompt details
            
            title = tokens_array[0]                                             # get the title
            header = tokens_array[1]                                            # get the header  
            paragraphs = tokens_array[2:]                                       # get the paragraphs
            html_content = render_to_string(genre_class + '_template.html', {                  # render the template to a string
                'title': title,
                'header': header,
                'paragraphs': paragraphs
            })

            print(tokens_array)
            print(html_content)

            response_data = {                                                   # encapsulate data in JSON object
                'html_content': html_content,
                'tokens_array': tokens_array,
            }

            #return Response(data=tokens_array, status=status.HTTP_201_CREATED)  # return these tokens
            return Response(data=response_data, status=status.HTTP_201_CREATED, content_type='application/json')  # return these tokens
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)