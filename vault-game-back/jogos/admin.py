from django.contrib import admin
from .models import Jogos

class JogosAdmin(admin.ModelAdmin):

    list_display = ('titulo', 'preco', 'plataforma', 'categoria', 'avaliacao')
    
    search_fields = ('titulo', 'plataforma', 'categoria')
    
    list_filter = ('plataforma', 'categoria', 'preco')

admin.site.register(Jogos, JogosAdmin)