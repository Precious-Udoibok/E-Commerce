"""edited Businesstype and user table"

Revision ID: 42245a9b8daf
Revises: 548b2ddbe4ff
Create Date: 2025-05-24 12:54:59.014349

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '42245a9b8daf'
down_revision: Union[str, None] = '548b2ddbe4ff'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('user', 'business_category')
    # ### end Alembic commands ###


def downgrade() -> None:
    """Downgrade schema."""
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('business_category', sa.VARCHAR(length=20), nullable=True))
    # ### end Alembic commands ###
