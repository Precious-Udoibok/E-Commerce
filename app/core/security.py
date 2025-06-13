from passlib.context import CryptContext
from typing import Union, Any
from datetime import timedelta, datetime
from app.core.config import settings
from jose import jwt

hashing = CryptContext(schemes=["bcrypt"], deprecated="auto")
ALGORITHM = "HS256"


# function to hash password
def get_hashed_password(password: str) -> str:
    """Convert the password to a hashed password"""
    return hashing.hash(password)


# function to verify password
def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verify the passowrd with the hashed password"""
    return hashing.verify(plain_password, hashed_password)


# create access token
def create_access_token(
    subject: Union[str, Any], expire_delta: timedelta = None
) -> str:
    """Function create the access token with user id and expire time"""
    if expire_delta:
        expire = datetime.utcnow() + expire_delta
    expire = (
        datetime.utcnow() + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_TIME)
    ).isoformat()
    # encode using the expire time and the user id that will be passed as subject
    to_encode = {"expire": expire, "sub": str(subject)}
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, ALGORITHM)
    return encoded_jwt
