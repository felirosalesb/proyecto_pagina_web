
from django.urls import path
from .views import *
from django.contrib.auth.views import LoginView

urlpatterns = [
    path('', home, name="home"),
    path('login', LoginView.as_view(template_name= 'core/login.html' ) , name="login"),
    path('productos', productos, name="productos"),
    path('contacto', contacto,name="contacto"),
    path('carrito', carrito,name="carrito"),
    path('usuario', usuario,name="usuario"),
]
