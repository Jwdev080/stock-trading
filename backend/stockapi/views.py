# process_api/urls.py
from django.urls import path

from . import views






urlpatterns = [
    path('get_stockindex', views.get_stockindex, name='get_stockindex'),
]
