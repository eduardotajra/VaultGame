from django.contrib import admin
from .api import api;
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', api.urls),
]
