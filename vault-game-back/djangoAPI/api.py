from ninja import NinjaAPI
from sistemaLogin.api import login_router, fui_router
from jogos.api import jogos_router
from carrinho.api import carrinho_router

api = NinjaAPI()

api.add_router('autenticacao/', login_router)
api.add_router('jogos/', jogos_router)
api.add_router('carrinho/', carrinho_router)
api.add_router('rota/', fui_router)