// Función para el desplazamiento suave hacia un elemento específico con un desplazamiento personalizado
function scrollToElement(element, offset = 0) {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop + offset // Aquí se ajusta el desplazamiento con el parámetro 'offset'
    });
}

// Capturar los clics en los enlaces de la barra de navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        const section = document.querySelector(sectionId);
        // Puedes ajustar el valor de 'offset' según tus necesidades
        scrollToElement(section, -100); // Por ejemplo, aquí el desplazamiento es 100 píxeles menos
    });
});
