from django.db import models
from sistemaLogin.models import Usuario
from jogos.models import Jogos


class Carrinho(models.Model):
    user = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    jogos = models.ManyToManyField(Jogos)
    qtdProduto = models.PositiveIntegerField(default=0)
    precoTotal = models.FloatField(default=0.0)

    def __str__(self):
        return f'Carrinho do {self.user}'