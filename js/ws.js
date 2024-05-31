// Registro
document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = {
        email: email,
        password: password
    };

    // Guardar usuario en localStorage
    localStorage.setItem('user', JSON.stringify(user));
    alert('Registro exitoso');
    window.location.href = './iniciosesion.html';
});

// Login
document.getElementById('iniciarSesion')?.addEventListener('click', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert('Se ha logueado correctamente');
        window.location.href = '../paginainicio.html';
    } else {
        alert('Correo electrónico o contraseña incorrectos');
    }
});
