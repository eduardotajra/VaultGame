from ninja import Router
from django.http import JsonResponse
from .schemas import UsuarioSchema
from django.contrib import auth
from django.conf import settings
from datetime import datetime, timedelta
import jwt

user_router = Router()

@user_router.post('/login', response={200: dict, 401: dict})
def login(request, usuario: UsuarioSchema):
    user = auth.authenticate(
        request,
        username=usuario.email,
        password=usuario.senha
    )

    if user is None:
        return JsonResponse({'error': 'Email ou senha inválidos.'}, status=401)

    auth.login(request, user)

    expiration_time = datetime.now() + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRATION)

    payload = {
        'user_id': user.id,
        'exp': expiration_time.timestamp()
    }

    token = jwt.encode(payload, settings.SECRET_KEY_JWT, algorithm='HS256')

    return JsonResponse({'token': token}, status=200)
