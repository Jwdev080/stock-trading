# process_api/urls.py
from django.urls import path

from . import views




urlpatterns = [
    path('get_overall', views.get_overall, name='get_overall')
]
