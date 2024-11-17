from ninja import Router
from django.shortcuts import get_object_or_404
from jogos.models import Jogos
from .models import Carrinho
from .schemas import CarrinhoSchema
from django.db import transaction
from sistemaLogin.auth import JWTAuth
from decimal import Decimal

carrinho_router = Router()

@carrinho_router.post('adicionar/{id}', auth=JWTAuth())
def adicionarAoCarrinho(request, id: int):
    jogo = get_object_or_404(Jogos, id=id)
    usuario = request.auth
    print("Usuário autenticado:", request.auth)
    carrinho, _ = Carrinho.objects.get_or_create(user=usuario)
    
    if not carrinho.jogos.filter(id=jogo.id).exists():
        with transaction.atomic():
            carrinho.jogos.add(jogo)
            carrinho.qtdProduto = carrinho.jogos.count()
            carrinho.precoTotal += Decimal(jogo.preco)
            carrinho.save()
        return {
            'msg': 'Jogo adicionado com sucesso!',
            'carrinho': {
                'qtdProduto': carrinho.qtdProduto,
                'precoTotal': float(carrinho.precoTotal)
            }
        }
    return {'msg': 'O jogo já está no carrinho.'}

@carrinho_router.delete('remover/{id}', auth=JWTAuth())
def deletarDoCarrinho(request, id: int):
    usuario = request.auth
    jogo = get_object_or_404(Jogos, id=id)

    try:
        carrinho = Carrinho.objects.get(user=usuario)
    except Carrinho.DoesNotExist:
        return {'msg': 'Carrinho não encontrado.'}

    if carrinho.jogos.filter(id=jogo.id).exists():
        with transaction.atomic():
            carrinho.jogos.remove(jogo)
            carrinho.qtdProduto = carrinho.jogos.count()
            carrinho.precoTotal -= Decimal(jogo.preco)
            carrinho.precoTotal = max(carrinho.precoTotal, Decimal('0.00'))
            carrinho.save()
        return {
            'msg': 'Jogo removido do carrinho com sucesso.',
            'carrinho': {
                'qtdProduto': carrinho.qtdProduto,
                'precoTotal': float(carrinho.precoTotal)
            }
        }
    return {'msg': 'O jogo não está no carrinho.'}

@carrinho_router.get('visualizar/', auth=JWTAuth(), response=CarrinhoSchema)
def visualizarCarrinho(request):
    usuario = request.auth
    try:
        carrinho = Carrinho.objects.get(user=usuario)
        return carrinho
        
    except Carrinho.DoesNotExist:
        return {
            'id': None,
            'qtdProduto': 0,
            'precoTotal': 0.0,
            'jogos': []
        }



