from django.db import models
from backend.users.models import User

class ChatRoom(models.Model):
    name = models.CharField(max_length=255)
    users = models.ManyToManyField(User, related_name="chatrooms")

    class Meta:
        app_label = "chat"

class Conversation(models.Model):
    initiator = models.ForeignKey(User, on_delete=models.CASCADE, related_name="convo_starter")
    receiver =  models.ForeignKey(User, on_delete=models.CASCADE, related_name="convo_participant")
    timestamp = models.DateTimeField(auto_now_add=True)

class Message(models.Model):
    # chatroom = models.ForeignKey(ChatRoom, on_delete=models.CASCADE, related_name='messages')
    sender = models.ForeignKey(User, on_delete=models.PROTECT, related_name='message_sender')
    receiver = models.ForeignKey(User, on_delete=models.PROTECT, related_name="message_receiver")
    text = models.CharField(max_length=200)
    attachment = models.FileField(blank=True)
    conversation_id = models.ForeignKey(Conversation, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)