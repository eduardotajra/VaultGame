from ninja import ModelSchema
from .models import Jogos

class JogosSchema(ModelSchema):
    class Config:
        model = Jogos
        model_fields = "__all__"

class RegistroJogos(ModelSchema):
    class Config:
        model = Jogos
        model_fields = "__all__"