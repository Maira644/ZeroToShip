from pydantic import BaseModel, EmailStr
from typing import List


class UserRegister(BaseModel):
    name: str
    email: EmailStr
    password: str
    department: str
    skills: List[str]


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UserResponse(BaseModel):
    user_id: int
    name: str
    email: EmailStr
    department: str
    skills: List[str]

    class Config:
        from_attributes = True


class Token(BaseModel):
    access_token: str
    token_type: str


class ProjectCreate(BaseModel):
    title: str
    description: str
    required_skills: list[str]
    status: str


class ProjectUpdate(BaseModel):
    title: str
    description: str
    required_skills: list[str]
    status: str


class ProjectResponse(BaseModel):
    project_id: int
    creator_id: int
    title: str
    description: str
    required_skills: list[str]
    status: str

    class Config:
        from_attributes = True

class ApplicationCreate(BaseModel):
    project_id: int


class ApplicationResponse(BaseModel):
    application_id: int
    project_id: int
    applicant_id: int
    status: str

    class Config:
        from_attributes = True