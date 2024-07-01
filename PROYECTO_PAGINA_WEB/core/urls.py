
from django.urls import path
from .views import *
from django.contrib.auth.views import LoginView
from django.contrib.auth.views import LogoutView
from . import views



urlpatterns = [
    path('', home, name="home"),
    path('logout/', LogoutView.as_view(next_page='home'), name='logout'),
    path('productos', productos, name="productos"),
    path('contacto', contacto,name="contacto"),
    path('carrito', carrito, name="carrito"),
    path('usuario', usuario,name="usuario"),
    path('login', LoginView.as_view(template_name= 'core/login.html'), name="login"),
    path('registro', registro, name="registro"),
    path('productos/', views.lista_productos, name='lista_productos'),
    path(r'^productos/(?P<producto_id>[\w-]+)/$', views.agregar_al_carrito, name='agregar_al_carrito'),
    path('productos/limpiar/', views.limpiar_carrito, name='limpiar_carrito'),
]