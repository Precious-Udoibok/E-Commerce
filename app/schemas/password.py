# schema for forgot password
from pydantic import BaseModel, EmailStr
from pydantic import validator


class ForgotPassWord(BaseModel):
    email: EmailStr


class OTPConfirmSchema(BaseModel):
    email: EmailStr
    otp: str


class ResetPasswordSchema(BaseModel):
    email: EmailStr
    new_password: str
    confirm_new_password: str

    @validator("new_password")
    def password_strength(cls, value):
        import re

        pattern = r"^(?=.*[A-Z])(?=.*\d).+$"
        if not re.match(pattern, value):
            raise ValueError(
                "Password must include at least 1 uppercase letter and 1 number"
            )
        return value


class ForgotPasswordResponse(BaseModel):
    message: str


