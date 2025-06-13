from app.models import CustomerCreate, VendorCreate, UserRead
from fastapi import APIRouter, Depends, HTTPException
from typing import Annotated, Any
from app.db.init_db import get_sesssion
from sqlmodel import Session
from app.actions import create_user, user_authenticate
from app.utils import (
    get_by_email,
    get_by_phone_number,
    generate_and_save_otp,
    send_email,
    confirm_otp,
    reset_password,
)
from app.schemas import (
    Token,
    ForgotPassWord,
    ResetPasswordSchema,
    OTPConfirmSchema,
    EmailSchema,
    ForgotPasswordResponse,
)
from app.models import userLogin
from app.core.security import create_access_token
from datetime import datetime, timedelta
from app.core.config import settings

router = APIRouter()
# access the database
CommonSession = Annotated[Session, Depends(get_sesssion)]


# customer signup
@router.post("/signup/customer", response_model=UserRead)
def create_new_customer(data: CustomerCreate, session: CommonSession) -> Any:
    email = get_by_email(session, data.email)
    phone_number = get_by_phone_number(session, data.phone_number)

    # check for the confirm password
    if data.password != data.confirm_password:
        raise HTTPException(status_code=400, detail="Passwords does not match")

    # Check for email
    if email:
        raise HTTPException(status_code=400, detail="Email already registered")

    # chceck for phone number
    if phone_number:
        raise HTTPException(status_code=400, detail="Phone number already registered")
    return create_user(session, data)


# Vendor signup
@router.post("signup/vendor", response_model=UserRead)
def create_new_vendor(data: VendorCreate, session: CommonSession) -> Any:
    email = get_by_email(session, data.email)
    phone_number = get_by_phone_number(session, data.phone_number)
    # check password
    if data.password != data.confirm_password:
        raise HTTPException(status_code=400, detail="Passwords don't match")
    # Check email
    if email:
        raise HTTPException(status_code=400, detail="Email already registered")

    # check phone number
    if phone_number:
        raise HTTPException(status_code=400, detail="Phone number already registered")
    return create_user(session, data)


# Login route
@router.post("/login", response_model=Token)
def user_login(session: CommonSession, Login_data: userLogin) -> Any:
    user = user_authenticate(
        session, email=Login_data.email, password=Login_data.password
    )
    if not user:
        raise HTTPException(status_code=400, detail="incorrect email or password")
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_TIME)
    session.add(user)
    session.commit()
    return {
        "access_token": create_access_token(user.id, expire_delta=access_token_expires),
        "expires": (datetime.now() + access_token_expires).isoformat(),
        "token_type": "bearer",
        "user": UserRead.from_orm(user),
    }


# forgot password route
@router.post("/forgot-password", response_model=ForgotPasswordResponse)
async def forgot_password(session: CommonSession, password_data: ForgotPassWord) -> Any:
    """
    Forgot password route
    """
    otp = generate_and_save_otp(session, password_data.email)
    if not otp:
        raise HTTPException(status_code=400, detail="Email not registered")
    my_email = EmailSchema(
        subject="Forgot Password",
        email=[password_data.email],
        body=f"<h2>Hello, your otp to reset password is {otp}!</h2>",
    )
    await send_email(my_email)
    return {"message": "OTP sent"}


@router.post("/confirm-otp", response_model=ForgotPasswordResponse)
def confirm_user_otp(
    session: CommonSession,
    data: OTPConfirmSchema,
) -> Any:
    """
    Confirm OTP
    """
    confirmed = confirm_otp(session, email=data.email, otp=data.otp)
    if not confirmed:
        raise HTTPException(
            status_code=400, detail="Something went wrong. Please retry"
        )
    return {"message": "OTP confirmed"}


@router.post("/reset-password", response_model=ForgotPasswordResponse)
def reset_user_password(
    session: CommonSession, password_schema: ResetPasswordSchema
) -> Any:
    """
    Reset password
    """
    if password_schema.new_password != password_schema.confirm_new_password:
        raise HTTPException(status_code=400, details="Passwords doesn't match")
    success = reset_password(
        session, email=password_schema.email, new_password=password_schema.new_password
    )
    if not success:
        raise HTTPException(status_code=400, detail="Email not registered")
    return {"message": "Password reset successfully"}

