from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Conversation, Message
from .serializers import ConversationSerializer


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def chat_view(request):
	title = request.data.get("title") or "New Conversation"
	conversation = Conversation.objects.create(title=title, user=request.user)

	content = request.data.get("content")
	role = request.data.get("role", "user")

	if content:
		if role not in {"user", "assistant"}:
			role = "user"
		Message.objects.create(conversation=conversation, role=role, content=content)

	serializer = ConversationSerializer(conversation)
	return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def conversation_list_view(request):
	conversations = Conversation.objects.filter(user=request.user).order_by("-updated_at")
	serializer = ConversationSerializer(conversations, many=True)
	return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def conversation_detail_view(request, id):
	conversation = get_object_or_404(Conversation, _id=id, user=request.user)
	serializer = ConversationSerializer(conversation)
	return Response(serializer.data, status=status.HTTP_200_OK)
