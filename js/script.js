function openModal(imgSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var image = new Image();
    image.src = imgSrc;
    image.onload = function() {
        modal.style.display = "block";
        modal.style.width = "100%";
        modal.style.height = "100%";
        modalImg.src = imgSrc;
        modalImg.className = "imagen-en-el-modal"; 
    };
}
$(document).ready(function() {
    $('#contactForm').submit(function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe
        $('#mensaje-enviado').show(); // Mostrar el mensaje
    });
});
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = new bootstrap.Carousel(document.getElementById('carouselAutoplaying'), {
        interval: 4000, 
        wrap: true
    });
});