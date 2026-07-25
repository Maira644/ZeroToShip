from fastapi import FastAPI

from app.routes.auth import router as auth_router

app = FastAPI(
    title="Peer Project Collaboration Platform API"
)

app.include_router(auth_router)


@app.get("/")
def root():
    return {
        "message": "Backend is running successfully!"
    }