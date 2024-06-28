from django.shortcuts import render, redirect, get_object_or_404
from.models import *
from django.contrib.auth.views import logout_then_login
from .forms import *

# Create your views here.
def home(request):
    return render(request, 'core/index.html')
def login(request):
    return render(request, 'core/login.html')
def carrito(request):
    return render(request, 'core/Carrito.html', {"carro":request.session.get("carro", [])})
def productos(request):
    productos = Producto.objects.all()
    return render(request, 'core/pagina_de_productos.html', {'productos':productos})
def contacto(request):
    return render(request, 'core/pagina_de_contacto.html')
def usuario(request):
    return render(request, 'core/usuario.html')
def logout(request):
    return logout_then_login(request, login_url="login")

#Registro
def registro(request):
    if request.method == "post":
        registro == Registro(request.post)
        if registro.is_valid():
            registro.save()
            return redirect(to="login")
    else:
        registro = Registro()
    return render(request, 'core/registro.html', {'form' :registro})


def lista_productos(request):
    productos = Producto.objects.all()
    return render(request, 'core/pagina_de_productos.html', {'productos': productos})



def agregar_al_carrito(request, producto_id):
    producto = get_object_or_404(Producto, codigo=producto_id)
    carrito = request.session.get('carrito', [])
    carrito.append({
        'id': producto.codigo,
        'titulo': producto.detalle,
        'precio': float(producto.precio),
    })
    request.session['carrito'] = carrito
    return redirect('lista_productos')

def limpiar_carrito(request):
    if 'carrito' in request.session:
        del request.session['carrito']
    return redirect('lista_productos')