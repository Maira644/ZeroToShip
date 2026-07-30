# Phase 3 – RESTful API Routing & Project Application System

## Overview

Phase 3 extends the backend developed in Phase 2 by implementing project retrieval, skill-based filtering, and project application functionality for the Peer Project Collaboration Platform.

The backend is developed using **FastAPI**, **PostgreSQL**, and **JWT Authentication**, following RESTful API principles.

---

## Objectives

The objectives of Phase 3 are:

- Implement RESTful GET endpoints for project retrieval.
- Implement parameterized skill search.
- Allow students to apply for projects.
- Prevent users from applying to their own projects.
- Continue using JWT authentication and authorization.

---

## Features Implemented

### Project APIs

- Create Project
- Get All Projects
- Get Project by ID
- Update Project
- Delete Project

### Skill Search

Projects can be filtered using query parameters.

Example:

GET /api/projects?skill=Python

---

### Project Application

Students can apply for projects using:

POST /api/apply

Each application is stored in the Applications table with a default status of **Pending**.

---

### Authorization

The application endpoint prevents users from applying to projects that they created themselves.

---

## Technologies Used

- Python
- FastAPI
- PostgreSQL
- SQLAlchemy ORM
- JWT Authentication
- Passlib (bcrypt)
- Pydantic
- Uvicorn

---

## API Endpoints

### Authentication

- POST /register
- POST /login
- GET /me

### Projects

- POST /api/projects
- GET /api/projects
- GET /api/projects/{project_id}
- PUT /api/projects/{project_id}
- DELETE /api/projects/{project_id}

### Applications

- POST /api/apply

---

## Previous Phase Integration

This phase builds upon the backend developed during **Phase 2**.

The following features were already implemented and tested during Phase 2:

- User Registration
- User Login
- JWT Authentication
- Get Current User (/me)
- Create Project
- Update Project
- Delete Project
- Project Ownership Authorization

Phase 3 extends the existing backend by introducing:

- Project Retrieval APIs
- Skill-Based Search
- Project Application Endpoint
- Self-Application Prevention

Screenshots demonstrating Phase 2 functionality are available in the **Phase-2/Output** folder. Therefore, the **Phase-3/Output** folder contains screenshots only for the newly implemented Phase 3 features.

---

## Folder Structure

Phase-3/

- README.md
- Output/

---

## Future Improvements

- Prevent duplicate project applications.
- Add application approval/rejection endpoints.
- Allow project owners to view applicants.
- Pagination for project listing.
- Advanced search using multiple skills.
