$(document).ready(function() {
    const formNombre = document.getElementById('nombre');
    const formEdad = document.getElementById('apellido');
    const formEmail = document.getElementById('email');
    const formMensaje = document.getElementById('mensaje');
    const form = document.getElementById('formulario-contacto');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (formNombre.value === '' || formEdad.value === '' || formEmail.value === '' || formMensaje.value === '') {
            alert('Por favor, complete todos los campos');
            return;
        }
        
        if (formMensaje.value.length < 10 || formMensaje.value.length > 200) {
            alert('El comentario debe tener entre 10 y 200 caracteres');
            return;
        }
        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formEmail.value)) {
            alert('Por favor, ingrese un email válido');
            return;
        }
        
        alert('Formulario enviado correctamente');
        form.reset();
    });
    
    $('#btn-limpiar').click(function() {
        $('#formulario-contacto')[0].reset();
        $('.mensaje-error').text('');
        $('#mensaje-exito').hide();
    });
});
