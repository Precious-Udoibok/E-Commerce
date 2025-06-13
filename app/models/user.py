from sqlmodel import SQLModel, Field
from typing import Optional
import enum
from pydantic.networks import EmailStr
from pydantic import validator
from datetime import datetime


class RoleEnum(str, enum.Enum):
    customer = "customer"
    vendor = "vendor"


class BusinessType(str, enum.Enum):
    e_commerce = "e_commerce"
    beauty_professionals = "beauty_professionals"


class UserBase(SQLModel):
    full_name: str = Field(default="Moyosore Monica")
    email: EmailStr = Field(unique=True, index=True)
    phone_number: str = Field(default="08141859248", unique=True)


class User(UserBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    business_type: Optional[BusinessType]
    business_name: Optional[str]
    role: str
    hashed_password: str
    otp: Optional[str] = Field(default=None, nullable=True)
    otp_expiry: Optional[datetime] = Field(default=None, nullable=True)
    created_at: Optional[datetime] = Field(default=None, nullable=True)


class CustomerCreate(UserBase):
    role: RoleEnum = Field(default=RoleEnum.customer, const=True)
    password: str = Field(
        default="SecurePass123",
        min_length=8,
        max_length=20,
    )
    confirm_password: str = Field(default="SecurePass123", min_length=8, max_length=20)

    @validator("password")
    def password_strength(cls, value):
        import re

        pattern = r"^(?=.*[A-Z])(?=.*\d).+$"
        if not re.match(pattern, value):
            raise ValueError(
                "Password must include at least 1 uppercase letter and 1 number"
            )
        return value


class VendorCreate(UserBase):
    role: RoleEnum = Field(default=RoleEnum.vendor, const=True)
    password: str = Field(
        default="SecurePass123",
        min_length=8,
        max_length=20,
    )
    confirm_password: str = Field(default="SecurePass123", min_length=8, max_length=20)
    business_name: str = Field(default="LashTech")
    business_type: BusinessType

    @validator("password")
    def password_strength(cls, value):
        import re

        pattern = r"^(?=.*[A-Z])(?=.*\d).+$"
        if not re.match(pattern, value):
            raise ValueError(
                "Password must include at least 1 uppercase letter and 1 number"
            )
        return value


class UserRead(UserBase):
    id: int


class userLogin(SQLModel):
    email: EmailStr
    password: str
