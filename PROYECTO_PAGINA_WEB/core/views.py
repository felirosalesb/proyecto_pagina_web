from django.shortcuts import render, redirect
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



def add_to_car(request, codigo):
    productos = Producto.objects.get(codigo=codigo)
    carro = request.session.get("carro", [])
    for item in carro:
        if item[0] == codigo:
            item[4] += 1
            item[5] = item[3] * item[4]
            break
    else:
        carro.append([codigo, productos.detalle, productos.imagen, productos.precio, 1, productos.precio])
    request.session["carro"]= carro
    return carrito(request)

def limpiar(request):
    request.session.flush()
    return carrito(request)

def dropitem(request, codigo):
    carro = request.session.get("carro", [])
    for item in carro:
        if item[0] == codigo:
            item[4] > 1
            item[4] += 1
            item[5] = item[3] * item[4]
            break
        else:
            carro.remove(item)
    request.session["carro"]= carro
    return carrito(request)