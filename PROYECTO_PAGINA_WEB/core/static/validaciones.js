function validarInicioSesion() {
    let usernameInput = document.getElementById("username");
    let passwordInput = document.getElementById("password");
    let usernameError = document.getElementById("error-username");
    let passwordError = document.getElementById("error-password");
    let isValid = true;

    // Validación del nombre de usuario
    if (usernameInput.value.trim() === "") {
        usernameInput.classList.add("incorrect");
        usernameError.textContent = "Por favor, ingresa tu nombre de usuario.";
        isValid = false;
    } else {
        usernameInput.classList.remove("incorrect");
        usernameError.textContent = "";
    }

    // Validación de la contraseña
    if (passwordInput.value.trim() === "") {
        passwordInput.classList.add("incorrect");
        passwordError.textContent = "Por favor, ingresa tu contraseña.";
        isValid = false;
    } else {
        passwordInput.classList.remove("incorrect");
        passwordError.textContent = "";
    }

    return isValid;
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

    // Validación de formato de correo electrónico 
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








