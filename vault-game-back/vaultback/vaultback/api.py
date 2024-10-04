from ninja import NinjaAPI
from users.api import user_router

api = NinjaAPI()

api.add_router('usuarios/', user_router)