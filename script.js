$(document).ready(function() {
    let temaActual = 'claro';
    
    if (localStorage.getItem('tema') === 'oscuro') {
        cambiarTema();
    }
    
    function cambiarTema() {
        if (temaActual === 'claro') {
            $('body').removeClass('tema-claro').addClass('tema-oscuro');
            temaActual = 'oscuro';
        } else {
            $('body').removeClass('tema-oscuro').addClass('tema-claro');
            temaActual = 'claro';
        }
        localStorage.setItem('tema', temaActual);
    }
    
    $('#btn-tema').click(function() {
        cambiarTema();
    });
});

