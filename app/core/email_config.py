from fastapi_mail import ConnectionConfig
from app.core.config import settings


conf = ConnectionConfig(
    MAIL_USERNAME=settings.SMTP_USER,
    MAIL_PASSWORD=settings.SMTP_PASSWORD,
    MAIL_FROM=settings.EMAILS_FROM_EMAIL,
    MAIL_PORT=int(settings.SMTP_PORT),
    MAIL_SERVER=settings.SMTP_HOST,
    MAIL_STARTTLS=settings.SMTP_STARTTLS == "True",  # This is for Gmail
    MAIL_SSL_TLS=settings.SMTP_SSL_TLS == "True",  # Only one should be true!
    USE_CREDENTIALS=settings.USE_CREDENTIALS == "True",
    VALIDATE_CERTS=True,
)
