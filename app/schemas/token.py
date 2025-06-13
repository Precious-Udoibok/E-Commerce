# schema from the token
from pydantic import BaseModel
from datetime import datetime
from typing import Optional
from app.models import UserRead


class Token(BaseModel):
    access_token: str
    expires: datetime
    token_type: str
    user: UserRead


# This is use when you want to decode the token,
# to know which user is making the request
class TokenPayLoad(BaseModel):
    sub: Optional[int] = None
