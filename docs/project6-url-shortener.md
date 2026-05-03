# Session 6 – URL Shortener Module

## Purpose of the module

This module allows users to create short URLs from long URLs and redirect users
from a short code to the original URL.

## Functional requirements

- The system accepts a long URL and returns a short URL.
- The system redirects users from a short code to the original URL.
- The system validates the original URL.
- The system stores URL mappings in PostgreSQL.
- The system counts redirects using click_count.

## Non-functional requirements

- The redirect should be fast.
- The short code should be unique.
- The API should return consistent JSON responses.
- The system should use correct HTTP status codes.
- The list endpoint should use Redis cache.

## Base62 encoding

Base62 converts numeric IDs into short text codes using digits, lowercase
letters, and uppercase letters. This is useful because database IDs can be
represented as short readable strings. For example, ID 125 becomes the
short code "21" in Base62, while ID 1,000,000 becomes "4c92" — only 4
characters long.

## Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| POST | /api/78942/v1/short-links | Create a new short link |
| GET | /api/78942/v1/short-links | List all short links |
| GET | /api/78942/v1/short-links/{id} | Show a single short link |
| GET | /r/{code} | Redirect to original URL |

## Testing evidence

The following scenarios have been verified with screenshots:

- Successful POST creating a short link (201 Created)
- Successful GET listing all short links (200 OK)
- Validation error for invalid URL (422 Unprocessable Entity)
- Validation error for missing album_number (422 Unprocessable Entity)
- Successful HTTP redirect (302 Found)
- Missing short code returns 404 Not Found
- Redis DBSIZE shows cache populated after list endpoint