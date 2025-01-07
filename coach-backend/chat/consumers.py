import json
import base64
import secrets
from datetime import datetime

from channels.generic.websocket import AsyncWebsocketConsumer
from django.core.files.base import ContentFile

from backend.users.models import User
from .models import Message, Conversation, ChatRoom

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = f"chat_{self.room_name}"

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data=None, bytes_data=None):
        text_data_json = json.loads(text_data)

        message, sender, receiver, time, attachment = (
            text_data_json["message"],
            text_data_json["sender"],
            text_data_json["recepient"],
            datetime.utcfromtimestamp(text_data_json["time"] / 1000.0),
            text_data_json.get("attachment"),
        )

        conversation = Conversation.objects.get(id=int(self.room_name))
        sender = User.objects.get(username=sender)
        receiver = User.objects.get(username=receiver)

        if attachment:
            file_str, file_ext = attachment["data"], attachment["format"]

            file_data = ContentFile(
                base64.b64decode(file_str), name=f"{secrets.token_hex(8)}.{file_ext}"
            )

            _message = Message.objects.create(
                sender=sender,
                receiver=receiver,
                timestamp=time,
                attachment=file_data,
                text=message,
                conversation_id=conversation,
            )
        else:
            _message = Message.objects.create(
                sender=sender,
                receiver=receiver,
                timestamp=time,
                text=message,
                conversation_id=conversation,
            )
        
        # Send message to room group
        if _message.attachment:
            await self.channel_layer.group_send(
                self.room_group_name,
                {
                    "type": "chat_message",
                    "message": message,
                    "sender": sender.email,
                    "attachment": _message.attachment.url,
                    "time": str(_message.timestamp),
                },
            )
        else:
            await self.channel_layer.group_send(
                self.room_group_name,
                {
                    "type": "chat_message",
                    "message": message,
                    "sender": sender.email,
                    "time": str(_message.timestamp),
                },
            )

    # Receive message from room group
    async def chat_message(self, event):
        message = event["message"]

        # Send message to WebSocket
        if event.get("attachment"):
            await self.send(
                text_data=json.dumps(
                    {
                        "message": message,
                        "sender": event["sender"],
                        "time": event["time"],
                        "attachment": event["attachment"],
                    }
                )
            )
        else:
            await self.send(
                text_data=json.dumps(
                    {
                        "message": message,
                        "sender": event["sender"],
                        "time": event["time"],
                    }
                )
            )
