// Variable para la posición actual del carrusel
let posicionActual = 0;

// Función para deslizar el carrusel
function deslizarCarrusel(direccion) {
    const carrusel = document.querySelector('.carrusel');
    const itemsVisibles = 3; // Número de items que se mostrarán a la vez
    const maxDesplazamiento = carrusel.scrollWidth - carrusel.clientWidth;
    const desplazamiento = carrusel.clientWidth / itemsVisibles;

    // Determinar nueva posición
    posicionActual += direccion * desplazamiento;

    // Limitar desplazamiento
    if (posicionActual < 0) {
        posicionActual = 0;
    } else if (posicionActual > maxDesplazamiento) {
        posicionActual = maxDesplazamiento;
    }

    // Mover el carrusel
    carrusel.scrollTo({
        left: posicionActual,
        behavior: 'smooth'
    });
}
