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

function validarDireccion() {
    let addressInput = document.getElementById("address");
    let cityInput = document.getElementById("city");
    let countryInput = document.getElementById("country");

    let addressError = document.getElementById("error-address");
    let cityError = document.getElementById("error-city");
    let countryError = document.getElementById("error-country");

    let isValid = true;

    // Validación de dirección
    if (addressInput.value.trim() === "") {
        addressInput.classList.add("incorrect");
        addressError.textContent = "Por favor, ingresa tu dirección.";
        isValid = false;
    } else {
        addressInput.classList.remove("incorrect");
        addressError.textContent = "";
    }

    // Validación de ciudad
    if (cityInput.value.trim() === "") {
        cityInput.classList.add("incorrect");
        cityError.textContent = "Por favor, ingresa tu ciudad.";
        isValid = false;
    } else {
        cityInput.classList.remove("incorrect");
        cityError.textContent = "";
    }

    // Validación de país
    if (countryInput.value.trim() === "") {
        countryInput.classList.add("incorrect");
        countryError.textContent = "Por favor, ingresa tu país.";
        isValid = false;
    } else {
        countryInput.classList.remove("incorrect");
        countryError.textContent = "";
    }

    return isValid;
}

function validarRegistro() {
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var name = document.getElementById('name');
    var lastname = document.getElementById('lastname');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var address = document.getElementById('address');
    var houseNumber = document.getElementById('house-number');
    var commune = document.getElementById('commune');
    var region = document.getElementById('region');

    if (username.value.trim() === '') {
        alert('Por favor, ingrese un nombre de usuario');
        username.focus();
        return false;
    }

    if (password.value.trim() === '') {
        alert('Por favor, ingrese una contraseña');
        password.focus();
        return false;
    }

    if (name.value.trim() === '') {
        alert('Por favor, ingrese su nombre');
        name.focus();
        return false;
    }

    if (lastname.value.trim() === '') {
        alert('Por favor, ingrese su apellido');
        lastname.focus();
        return false;
    }

    if (email.value.trim() === '') {
        alert('Por favor, ingrese su correo electrónico');
        email.focus();
        return false;
    }

    // Validación de formato de correo electrónico utilizando una expresión regular básica
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        alert('Por favor, ingrese un correo electrónico válido');
        email.focus();
        return false;
    }

    if (phone.value.trim() === '') {
        alert('Por favor, ingrese su número de teléfono');
        phone.focus();
        return false;
    }

    if (address.value.trim() === '') {
        alert('Por favor, ingrese su dirección');
        address.focus();
        return false;
    }

    if (houseNumber.value.trim() === '') {
        alert('Por favor, ingrese el número de su casa');
        houseNumber.focus();
        return false;
    }

    if (commune.value.trim() === '') {
        alert('Por favor, ingrese su comuna');
        commune.focus();
        return false;
    }

    if (region.value.trim() === '') {
        alert('Por favor, ingrese su región');
        region.focus();
        return false;
    }


    // Si todas las validaciones pasan, devuelve true para enviar el formulario
    return true;
}

function validarFormulario() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Validar que los campos no estén vacíos
    if (name.trim() === '') {
        alert('Por favor, ingrese su nombre.');
        return false;
    }
    if (email.trim() === '') {
        alert('Por favor, ingrese su correo electrónico.');
        return false;
    }
    if (subject.trim() === '') {
        alert('Por favor, ingrese el asunto.');
        return false;
    }
    if (message.trim() === '') {
        alert('Por favor, ingrese su mensaje.');
        return false;
    }

    // Validar el formato del correo electrónico
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return false;
    }

    // Si todas las validaciones pasan, devuelve true para enviar el formulario
    return true;
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



// Obtener todos los contenedores de tarjetas
const cardContainers = document.querySelectorAll('.card-container');

// Iterar sobre cada contenedor de tarjetas
cardContainers.forEach(container => {
    // Obtener todos los botones "Agregar al carrito" dentro del contenedor actual
    const botonesAgregar = container.querySelectorAll('.btn-agregar-carrito');

    // Iterar sobre cada botón "Agregar al carrito" dentro del contenedor actual
    botonesAgregar.forEach(boton => {
        // Agregar un evento clic a cada botón
        boton.addEventListener('click', () => {
            // Obtener el título del producto
            const tituloProducto = boton.closest('.card').querySelector('.card-title').innerText;

            // Mostrar una alerta indicando que el producto se ha agregado al carrito
            alert(`El producto "${tituloProducto}" se ha agregado al carrito.`);
        });
    });
});






