from django.urls import path
from .views import GetContactView, ChatView

urlpatterns = [
  path('chat/contacts', view=GetContactView.as_view(), name='contacts'),
  path('messages/<int:contact_id>/', ChatView.as_view(), name='messages'),
]
