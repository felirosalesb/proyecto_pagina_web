
from django.urls import path
from .views import *

urlpatterns = [
    path('', home),
    path('login', login),
    path('productos', productos),
    path('contacto', contacto),
    path('carrito', carrito),
    path('usuario', usuario),
]
