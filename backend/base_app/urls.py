from django.urls import path

from authentication.views import MyTokenObtainPairView, register_view
from conversations.views import (
    chat_view,
    conversation_detail_view,
    conversation_list_view,
)

urlpatterns = [
    path("conversation/", chat_view, name="chat-view"),
    path("conversations/", conversation_list_view, name="conversation-list"),
    path("conversations/<int:id>/", conversation_detail_view, name="conversation-detail"),
    path("auth/signup/", register_view, name="signup"),
    path("auth/signin/", MyTokenObtainPairView.as_view(), name="signin"),
]