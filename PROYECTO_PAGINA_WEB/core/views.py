from django.shortcuts import render
from.models import *

# Create your views here.
def home(request):
    return render(request, 'core/index.html')
def login(request):
    return render(request, 'core/login.html')
def carrito(request):
    return render(request, 'core/Carrito.html')
def productos(request):
    productos = Producto.objects.all()
    return render(request, 'core/pagina_de_productos.html', {'productos':productos})

def contacto(request):
    return render(request, 'core/pagina_de_contacto.html')
def usuario(request):
    return render(request, 'core/usuario.html')

