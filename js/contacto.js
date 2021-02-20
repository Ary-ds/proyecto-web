$(document).ready(function(){
// alert(' funciaona ');

// validacion
if(window.location.href.indexOf('contacto') > -1){

    // $(' #fechaNacimiento ').datepicker();
    $(' form input[fechaNacimiento ] ').datepicker();


    $.validate({
        lang: 'es'
    });

}


});