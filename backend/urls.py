from django.urls import path
from .views import *

urlpatterns = [
    path('task-list/', task_list, name='task-list'),
]