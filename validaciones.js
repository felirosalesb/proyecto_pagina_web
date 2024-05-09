function validarUser() {
    let usernameInput = document.querySelector(".formulario input[type='text']");
    let errorMessage = document.querySelector("#error-user");
    if (usernameInput.value.trim().length >= 6) {
        usernameInput.classList.add("correct");
        usernameInput.classList.remove("incorrect");
        errorMessage.innerHTML = "&nbsp;";
    } else {
        usernameInput.classList.add("incorrect");
        usernameInput.classList.remove("correct");
        errorMessage.innerHTML = "Error, su nombre de usuario debe tener minimo 6 caracteres.";
    }
}
function validarPassword() {
    let passwordInput = document.querySelector(".formulario input[type='password']");
    let errorMessage = document.querySelector("#error-password");
    if (passwordInput.value.trim().length >= 6) {
        passwordInput.classList.add("correct");
        passwordInput.classList.remove("incorrect");
        errorMessage.innerHTML = "&nbsp;";
    } else {
        passwordInput.classList.add("incorrect");
        passwordInput.classList.remove("correct");
        errorMessage.innerHTML = "Error, ingrese mínimo 6 caracteres.";
    }
}


document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los botones de "Agregar al carrito"
    const btnsAgregarCarrito = document.querySelectorAll('.btn-agregar-carrito');

    // Agregar un controlador de eventos click a cada botón
    btnsAgregarCarrito.forEach(btn => {
        btn.addEventListener('click', agregarAlCarrito);
    });

    // Función para manejar el evento click en los botones de "Agregar al carrito"
    function agregarAlCarrito(event) {
        // Obtener la información del producto asociada al botón que se hizo clic
        const nombre = event.target.parentElement.querySelector('.card-title').textContent;
        const precio = event.target.parentElement.querySelector('h5').textContent;

        // Crear un objeto representando el producto
        const producto = {
            nombre: nombre,
            precio: precio
        };

        // Obtener el carrito de compras del almacenamiento local o inicializar uno vacío
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        // Agregar el producto al carrito
        carrito.push(producto);

        // Guardar el carrito actualizado en el almacenamiento local
        localStorage.setItem('carrito', JSON.stringify(carrito));

        // Actualizar la visualización del carrito en la página
        mostrarCarrito(carrito);
    }

    // Función para mostrar los productos en el carrito en la página
    function mostrarCarrito(carrito) {
        const listaCarrito = document.querySelector('.cart-items');
        listaCarrito.innerHTML = '';

        // Recorrer el carrito y agregar cada producto a la lista
        carrito.forEach(producto => {
            const nuevoProducto = document.createElement('li');
            nuevoProducto.innerHTML = `
                <span>${producto.nombre}</span>
                <span>${producto.precio}</span>
            `;
            listaCarrito.appendChild(nuevoProducto);
        });

        // Calcular y mostrar el total del carrito
        const total = carrito.reduce((total, producto) => total + parseFloat(producto.precio.replace('$', '')), 0);
        const totalElemento = document.querySelector('.total-price');
        totalElemento.textContent = `$${total.toFixed(2)}`;
    }

    // Limpiar el carrito
    const btnLimpiarCarrito = document.querySelector('.btn-limpiar-carrito');
    btnLimpiarCarrito.addEventListener('click', function() {
        localStorage.removeItem('carrito'); // Eliminar el carrito del almacenamiento local
        mostrarCarrito([]); // Actualizar la visualización del carrito en la página
    });

    // Mostrar el carrito al cargar la página
    const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
    mostrarCarrito(carritoActual);
});









