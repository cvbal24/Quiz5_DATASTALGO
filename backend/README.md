# Backend API (Django + DRF)

## Run

```bash
python manage.py runserver
```

Base URL prefix:

- `/api/v1/`

---

## Authentication

### 1) Sign up

**POST** `/api/v1/auth/signup/`

Request body:

```json
{
  "username": "demo_user",
  "email": "demo@example.com",
  "password": "demo1234"
}
```

Success response (`201`):

```json
{
  "id": 1,
  "username": "demo_user",
  "email": "demo@example.com"
}
```

### 2) Sign in

**POST** `/api/v1/auth/signin/`

Request body:

```json
{
  "username": "demo_user",
  "password": "demo1234"
}
```

Success response (`200`):

```json
{
  "refresh": "<refresh_token>",
  "access": "<access_token>"
}
```

Use access token in header for protected endpoints:

```http
Authorization: Bearer <access_token>
```

---

## Conversations

### 3) Create conversation

**POST** `/api/v1/conversation/`

Headers:

```http
Authorization: Bearer <access_token>
Content-Type: application/json
```

Request body:

```json
{
  "title": "My first chat",
  "role": "user",
  "content": "Hello"
}
```

Success response (`201`):

```json
{
  "_id": 1,
  "title": "My first chat",
  "created_at": "2026-03-10T10:00:00Z",
  "updated_at": "2026-03-10T10:00:00Z",
  "user": 1,
  "messages": [
    {
      "id": 1,
      "conversation": 1,
      "role": "user",
      "content": "Hello",
      "created_at": "2026-03-10T10:00:00Z"
    }
  ]
}
```

### 4) List conversations

**GET** `/api/v1/conversations/`

Headers:

```http
Authorization: Bearer <access_token>
```

Success response (`200`):

```json
[
  {
    "_id": 1,
    "title": "My first chat",
    "created_at": "2026-03-10T10:00:00Z",
    "updated_at": "2026-03-10T10:00:00Z",
    "user": 1,
    "messages": [
      {
        "id": 1,
        "conversation": 1,
        "role": "user",
        "content": "Hello",
        "created_at": "2026-03-10T10:00:00Z"
      }
    ]
  }
]
```

### 5) Conversation detail

**GET** `/api/v1/conversations/<id>/`

Example:

- `/api/v1/conversations/1/`

Headers:

```http
Authorization: Bearer <access_token>
```

Success response (`200`):

```json
{
  "_id": 1,
  "title": "My first chat",
  "created_at": "2026-03-10T10:00:00Z",
  "updated_at": "2026-03-10T10:00:00Z",
  "user": 1,
  "messages": [
    {
      "id": 1,
      "conversation": 1,
      "role": "user",
      "content": "Hello",
      "created_at": "2026-03-10T10:00:00Z"
    }
  ]
}
```