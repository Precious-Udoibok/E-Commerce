from sqlmodel import Session, select
from app.models import User
from typing import Optional
from pydantic import EmailStr
import random
from datetime import datetime, timedelta
from app.schemas import EmailSchema
from fastapi_mail import FastMail, MessageSchema, MessageType
from app.core.email_config import conf
from app.core.security import get_hashed_password


# function to get email
def get_by_email(session: Session, email: str) -> Optional[User]:
    return session.exec(select(User).where(User.email == email.lower())).first()


# function to get phone_number
def get_by_phone_number(session: Session, phone_number: str) -> Optional[User]:
    return session.exec(select(User).where(User.phone_number == phone_number)).first()


# function to generate otp
def generate_and_save_otp(session: Session, email: EmailStr):
    user = get_by_email(session, email=email)
    if not user:
        return False
    otp = f"{random.randint(100000, 999999)}"
    user.otp = otp
    user.otp_expiry = datetime.utcnow() + timedelta(minutes=10)
    session.add(user)
    session.commit()
    return otp


# function to send email
async def send_email(email: EmailSchema):
    message = MessageSchema(
        subject=email.subject,
        recipients=email.model_dump().get("email"),
        body=email.body,
        subtype=MessageType.html,  # You can also use "plain" for text emails
    )

    fm = FastMail(conf)
    await fm.send_message(message)


# function to confirm otp
def confirm_otp(session: Session, email: EmailStr, otp: str):
    user = get_by_email(session, email=email)
    if (
        not user
        or user.otp != otp
        or (user.otp_expiry and user.otp_expiry < datetime.utcnow())
    ):
        return False

    return True


# function to rest password
def reset_password(session: Session, email: EmailStr, new_password: str):
    user = get_by_email(session, email=email)
    if not user:
        return False

    user.hashed_password = get_hashed_password(new_password)
    session.add(user)
    session.commit()
    return True
