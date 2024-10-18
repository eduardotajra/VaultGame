from ninja import Router
from django.http import JsonResponse
from .schemas import LoginUsuario, RegistroUsuario
from .models import Usuario as modelUsuario
from django.conf import settings
from datetime import datetime, timedelta
from djangoAPI.auth import JWTAuth
import jwt

login_router = Router()

fui_router = Router()

@fui_router.get('protegida/', auth = JWTAuth())
def fui(request):
    return JsonResponse({"msg":"Logado com Sucesso!"})

@login_router.post('login/', auth=None)
def logar(request, login: LoginUsuario):
    user = modelUsuario.objects.filter(username=login.username).first()
    if user and user.check_password(login.password):
        expiration_time = datetime.now() + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE)
        print(f"Token expirando em: {expiration_time}")

        payload = {
            "user": user.username,
            "exp": int(expiration_time.timestamp())
        }

        token = jwt.encode(payload, settings.SECRET_KEY_JWT, algorithm="HS256")

        return JsonResponse({"token": token})
    else:
        return JsonResponse({"msg": "Usuário não identificado"}, status=401)

@login_router.post('register/', auth=None)
def registrar(request, novoUsuario: RegistroUsuario):
    if modelUsuario.objects.filter(username=novoUsuario.username).exists():
        return JsonResponse({"error": "Username já cadastrado!"}, status=400)
    
    user = modelUsuario.objects.create_user(
        username=novoUsuario.username,
        email=novoUsuario.email,
        password=novoUsuario.password
    )
    return JsonResponse({
        "id": user.id,
        "username": user.username,
        "email": user.email,
    }, status=201)
