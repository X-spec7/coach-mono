from django.db import models

from backend.users.models import User
from django.utils.translation import gettext_lazy as _

class ChatMessage(models.Model):
  sender = models.ForeignKey(User, on_delete=models.CASCADE, default=None, related_name='sender')
  receiver = models.ForeignKey(User, on_delete=models.CASCADE, default=None, related_name='receiver')
  sent_date = models.DateTimeField(auto_now_add=True)
  content = models.TextField()
  is_read = models.BooleanField(default=False)

  class Meta:
    verbose_name = _("ChatMessage")
    verbose_name_plural = _("ChatMessages")

  def __str__(self):
    return f'From {self.sender} to {self.receiver}'
