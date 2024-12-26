import os
import requests
import base64
from django.core.files.base import ContentFile
from django.contrib.auth import authenticate, login
from django.db.models import Q, Max, Count
from rest_framework import status, permissions
from rest_framework.decorators import action
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin, UpdateModelMixin
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import GenericViewSet
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated
from rest_framework.pagination import LimitOffsetPagination
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.authentication import JWTAuthentication
from django_ratelimit.decorators import ratelimit

from django.conf import settings
from rest_framework.parsers import MultiPartParser, FormParser

from backend.chat.models import Chat
from backend.users.models import User
from .serializers import ChatSerializer

class GetContactView(APIView):
  permission_classes = [IsAuthenticated]

  def get(self, request):
    user = request.user

    messages = Chat.objects.filter(Q(sender=user) | Q(recipient=user))

    last_messages = (
      messages.values("sender", "recipient")
      .annotate(last_message_time=Max("timestamp"))
      .order_by("-last_message_time")
    )

    contact_users = set()
    contact_data = {}

    for entry in last_messages:
      other_user_id = (
        entry["recipient"] if entry["sender"] == user.id else entry["sender"]
      )
      contact_users.add(other_user_id)

      # Get the last message
      last_message = messages.filter(
        Q(sender_id=entry["sender"], recipient_id=entry["recipient"])
        | Q(sender_id=entry["recipient"], recipient_id=entry["sender"])
      ).order_by("-timestamp").first()

      # Populate the contact data
      contact_data[other_user_id] = {
        "last_message_id": last_message.id if last_message else "",
        "last_message_content": last_message.content if last_message else "",
        "last_message_is_read": last_message.is_read if last_message else False,
        "last_message_is_sent": last_message.sender == user if last_message else False,
        "last_message_timestamp": last_message.sent_date if last_message else None,
      }
    
    users = (
      User.objects.filter(id__in=contact_users)
        .annotate(
          unread_count=Count(
              "received_messages",
              filter=Q(received_messages__sender__in=contact_users, received_messages__is_read=False),
          )
        )
    )

    contacts = []

    for u in users:
      contact_info = contact_data.get(u.id, {})
      contacts.append({
        "id": u.id,
        "fullName": u.full_name,
        "avatarUrl": u.avatar_image.url if u.avatar_image else None,
        "userType": u.user_type,
        "unreadCount": u.unread_count,
        "lastMessage": {
          "id": contact_info.get("last_message_id"),
          "content": contact_info.get("last_message_content"),
          "isRead": contact_info.get("last_message_is_read"),
          "isSent": contact_info.get("last_message_is_sent"),
          "sentDate": contact_info.get("last_message_timestamp"),
        },
      })

    return Response(contacts)
  
class ChatView(APIView, LimitOffsetPagination):
  permission_classes = [IsAuthenticated]

  def get(self, request, contact_id):
    user = request.user

    messages = Chat.objects.filter(
      Q(sender=user, recipient_id=contact_id)
      | Q(sender_id=contact_id, recipient=user)
    ).order_by("-timestamp")

    paginated_messages = self.paginate_queryset(messages, request, view=self)
    serialized_messages = ChatSerializer(paginated_messages, many=True).data

    total_count = messages.count()

    return self.get_paginated_response(
      {"messages": serialized_messages, "total_count": total_count}
    )