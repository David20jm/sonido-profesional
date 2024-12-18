function showImage(src, description) {
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');

    modalImage.src = src; // Cambia la fuente de la imagen
    modalDescription.textContent = description; // Cambia el texto de la descripción
}

