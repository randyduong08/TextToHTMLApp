from rest_framework import serializers
from serverapp.models import User, Prompt

# serializers to convert JSON data to Python native objects

# for User data
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['userID', 'userName', 'userEmail', 'userPassword', 'registrationDate']
        extra_kwargs = {'userPassword': {'write_only': True}}  # It's better to handle passwords securely

# for Prompt data
class PromptSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prompt
        fields = ['promptID', 'userID', 'promptDetails', 'creationTime']
