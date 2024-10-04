from ninja import ModelSchema
from .models import Usuario as ModelUsuario

class Usuario(ModelSchema):
    class Config():
        model = ModelUsuario
        model_fields = '__all__'

