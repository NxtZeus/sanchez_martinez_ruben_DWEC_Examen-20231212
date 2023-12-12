// Guardamos en un array todo lo que lleve la clase arrow.
const flechas = document.querySelectorAll('.arrow');

// Ahora recorreremos el array con forEach, declarando el parámetro que usaremos dentro como flecha.
flechas.forEach(flecha => {
    // Con este addEventListener cuando.
    flecha.addEventListener('click', function() {
        // Guarda con una ruta relativa.
        const subMenu = this.parentElement.nextElementSibling;
        // Aqui se pone la clase show para que se aplique el css.
        subMenu.classList.toggle('show');
        // Aqui le damos el giro al icono.
        this.classList.toggle('rotate-arrow');
    })
})