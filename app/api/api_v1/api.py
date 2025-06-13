from fastapi import APIRouter
from app.api.api_v1.endpoints import admin, auth

api_router = APIRouter()

# non-admin route
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])


# admin route
