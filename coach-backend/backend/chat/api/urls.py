from django.urls import path
from .views import GetContactView, ChatMessageView

urlpatterns = [
  path('chat/contacts', view=GetContactView.as_view(), name='contacts'),
  path('messages/<int:contact_id>/', ChatMessageView.as_view(), name='messages'),
]
