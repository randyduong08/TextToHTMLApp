from django.apps import AppConfig

# NOTE: We configure this serverapp here, think of it as a "Config"

class ServerappConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'serverapp'
