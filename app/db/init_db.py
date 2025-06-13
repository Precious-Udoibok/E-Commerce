# Set up the database
from sqlmodel import SQLModel, create_engine, Session
from app.core.config import settings

engine = create_engine(settings.DATABASE_URL, echo=False)


def get_sesssion():
    with Session(engine) as session:
        yield session


# create the tables in database using sqlmodel
def create_db():
    SQLModel.metadata.create_all(engine)
