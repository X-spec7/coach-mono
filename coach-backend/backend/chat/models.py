from django.db import models

from users.models import User

class ChatModel(models.Model):
  sender = models.ForeignKey(User, on_delete=models.CASCADE, default=None, related_name='sender')
  receiver = models.ForeignKey(User, on_delete=models.CASCADE, default=None, related_name='receiver')
  sent_date = models.DateTimeField(auto_now_add=True)
  message = models.TextField()
  is_read = models.BooleanField(default=False)


  def __str__(self):
    return f'From {self.sender} to {self.receiver}'
