/**
 * REYES DESIGNS - Lógica de Navegación
 */

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    const topbar = document.querySelector('.topbar');

    // 1. Abrir/Cerrar menú móvil
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('is-active');
            navLinks.classList.toggle('active');
            
            // Evitar que el cuerpo se desplace cuando el menú está abierto
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
        });
    }

    // 2. Cerrar menú al hacer clic en un enlace (muy importante)
    navItems.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('is-active');
            navLinks.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // 3. Efecto de scroll en la barra superior
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            topbar.classList.add('scrolled');
        } else {
            topbar.classList.remove('scrolled');
        }
    });
});