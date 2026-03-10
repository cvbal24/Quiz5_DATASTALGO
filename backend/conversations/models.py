from django.conf import settings
from django.db import models


class Conversation(models.Model):
	_id = models.AutoField(primary_key=True)
	title = models.CharField(max_length=255)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	user = models.ForeignKey(
		settings.AUTH_USER_MODEL,
		on_delete=models.CASCADE,
		related_name="conversations",
	)

	def __str__(self):
		return self.title


class Message(models.Model):
	ROLE_CHOICES = (
		("user", "user"),
		("assistant", "assistant"),
	)

	conversation = models.ForeignKey(
		Conversation,
		on_delete=models.CASCADE,
		related_name="messages",
	)
	role = models.CharField(max_length=20, choices=ROLE_CHOICES)
	content = models.TextField()
	created_at = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return f"{self.role}: {self.content[:30]}"
