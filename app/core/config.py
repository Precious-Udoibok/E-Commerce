# load environment variable
from dotenv import load_dotenv
import os

load_dotenv()


class Settings:
    ACCESS_TOKEN_EXPIRE_TIME: int = 60 * 24 * 8

    DATABASE_URL = os.getenv("DATABASE_URL")
    BACKEND_CORS_ORIGINS = os.getenv("BACKEND_CORS_ORIGINS", "").split(",")
    PROJECT_NAME = os.getenv("PROJECT_NAME")
    API_V1_STR = os.getenv("API_V1_STR")
    SECRET_KEY = os.getenv("SECRET_KEY")
    SMTP_USER = os.getenv("SMTP_USER")
    SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")
    SMTP_PORT = os.getenv("SMTP_PORT")
    EMAILS_FROM_EMAIL = os.getenv("EMAILS_FROM_EMAIL")
    SMTP_HOST = os.getenv("SMTP_HOST")
    USE_CREDENTIALS = os.getenv("USE_CREDENTIALS")
    SMTP_STARTTLS = os.getenv("SMTP_STARTTLS")
    SMTP_SSL_TLS = os.getenv("SMTP_SSL_TLS")

    class config:
        env_file = ".env"


settings = Settings()
