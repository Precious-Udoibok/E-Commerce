from sqlmodel import Session
from app.models import CustomerCreate, VendorCreate, User
from app.core.security import get_hashed_password, verify_password
from typing import Optional
from app.utils import get_by_email
from datetime import datetime

# function to create a user/ Signup
def create_user(db: Session, data: CustomerCreate | VendorCreate) -> User:
    """
    This function create a new user for both vendor and customers
    """

    new_user = User(
        full_name=data.full_name,
        email=data.email,
        phone_number=data.phone_number,
        role=data.role,
        hashed_password=get_hashed_password(data.password),
        business_name=getattr(data, "business_name", None),
        business_type=getattr(data, "business_type", None),
        created_at=datetime.utcnow()
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user


# Function to Login
def user_authenticate(
    session: Session, *, email: str, password: str
) -> Optional[User]:
    # get account by email
    user = get_by_email(session, email)
    if not user:
        return None
    if not verify_password(password, user.hashed_password):
        return None
    return user
