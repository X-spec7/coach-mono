from django.contrib import messages
from django.db.models import Q, Max
from django.db.models.functions import Coalesce
from django.shortcuts import redirect, reverse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from rest_framework_simplejwt.authentication import JWTAuthentication

from backend.users.models import User
from chat.models import Conversation

class StartConversationView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def post(self, request):
        data = request.data
        username = data.get('username')

        try:
            participant = User.objects.get(username=username)
        except User.DoesNotExist:
            messages.error(request, "User does not exist")
            return Response(
                {'message': 'You cannot chat with a non-existent user'},
                status=status.HTTP_404_NOT_FOUND
            )
        
        conversation = Conversation.objects.filter(
            Q(initiator=request.user, receiver=participant) |
            Q(initiator=participant, receiver=request.user)
        )

        if conversation.exists():
            return redirect(reverse('chat:conversation', args=(conversation[0].id,)))
        else:
            new_convo = Conversation.objects.create(
                initiator=request.user,
                receiver=participant
            )
            return redirect(reverse("chat:conversation", args=(new_convo.id,)))
        
class ConversationDetailView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def get(self, request, conversation_id):
        try:
            convo = Conversation.objects.filter(id=conversation_id)
            if not convo.exists():
                return Response(
                    {"error": "Conversation does not exist"}, status=status.HTTP_404_NOT_FOUND
                )
            
            return Response(
                {"conversation_id": convo[0].id, "initiator": convo[0].initiator.username, "receiver": convo[0].receiver.username},
                status=status.HTTP_200_OK,
            )
        
        except Exception as e:
            print(e)
            return Response(
                {"error": "Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
        
class ConversationsListView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def get(self, request):
        try:
            conversations = (
                Conversation.objects.filter(
                    Q(initiator=request.user) | Q(receiver=request.user)
                )
                .annotate(last_message_sent=Coalesce(Max("message__timestamp"), "timestamp"))
                .order_by("-last_message_sent")
            )

            convo_list = [
                {
                    "id": convo.id,
                    "initiator": convo.initiator.username,
                    "receiver": convo.receiver.username,
                    "last_message_sent": convo.last_message_sent,
                }
                for convo in conversations
            ]

            return Response(
                {"conversations": convo_list}, status=status.HTTP_200_OK
            )

        except Exception as e:
            print(e)
            return Response(
                {"error": "Something went wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )