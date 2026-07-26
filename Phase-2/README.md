# Phase 2 – Authentication & Authorization

## Project Overview

Phase 2 of the **Peer Project Collaboration Platform** focuses on building the backend authentication and authorization system. The objective is to allow students to securely register, log into the platform, and manage their own projects while preventing unauthorized access to resources owned by other users.

This backend is developed using **FastAPI**, **PostgreSQL**, and **SQLAlchemy**. Passwords are securely hashed using **bcrypt**, and user authentication is implemented using **JWT (JSON Web Tokens)**.

---

# Objectives

The objectives of this phase were:

- Implement secure user registration.
- Implement secure user login.
- Store passwords using hashing instead of plain text.
- Generate JWT access tokens after successful login.
- Protect API endpoints using authentication.
- Ensure only the owner of a project can edit or delete it.
- Test all authentication and authorization functionalities.

---

# Features Implemented

## Authentication

- User Registration (`POST /register`)
- User Login (`POST /login`)
- Password Hashing using bcrypt
- JWT Token Generation
- Protected Routes
- Get Logged-in User (`GET /me`)

## Project Management

- Create Project (`POST /projects`)
- Update Project (`PUT /projects/{project_id}`)
- Delete Project (`DELETE /projects/{project_id}`)

## Authorization

Authorization guards ensure that:

- A user can edit only their own project.
- A user can delete only their own project.
- Any attempt to modify another user's project returns **403 Forbidden**.

---

# Project Structure

```
Phase-2
│
├── app
│   ├── routes
│   │   ├── __init__.py
│   │   └── auth.py
│   │
│   ├── __init__.py
│   ├── database.py
│   ├── dependencies.py
│   ├── jwt_handler.py
│   ├── main.py
│   ├── models.py
│   ├── schemas.py
│   └── security.py
│
├── Output
│   ├── Login Screenshots
│   ├── Get Me Screenshots
│   ├── Create Project Screenshots
│   ├── Update Project Screenshots
│   ├── Delete Project Screenshots
│   └── Authorization Screenshots
│
├── requirements.txt
└── README.md
```

---

# Technologies Used

| Technology | Purpose |
|------------|---------|
| Python 3.11 | Programming Language |
| FastAPI | Backend Framework |
| PostgreSQL | Database |
| SQLAlchemy | ORM |
| Pydantic | Data Validation |
| Passlib + bcrypt | Password Hashing |
| python-jose | JWT Authentication |
| Uvicorn | ASGI Server |
| Swagger UI | API Testing & Documentation |

---

# API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /register | Register a new user |
| POST | /login | Login user and generate JWT |
| GET | /me | Get logged-in user |

---

## Projects

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /projects | Create Project |
| PUT | /projects/{id} | Update Project |
| DELETE | /projects/{id} | Delete Project |

---

# Authentication Workflow

1. User registers with their details.
2. Password is securely hashed before storing it in the database.
3. User logs in using email and password.
4. Credentials are verified.
5. A JWT access token is generated.
6. The client includes this token when accessing protected endpoints.
7. Protected endpoints validate the token before processing the request.

---

# Authorization Workflow

Every project stores the ID of its creator.

Before updating or deleting a project:

- The backend retrieves the logged-in user from the JWT token.
- The backend compares the logged-in user's ID with the project's creator ID.
- If both IDs match, the request is processed.
- Otherwise, the request is rejected with **403 Forbidden**.

This ensures that users can only manage their own projects.

---

# Testing & Output

All implemented endpoints were tested successfully using **Swagger UI**.

The Output folder contains screenshots demonstrating:

- Successful Registration
- Successful Login
- JWT Token Generation
- Protected Route Access
- Project Creation
- Project Update
- Project Deletion
- Authorization Failure (403 Forbidden)

---

# Learning Outcomes

Through this phase, I learned:

- Building REST APIs using FastAPI.
- Database integration with PostgreSQL and SQLAlchemy.
- Secure password hashing using bcrypt.
- JWT-based authentication.
- Dependency Injection in FastAPI.
- Route protection using authentication.
- Implementing authorization based on resource ownership.
- Testing APIs using Swagger UI.

---

# Author

**Maira Asghar**

Software Engineering Student

NED University of Engineering & Technology

Project: **Peer Project Collaboration Platform**

ZeroToShip Summer Activity 2026