from pydantic import BaseModel, EmailStr


class EmailSchema(BaseModel):
    email: list[EmailStr]  # List of recipients
    subject: str
    body: str
