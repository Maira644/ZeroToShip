from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app import models, schemas
from app.security import hash_password

router = APIRouter(tags=["Authentication"])


@router.post("/register", response_model=schemas.UserResponse)
def register_user(
    user: schemas.UserRegister,
    db: Session = Depends(get_db)
):
    # Check if email already exists
    existing_user = (
        db.query(models.User)
        .filter(models.User.email == user.email)
        .first()
    )

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already registered."
        )

    # Create new user
    new_user = models.User(
        name=user.name,
        email=user.email,
        password_hash=hash_password(user.password),
        department=user.department,
        skills=user.skills
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user