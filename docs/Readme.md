# WSD Project – Task Management API

## API Version
Current version: `/api/78942/v1`

All task endpoints are available under this versioned prefix.

## Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| GET | /api/78942/v1/tasks | List all tasks |
| POST | /api/78942/v1/tasks | Create a new task |
| GET | /api/78942/v1/tasks/{id} | Get a single task |
| PUT | /api/78942/v1/tasks/{id} | Update a task |
| DELETE | /api/78942/v1/tasks/{id} | Delete a task |
| GET | /api/health | Health check |

## Status Codes

| Code | Name | When Used |
|------|------|-----------|
| 200 | OK | Successful read or update |
| 201 | Created | Resource successfully created |
| 204 | No Content | Resource successfully deleted |
| 404 | Not Found | Resource with given ID does not exist |
| 422 | Unprocessable Entity | Validation failed |

## Error Response Format

All errors follow a consistent JSON structure:

{
    "error": {
        "status": 404,
        "message": "Task not found",
        "path": "/api/78942/v1/tasks/99999"
    }
}

## Technology Stack

- Backend: Laravel (PHP 8.4)
- Database: PostgreSQL 16
- Cache: Redis 7
- Reverse Proxy: Nginx 1.27
- Deployment: Docker Compose