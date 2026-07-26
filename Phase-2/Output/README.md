# Phase 2 – Output Screenshots

## Overview

This folder contains screenshots demonstrating the successful implementation and testing of all major features developed during **Phase 2** of the Peer Project Collaboration Platform.

The screenshots were captured using **FastAPI Swagger UI** after successfully executing each API endpoint.

---

# Screenshots

## 1. Login

**Files**

- `login_1.png`
- `login_2.png`

**Description**

These screenshots demonstrate successful user authentication using a registered email and password. After successful verification, the backend generates a JWT access token that is used to access protected endpoints.

---

## 2. Get Logged-in User

**Files**

- `get_me_1.png`
- `get_me_2.png`

**Description**

These screenshots demonstrate access to a protected route using a valid JWT token. The API successfully returns the authenticated user's profile information.

---

## 3. Create Project

**Files**

- `create_project_1.png`
- `create_project_2.png`

**Description**

These screenshots demonstrate successful project creation by an authenticated user. The newly created project is stored in the PostgreSQL database and linked to the logged-in user.

---

## 4. Update Project

**Files**

- `update_project_1.png`
- `update_project_2.png`

**Description**

These screenshots demonstrate successful modification of an existing project by its owner. The updated project information is returned after the request is processed.

---

## 5. Delete Project

**Files**

- `delete_project_1.png`
- `delete_project_2.png`

**Description**

These screenshots demonstrate successful deletion of a project by its creator. Only the project owner is authorized to perform this operation.

---

## 6. Authorization Test – Update

**Files**

- `authorization_update_1.png`
- `authorization_update_2.png`

**Description**

These screenshots demonstrate the authorization mechanism of the application. A logged-in user attempts to update another user's project, and the request is correctly rejected with a **403 Forbidden** response.

---

## 7. Authorization Test – Delete

**Files**

- `authorization_delete_1.png`
- `authorization_delete_2.png`

**Description**

These screenshots demonstrate that a user cannot delete another user's project. The backend validates project ownership and returns **403 Forbidden**, ensuring secure access control.

---

# Summary

The screenshots confirm the successful implementation of:

- User Authentication
- JWT Token Generation
- Protected API Endpoints
- Project Creation
- Project Update
- Project Deletion
- Resource-based Authorization
- Secure Access Control using JWT

All endpoints were tested successfully using **FastAPI Swagger UI**.