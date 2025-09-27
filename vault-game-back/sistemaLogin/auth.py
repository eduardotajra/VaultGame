from ninja.security import HttpBearer
from sistemaLogin.models import Usuario
from django.conf import settings
import jwt

class JWTAuth(HttpBearer):
    def authenticate(self, request, token):
        try:
            payload = jwt.decode(token, settings.SECRET_KEY_JWT, algorithms=["HS256"])
            user_id = payload.get("user_id")
            user = Usuario.objects.get(id=user_id)
            return user
        except (jwt.DecodeError, Usuario.DoesNotExist, jwt.ExpiredSignatureError) as e:
            print("Erro na autenticação JWT:", e)
            return None
