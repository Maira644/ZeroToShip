from datetime import datetime, timedelta
from jose import jwt

# Secret key used to sign JWT tokens
SECRET_KEY = "your_super_secret_key_change_this_later"

# Algorithm used for encryption
ALGORITHM = "HS256"

# Token expiration time (30 minutes)
ACCESS_TOKEN_EXPIRE_MINUTES = 30


def create_access_token(data: dict):
    """
    Generate a JWT access token.
    """
    to_encode = data.copy()

    expire = datetime.utcnow() + timedelta(
        minutes=ACCESS_TOKEN_EXPIRE_MINUTES
    )

    to_encode.update({"exp": expire})

    encoded_jwt = jwt.encode(
        to_encode,
        SECRET_KEY,
        algorithm=ALGORITHM
    )

    return encoded_jwt