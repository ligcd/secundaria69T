$(document).ready(function() {
    $('#boton-mostrar-formulario').click(function() {
        $('#modal-formulario').modal('show');
    });

    $('#enviar-respuestas').click(function() {
        $('#modal-formulario').modal('hide'); // Cierra el modal del formulario
        $('#modal-confirmacion').modal('show'); // Muestra el modal de confirmación
    });

    $('#modal-formulario').on('hidden.bs.modal', function () {
        // Limpiar el formulario
        $('#contact-form')[0].reset();
    });
});



