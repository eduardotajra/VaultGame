from ninja import ModelSchema
from .models import Carrinho

class CarrinhoSchema(ModelSchema):
    class Config():
        model = Carrinho
        model_fields = "__all__"