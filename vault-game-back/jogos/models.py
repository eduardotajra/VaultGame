from django.db import models
from django.utils import timezone

class Jogos(models.Model):
    titulo = models.CharField(max_length=100)
    descricao = models.CharField(max_length=1000)
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    avaliacao = models.CharField(max_length=100)
    promocao = models.CharField(max_length=3)
    publisher = models.CharField(max_length=100)
    plataforma = models.CharField(max_length=100)
    idioma = models.CharField(max_length=100)
    idiomaAudio = models.CharField(default='idioma.default', max_length=100)
    categoria = models.CharField(max_length=100)
    imgUrl = models.CharField(max_length=1000)
    imgJogo = models.CharField(default='img.url' ,max_length=1000)
    lancamento = models.DateField(default = timezone.now)

    def __str__(self):
        return self.titulo

    class Meta:
        verbose_name = "Jogo"
        verbose_name_plural = "Jogos"