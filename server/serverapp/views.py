from django.shortcuts import render
from django.http import JsonResponse
from .models import Prompt
from django.views.decorators.csrf import csrf_exempt
import json

# Create your views here.
# NOTE: Views in Django are "Request Handlers", not to be confused with front-end views
# NOTE: View functions are functions that take a request and return a response; "request handlers"
