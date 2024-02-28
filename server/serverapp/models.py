from django.db import models

# Create your models here.
# NOTE: Models are how we pull data from the database and present it to the user

# Model for the User table in the database
class User(models.Model):
    id = models.AutoField(primary_key=True)
    userName = models.CharField(max_length=255, unique=True)
    userEmail = models.EmailField(unique=True)
    userPassword = models.CharField(max_length=255)
    registrationDate = models.DateTimeField(auto_now_add=True)

# Model for the Prompt table in the database
class Prompt(models.Model):
    id = models.AutoField(primary_key=True)
    userID = models.ForeignKey(User, on_delete=models.CASCADE)
    prompt = models.TextField()
    creationTime = models.DateTimeField(auto_now_add=True)