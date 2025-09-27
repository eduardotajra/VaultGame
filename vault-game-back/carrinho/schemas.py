from ninja import ModelSchema
from typing import List
from .models import Carrinho
from jogos.schemas import JogosSchema

class CarrinhoSchema(ModelSchema):
    precoTotal: float
    jogos: List[JogosSchema]

    class Config:
        model = Carrinho
        model_fields = ['id', 'user', 'qtdProduto', 'precoTotal', 'jogos']
        orm_mode = True
