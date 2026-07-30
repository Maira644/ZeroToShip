from fastapi import FastAPI

from app.routes.auth import router as auth_router
from app.routes.projects import router as project_router
from app.routes.apply import router as apply_router

app = FastAPI(
    title="Peer Project Collaboration Platform API"
)

app.include_router(auth_router)
app.include_router(project_router)
app.include_router(apply_router)


@app.get("/")
def root():
    return {
        "message": "Backend is running successfully!"
    }