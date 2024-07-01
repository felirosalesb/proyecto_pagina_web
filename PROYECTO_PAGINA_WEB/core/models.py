from django.db import models

# Create your models here.

class Producto(models.Model):
    codigo = models.CharField(max_length=4, primary_key=True)
    detalle = models.CharField(max_length=200)
    precio = models.IntegerField()
    stock = models.IntegerField()
    oferta = models.BooleanField()
    imagen = models.CharField(max_length=200)
    descripcion = models.CharField(max_length=255, default='Sin descripcion')
    def __str__(self):
        return self.detalle+" ("+self.codigo+")"
    


