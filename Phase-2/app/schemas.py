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