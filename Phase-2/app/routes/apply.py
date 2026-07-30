from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.dependencies import get_current_user
from app import models, schemas

router = APIRouter(
    prefix="/api/apply",
    tags=["Applications"]
)


@router.post("/", response_model=schemas.ApplicationResponse)
def apply_to_project(
    application: schemas.ApplicationCreate,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    # Check if project exists
    project = (
        db.query(models.Project)
        .filter(models.Project.project_id == application.project_id)
        .first()
    )

    if not project:
        raise HTTPException(
            status_code=404,
            detail="Project not found."
        )

    # Prevent applying to your own project
    if project.creator_id == current_user.user_id:
        raise HTTPException(
            status_code=400,
            detail="You cannot apply to your own project."
        )

    # Check for duplicate application
    existing_application = (
        db.query(models.Application)
        .filter(
            models.Application.project_id == application.project_id,
            models.Application.applicant_id == current_user.user_id
        )
        .first()
    )

    if existing_application:
        raise HTTPException(
            status_code=400,
            detail="You have already applied to this project."
        )

    # Create application
    new_application = models.Application(
        project_id=application.project_id,
        applicant_id=current_user.user_id,
        status="Pending"
    )

    db.add(new_application)
    db.commit()
    db.refresh(new_application)

    return new_application