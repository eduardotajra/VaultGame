from ninja import ModelSchema
from .models import Usuario as modelUsuario

class LoginUsuario(ModelSchema):
    class Config():
        model = modelUsuario
        model_fields = ["username", "password"]

class RegistroUsuario(ModelSchema):
    groups: list = []
    user_permissions: list = []
    
    class Config():
        model = modelUsuario
        model_fields = "__all__"
    
