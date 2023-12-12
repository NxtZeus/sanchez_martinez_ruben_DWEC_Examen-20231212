// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Obtener el elemento de la hamburguesa por su clase
    const hamburguesaIcono = document.querySelector('.hamburger');

    // Obtiene el elemento de los enlaces de navegación por su clase
    const navLinks = document.querySelector('.nav-links');

    // Agrega un evento de clic al icono de la hamburguesa
    hamburguesaIcono.addEventListener('click', () => {
        // Alterna la clase 'active' en los enlaces de navegación
        navLinks.classList.toggle('active');
    });

    /*
    // Versión con función de callback anónima
    hamburguesaIcono.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  
    // Versión con función de callback declarativa
    function toggleNav() {
      navLinks.classList.toggle('active');
    }
  
    hamburguesaIcono.addEventListener('click', toggleNav);
    */
});
