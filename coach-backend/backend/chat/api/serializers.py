from rest_framework import serializers

from backend.chat.models import Chat

from django.conf import settings


class ChatSerializer(serializers.ModelSerializer):
  is_sent = serializers.SerializerMethodField()

  class Meta:
    model = Chat
    fields = ["id", "content", "timestamp", "is_read", "is_sent"]

  def get_is_sent(self, obj):
    request = self.context.get("request")
    return obj.sender == request.user