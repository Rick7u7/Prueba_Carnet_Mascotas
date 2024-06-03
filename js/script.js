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
//$(document).ready(function() {
//    $('#contactForm').submit(function(event) {
//        event.preventDefault(); // Evitar que el formulario se envíe
//        $('#mensaje-enviado').show(); // Mostrar el mensaje
//    });
//});
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


function Formulario_de_mascota() {
    var nombre_mascota = $("#nombre_mascota").val()
    var especie = $("#especie").val()
    var edad = $("#edad").val()
    var nombre_propietario = $("#nombre_propietario").val()
    var erroCampoRequerido = "<p class='text-danger errorForm'>*CAMPO REQUERIDO</p>"
    var errores = ""
    $(".errorForm").remove()
    if (nombre_mascota.length <= 1) {
        errores = errores + "<p class='text-danger'>*NOMBRE DE LA MASCOTA ES CAMPO REQUERIDO O DEBE SER MAYOR A 1 CARACTER</p>"
        $("#campoNombreMascota").append(erroCampoRequerido)
    }
    if (especie.length == 0) {
        errores = errores + "<p class='text-danger'>*ESPECIE ES CAMPO REQUERIDO</p>"
        $("#campoEspecie").append(erroCampoRequerido)
    }
    if (edad.length == 0) {
        errores = errores + "<p class='text-danger'>*EDAD ES CAMPO REQUERIDO</p>"
        $("#campoEdad").append(erroCampoRequerido)
    }
    if (nombre_propietario.length == 0) {
        errores = errores + "<p class='text-danger'>*NOMBRE DEL PROPIETARIO ES CAMPO REQUERIDO</p>"
        $("#campoNombrePropietario").append(erroCampoRequerido)
    }
    if (errores != "") {
        //alert(errores)
        //$("#errores").html(errores) 
        Swal.fire({
            title: "Error!",
            html: errores,
            icon: "error"
        });
    } else {
        $("#errores").empty()
        Swal.fire({
            title: "Confirmacion!",
            text: "Tu informacion a sido enviada exitosamente!",
            icon: "success"
        });
    }
    return false

}
function Formulario_de_dueño() {
    var nombre_propietario = $("#nombre_propietario").val()
    var correo = $("#correo").val()
    var contraseña = $("#contraseña").val()
    var confirmacion_contraseña = $("#confirmacion_contraseña").val()
    var erroCampoRequerido = "<p class='text-danger errorForm'>*CAMPO REQUERIDO</p>"
    var errores = ""
    $(".errorForm").remove()
    if (nombre_propietario.length <= 1) {
        errores = errores + "<p class='text-danger'>*NOMBRE DEL PROPIETARIO ES CAMPO REQUERIDO O DEBE SER MAYOR A 1 CARACTER</p>"
        $("#campoPropietario").append(erroCampoRequerido)
    }
    if (correo.length == 0) {
        errores = errores + "<p class='text-danger'>*CORREO ES CAMPO REQUERIDO</p>"
        $("#campoCorreo").append(erroCampoRequerido)
    }
    if (contraseña.length == 0) {
        errores = errores + "<p class='text-danger'>*CONTRASEÑA ES CAMPO REQUERIDO</p>"
        $("#campoContraseña").append(erroCampoRequerido)
    }
    if (confirmacion_contraseña.length == 0) {
        errores = errores + "<p class='text-danger'>*LAS CONTRASEÑAS NO COINCIDEN</p>"
        $("#campoConfirmacion").append(erroCampoRequerido)
    }
    if (errores != "") {
        //alert(errores)
        //$("#errores").html(errores) 
        Swal.fire({
            title: "Error!",
            html: errores,
            icon: "error"
        });
    } else {
        $("#errores").empty()
        Swal.fire({
            title: "Confirmacion!",
            text: "Tu informacion a sido enviada exitosamente!",
            icon: "success"
        });
    }
    return false

}
function Formulario_de_vacuna() {
    var nombre_mascota = $("#nombre_mascota").val()
    var tipo_vacuna = $("#tipo_vacuna").val()
    var fecha_de_administracion = $("#fecha_de_administracion").val()
    var erroCampoRequerido = "<p class='text-danger errorForm'>*CAMPO REQUERIDO</p>"
    var errores = ""
    $(".errorForm").remove()
    if (nombre_mascota.length <= 1) {
        errores = errores + "<p class='text-danger'>*NOMBRE DE LA MASCOTA ES CAMPO REQUERIDO O DEBE SER MAYOR A 1 CARACTER</p>"
        $("#campoNombreMascota").append(erroCampoRequerido)
    }
    if (tipo_vacuna.length == 0) {
        errores = errores + "<p class='text-danger'>*TIPO DE VACUNA ES CAMPO REQUERIDO</p>"
        $("#campoTipoVacuna").append(erroCampoRequerido)
    }
    if (fecha_de_administracion.length == 0) {
        errores = errores + "<p class='text-danger'>*FECHA DE ADMINISTRACION ES CAMPO REQUERIDO</p>"
        $("#campoFechaAdministracion").append(erroCampoRequerido)
    }
    if (errores != "") {
        //alert(errores)
        //$("#errores").html(errores) 
        Swal.fire({
            title: "Error!",
            html: errores,
            icon: "error"
        });
    } else {
        $("#errores").empty()
        Swal.fire({
            title: "Confirmacion!",
            text: "Tu informacion a sido enviada exitosamente!",
            icon: "success"
        });
    }
    return false

}
function Formulario_de_contacto() {
    var nombre_propietario = $("#nombre_propietario").val()
    var nombre_mascota = $("#nombre_mascota").val()
    var correo = $("#correo").val()
    var numero_de_contacto = $("#numero_de_contacto").val()
    var fecha_de_administracion_consulta = $("#fecha_de_administracion_consulta").val()
    var erroCampoRequerido = "<p class='text-danger errorForm'>*CAMPO REQUERIDO</p>"
    var errores = ""
    $(".errorForm").remove()
    if (nombre_propietario.length <= 1) {
        errores = errores + "<p class='text-danger'>*NOMBRE DEL PROPIETARIO ES CAMPO REQUERIDO O DEBE SER MAYOR A 1 CARACTER</p>"
        $("#campoNombrePropietario").append(erroCampoRequerido)
    }
    if (nombre_mascota.length == 0) {
        errores = errores + "<p class='text-danger'>*NOMBRE DE LA MASCOTA ES CAMPO REQUERIDO</p>"
        $("#campoNombreMascota").append(erroCampoRequerido)
    }
    if (correo.length == 0) {
        errores = errores + "<p class='text-danger'>*CORREO ES CAMPO REQUERIDO</p>"
        $("#campoCorreo").append(erroCampoRequerido)
    }
    if (numero_de_contacto.length == 0) {
        errores = errores + "<p class='text-danger'>*NUMERO DE CONTACTO ES CAMPO REQUERIDO</p>"
        $("#campoNumeroContacto").append(erroCampoRequerido)
    }
    if (fecha_de_administracion_consulta.length == 0) {
        errores = errores + "<p class='text-danger'>*FECHA DE ADMINISTRACION ES CAMPO REQUERIDO</p>"
        $("#campoFechaAdministracion").append(erroCampoRequerido)
    }
    if (errores != "") {
        //alert(errores)
        //$("#errores").html(errores) 
        Swal.fire({
            title: "Error!",
            html: errores,
            icon: "error"
        });
    } else {
        $("#errores").empty()
        Swal.fire({
            title: "Confirmacion!",
            text: "Tu informacion a sido enviada exitosamente!",
            icon: "success"
        });
    }
    return false

}