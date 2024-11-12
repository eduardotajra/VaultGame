from ninja import Router
from django.http import JsonResponse
from .models import Jogos
from .schemas import JogosSchema, RegistroJogos
from typing import List

jogos_router = Router()

@jogos_router.get('getJogos/', response=List[JogosSchema])
def getTodosJogos(request):
    return Jogos.objects.all()

@jogos_router.get('getJogo/{gameId}/', response=JogosSchema)
def getJogoPorId(request, gameId: int):
    try:
        jogo = Jogos.objects.get(id=gameId)
        return jogo
    except Jogos.DoesNotExist:
        return jogos_router.create_response(
            request, {'message': 'Jogo não encontrado'}, status=404
        )

@jogos_router.get('getJogosCategoria/{gameCategoria}/', response=List[JogosSchema])
def getJogosPorCategoria(request, gameCategoria: str):
    jogos_filtrados = Jogos.objects.filter(categoria=gameCategoria)
    return jogos_filtrados

@jogos_router.get('getJogosPlataforma/{gamePlataforma}/', response=List[JogosSchema])
def getJogosPorPlataforma(request, gamePlataforma: str):
    jogos_filtrados = Jogos.objects.filter(plataforma=gamePlataforma)
    return jogos_filtrados

@jogos_router.post('registrarJogo/', response={200: str, 400: str})
def registrarJogo(request, novoJogo: RegistroJogos):
    jogo_encontrado = Jogos.objects.filter(titulo=novoJogo.titulo).first()

    if jogo_encontrado:
        return JsonResponse(
            {"detail": "Jogo já está cadastrado"},
            status=400
        )
    
    Jogos.objects.create(
        titulo=novoJogo.titulo,
        descricao=novoJogo.descricao,
        preco=novoJogo.preco,
        avaliacao=novoJogo.avaliacao,
        promocao=novoJogo.promocao,
        publisher=novoJogo.publisher,
        plataforma=novoJogo.plataforma,
        idioma=novoJogo.idioma,
        idiomaAudio=novoJogo.idiomaAudio,
        categoria=novoJogo.categoria,
        imgUrl=novoJogo.imgUrl,
        imgJogo=novoJogo.imgJogo,
        lancamento = novoJogo.lancamento
    )

    return 'Jogo cadastrado com sucesso!'