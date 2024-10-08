from ninja import NinjaAPI
from sistemaLogin.api import login_router
from sistemaLogin.api import fui_router

api = NinjaAPI()

api.add_router('autenticacao/', login_router)
api.add_router('rota/',fui_router)
