from django.db import models

class Jogos(models.Model):
    titulo = models.CharField(max_length=100)
    descricao = models.CharField(max_length=100)
    preco = models.FloatField()
    avaliacao = models.CharField(max_length=100)
    promocao = models.IntegerField()
    publisher = models.CharField(max_length=100)
    plataforma = models.CharField(max_length=100)
    idioma = models.CharField(max_length=100)
    categoria = models.CharField(max_length=100)
    imgUrl = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.titulo

    class Meta:
        verbose_name = "Jogo"
        verbose_name_plural = "Jogos"