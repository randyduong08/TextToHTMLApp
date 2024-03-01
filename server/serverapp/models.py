from django.db import models
from django.utils import timezone

# Create your models here.
# NOTE: Models are how we pull data from the database and present it to the user

# Model for the User table in the database
class User(models.Model):
    userID = models.AutoField(primary_key=True)
    userName = models.CharField(max_length=255, unique=True)
    userEmail = models.EmailField(unique=True)
    userPassword = models.CharField(max_length=255) # FUTURE: USE DJANGO'S BUILT-IN USER MODEL AND AUTHENTICATION
    registrationDate = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.userName

# Model for the Prompt table in the database
class Prompt(models.Model):
    promptID = models.AutoField(primary_key=True)
    userID = models.ForeignKey(User, on_delete=models.CASCADE)
    promptDetails = models.TextField()
    creationTime = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.promptDetails