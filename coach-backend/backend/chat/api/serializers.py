from rest_framework import serializers

from backend.chat.models import ChatMessage

from django.conf import settings


class ChatMessageSerializer(serializers.ModelSerializer):
  is_sent = serializers.SerializerMethodField()

  class Meta:
    model = ChatMessage
    fields = ["id", "content", "timestamp", "is_read", "is_sent"]

  def get_is_sent(self, obj):
    request = self.context.get("request")
    return obj.sender == request.user