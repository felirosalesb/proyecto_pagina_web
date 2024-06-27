
from django.urls import path
from .views import *
from django.contrib.auth.views import LoginView
from . import views

urlpatterns = [
    path('', home, name="home"),
    path('logout', logout, name="logout"),
    path('productos', productos, name="productos"),
    path('contacto', contacto,name="contacto"),
    path('carrito', carrito, name="carrito"),
    path('usuario', usuario,name="usuario"),
    path('login', LoginView.as_view(template_name= 'core/login.html'), name="login"),
    path('registro', registro, name="registro"),
    #carritoadd
    path('agregar/<str:producto_id>/', views.agregar_al_carrito, name='agregar_al_carrito'),
]
