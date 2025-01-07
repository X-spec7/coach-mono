from django.urls import path
from .views import StartConversationView, ConversationDetailView, ConversationsListView

app_name = "chat"
urlpatterns = [
    path("message/<str:username>/", view=StartConversationView.as_view(), name="start-convo"),
    path("conversation/<int:conversation_id>/", view=ConversationDetailView.as_view(), name="get_conversation"),
    path("conversations/", view=ConversationsListView.as_view(), name="conversations"),
]