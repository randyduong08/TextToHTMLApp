from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
from django.core.cache import cache
from django.template.loader import render_to_string
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from serverapp.models import User, Prompt
from serverapp.serializers import UserSerializer, PromptSerializer
from serverapp.data_processing import delimit_prompt_details
from text_classification.genre_model import GenreModel
from sentiment_analysis.sentiment_model import SentimentModel

# Create your views here.
# NOTE: Views in Django are "Request Handlers", not to be confused with front-end views
# NOTE: View functions are functions that take a request and return a response; "request handlers"

# Handles requests to the /prompts/ endpoint
class PromptView(APIView):
    
    def get(self, request):
        prompt = Prompt.objects.all()
        serializer = PromptSerializer(prompt, many=True)
        return Response(serializer.data)

    def post(self, request):
        
        # serialize the data provided in the POST request
        serializer = PromptSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            # get the sentiment and genre of the prompt
            sentiment_label: str = SentimentModel().predict(str(serializer.data))
            genre_class: str = GenreModel().predict(str(serializer.data))
            print("\nSentiment: ", sentiment_label, "\nGenre: ", genre_class, "\n")

            # parse the tokens from the prompt details
            tokens_array = delimit_prompt_details(serializer.data)              
            
            # generate the html_content based off of the genre_class and tokens_array
            title = tokens_array[0]                                             # get the title
            header = tokens_array[1]                                            # get the header  
            paragraphs = tokens_array[2:]                                       # get the paragraphs
            html_content = render_to_string(genre_class + '_template.html', {   # render the template to a string
                'title': title,
                'header': header,
                'paragraphs': paragraphs
            })
            print("\nTokens: ", tokens_array, "\nGenerated HTML: ", html_content, "\n")

            # cache the generated html content for 1 hour; makes http://localhost:8000/generated-page/ host the generated html content
            cache.set('generated_html_content', html_content, 60*60)           

            # need to send 2 objects int he response; encapsulate data in JSON object
            response_data = {                                                   
                'html_content': html_content,
                'tokens_array': tokens_array,
            }

            # return the response_data
            return Response(data=response_data, status=status.HTTP_201_CREATED, content_type='application/json')  
        # in case of a bad request, return the error
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Handles requests to the /generated-page/ endpoint
def display_generated_page(request):

    # try to get html_content from cache
    html_content = cache.get('generated_html_content')

    # if html_content is not in cache, then return a 404
    if html_content is None:
        return HttpResponse(status=404)
    # otherwise, return the html_content
    return HttpResponse(html_content, content_type='text/html')       # return the generated html content