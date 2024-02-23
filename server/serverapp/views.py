from django.shortcuts import render
from django.http import JsonResponse
from .models import Prompt
from django.views.decorators.csrf import csrf_exempt
import json

# Create your views here.
# NOTE: Views in Django are "Request Handlers", not to be confused with front-end views
# NOTE: View functions are functions that take a request and return a response; "request handlers"

# This view / request handler will handle storing the user's prompt in the database
@csrf_exempt # disables CSRF protection, maybe get rid of this when we push to production
def store_prompt(request):
    if request.method == "POST":
        data = json.loads(request.body)
        prompt = Prompt(user_id=data['userID'], prompt=data['prompt'])
        prompt.save()
        return JsonResponse({"success": "Prompt saved successfully"})
    return JsonResponse({"error": "Method not allowed"}, status=405)