
from django.urls import path
from .views import *
from django.contrib.auth.views import LoginView

urlpatterns = [
    path('', home, name="home"),
<<<<<<< HEAD
=======
    path('login', LoginView.as_view(template_name= 'core/login.html' ) , name="login"),
>>>>>>> 29d7f3b5888bce1c88d48c6d2258aba810f33d6b
    path('productos', productos, name="productos"),
    path('contacto', contacto,name="contacto"),
    path('carrito', carrito,name="carrito"),
    path('usuario', usuario,name="usuario"),
    path('login', LoginView.as_view(template_name= 'core/login.html'), name="login"),
]
