from sqlalchemy.orm import Session

from app.database import get_db
from app.dependencies import get_current_user
from app import models, schemas
from fastapi import APIRouter, Depends, HTTPException

router = APIRouter(
    prefix="/api/projects",
    tags=["Projects"]
)


@router.post("/", response_model=schemas.ProjectResponse)
def create_project(
    project: schemas.ProjectCreate,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    new_project = models.Project(
        creator_id=current_user.user_id,
        title=project.title,
        description=project.description,
        required_skills=project.required_skills,
        status=project.status
    )

    db.add(new_project)
    db.commit()
    db.refresh(new_project)

    return new_project

from typing import Optional


@router.get("/", response_model=list[schemas.ProjectResponse])
def get_all_projects(
    skill: Optional[str] = None,
    db: Session = Depends(get_db)
):
    query = db.query(models.Project)

    if skill:
        query = query.filter(
            models.Project.required_skills.any(skill)
        )

    return query.all()

@router.get("/{project_id}", response_model=schemas.ProjectResponse)
def get_project_by_id(
    project_id: int,
    db: Session = Depends(get_db)
):
    project = (
        db.query(models.Project)
        .filter(models.Project.project_id == project_id)
        .first()
    )

    if not project:
        raise HTTPException(
            status_code=404,
            detail="Project not found."
        )

    return project

@router.put("/{project_id}", response_model=schemas.ProjectResponse)
def update_project(
    project_id: int,
    project: schemas.ProjectUpdate,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    # Find project
    db_project = (
        db.query(models.Project)
        .filter(models.Project.project_id == project_id)
        .first()
    )

    # Check if project exists
    if not db_project:
        raise HTTPException(
            status_code=404,
            detail="Project not found."
        )

    # Authorization check
    if db_project.creator_id != current_user.user_id:
        raise HTTPException(
            status_code=403,
            detail="You are not allowed to edit this project."
        )

    # Update project
    db_project.title = project.title
    db_project.description = project.description
    db_project.required_skills = project.required_skills
    db_project.status = project.status

    db.commit()
    db.refresh(db_project)

    return db_project

@router.delete("/{project_id}")
def delete_project(
    project_id: int,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    # Find project
    db_project = (
        db.query(models.Project)
        .filter(models.Project.project_id == project_id)
        .first()
    )

    # Check if project exists
    if not db_project:
        raise HTTPException(
            status_code=404,
            detail="Project not found."
        )

    # Authorization check
    if db_project.creator_id != current_user.user_id:
        raise HTTPException(
            status_code=403,
            detail="You are not allowed to delete this project."
        )

    # Delete project
    db.delete(db_project)
    db.commit()

    return {
        "message": "Project deleted successfully."
    }