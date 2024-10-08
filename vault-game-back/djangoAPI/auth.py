from django.conf import settings
from django.http import HttpRequest
from ninja.security import HttpBearer
from sistemaLogin.models import Usuario
import jwt

class InvalidToken(Exception):
    pass

class JWTAuth(HttpBearer):
    def authenticate(self, request: HttpRequest, token: str):
        try:
            data = jwt.decode(token, settings.SECRET_KEY_JWT, algorithms=["HS256"])
        except jwt.ExpiredSignatureError:
            raise InvalidToken("Token expirou")
        except jwt.InvalidTokenError:
            raise InvalidToken("Token inválido")
        
        user = Usuario.objects.filter(username=data['user']).first()
        
        if user:
            return user
        
        raise InvalidToken("User not found")
