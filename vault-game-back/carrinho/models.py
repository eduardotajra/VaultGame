from django.db import models
from sistemaLogin.models import Usuario
from jogos.models import Jogos
from decimal import Decimal


class Carrinho(models.Model):
    user = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    jogos = models.ManyToManyField(Jogos)
    qtdProduto = models.PositiveIntegerField(default=0)
    precoTotal = models.DecimalField(max_digits=10, decimal_places=2, default=Decimal('0.00'))

    def __str__(self):
        return f'Carrinho do {self.user}'