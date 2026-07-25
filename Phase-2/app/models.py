from sqlalchemy import Column, Integer, String, Text, ForeignKey
from sqlalchemy.dialects.postgresql import ARRAY
from sqlalchemy.orm import relationship

from app.database import Base


class User(Base):
    __tablename__ = "users"

    user_id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(255), unique=True, nullable=False)
    password_hash = Column(Text, nullable=False)
    department = Column(String(100), nullable=False)
    skills = Column(ARRAY(Text), nullable=False)

    projects = relationship("Project", back_populates="creator")
    applications = relationship("Application", back_populates="applicant")


class Project(Base):
    __tablename__ = "projects"

    project_id = Column(Integer, primary_key=True, index=True)
    creator_id = Column(Integer, ForeignKey("users.user_id"), nullable=False)
    title = Column(String(200), nullable=False)
    description = Column(Text, nullable=False)
    required_skills = Column(ARRAY(Text), nullable=False)
    status = Column(String(20), nullable=False)

    creator = relationship("User", back_populates="projects")
    applications = relationship("Application", back_populates="project")


class Application(Base):
    __tablename__ = "applications"

    application_id = Column(Integer, primary_key=True, index=True)
    project_id = Column(Integer, ForeignKey("projects.project_id"), nullable=False)
    applicant_id = Column(Integer, ForeignKey("users.user_id"), nullable=False)
    status = Column(String(20), nullable=False)

    project = relationship("Project", back_populates="applications")
    applicant = relationship("User", back_populates="applications")