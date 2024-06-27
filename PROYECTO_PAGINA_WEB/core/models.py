from django.db import models

#agrege esto
from django.contrib.auth.models import User

# Create your models here.

class Producto(models.Model):
    codigo = models.CharField(max_length=4, primary_key=True)
    detalle = models.CharField(max_length=200)
    precio = models.IntegerField()
    stock = models.IntegerField()
    oferta = models.BooleanField()
    imagen = models.CharField(max_length=200)
    
    def __str__(self):
        return self.detalle+" ("+self.codigo+")"
    
    # carrito 
class Carrito(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    Producto = models.ManyToManyField('Producto', through='ItemCarrito')

    def __str__(self):
        return f'Carrito de {self.usuario.username}'
    
    # itemCarrito
class ItemCarrito(models.Model):
    carrito = models.ForeignKey(Carrito, on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    stock = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f'{self.stock} x {self.producto.detalle} en {self.carrito}'

