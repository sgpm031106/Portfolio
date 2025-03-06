
document.getElementById('button1').addEventListener('click', function() {
    window.location.href = 'general.html';
});

document.getElementById('button2').addEventListener('click', function() {
    window.location.href = 'hobbies.html';
});

document.getElementById('button3').addEventListener('click', function() {
    window.location.href = 'Proyects.html';
});

// Obtener elementos del DOM
const contactButton = document.getElementById('contactButton');
const contactSection = document.getElementById('contactSection');
const overlay = document.getElementById('overlay');

// Mostrar la sección de contacto y el fondo oscuro al hacer clic en el botón
contactButton.addEventListener('click', () => {
    if (contactSection.classList.contains('hidden')) {
        // Mostrar la sección de contacto primero
        contactSection.classList.remove('hidden');
        setTimeout(() => {
            contactSection.classList.add('visible');
        }, 10); // Pequeño retraso para activar la animación

        // Luego mostrar el overlay
        overlay.classList.remove('hidden');
        setTimeout(() => {
            overlay.classList.add('visible');
        }, 10); // Pequeño retraso para activar la animación
    } else {
        // Ocultar el overlay primero
        overlay.classList.remove('visible');
        setTimeout(() => {
            overlay.classList.add('hidden');
        }, 500); // Esperar a que termine la animación antes de ocultar

        // Luego ocultar la sección de contacto
        contactSection.classList.remove('visible');
        setTimeout(() => {
            contactSection.classList.add('hidden');
        }, 500); // Esperar a que termine la animación antes de ocultar
    }
});

// Cerrar la sección de contacto al hacer clic en el fondo oscuro
overlay.addEventListener('click', () => {
    // Ocultar el overlay primero
    overlay.classList.remove('visible');
    setTimeout(() => {
        overlay.classList.add('hidden');
    }, 500); // Esperar a que termine la animación antes de ocultar

    // Luego ocultar la sección de contacto
    contactSection.classList.remove('visible');
    setTimeout(() => {
        contactSection.classList.add('hidden');
    }, 500); // Esperar a que termine la animación antes de ocultar
});