$(document).ready(function(){
// alert(' funciona ');

// slider
$('.galeria').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200
  });



 // posts
 var posts = [
     {
         title: 'prueba de titulo 1',
         date: new Date(),
         content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit'
     },
     {
         title: 'prueba de titulo 2',
         date: new Date(),
         content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit'
     },
     {
         title: 'prueba de titulo 3',
         date: new Date(),
         content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit'
     },
     {
         title: 'prueba de titulo 4',
         date: new Date(),
         content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit'
     },
     {
         title: 'prueba de titulo 5',
         date: new Date(),
         content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit'
     },
 ];

//  console.log(posts);
posts.forEach((item, index) => {
    var post = `
    <article class="post">
    <h2>${item.title}</h2>
    <span class="date">${item.date}</span>
    <p>${item.content}</p>
   <a href="#" class="leer-mas">Leer +</a>
  </article>    
    `;
    //  console.log(posts);
    // aqui añado el post al posts del html
    $(' #posts ').append(post);

});



// selecionar tema
var tema = $(' #theme ');

$(' #to-green ').click(function(){
    tema.attr('href', 'css/green.css');
});
$(' #to-red ').click(function(){
    tema.attr('href', 'css/red.css');
});
$(' #to-blue ').click(function(){
    tema.attr('href', 'css/blue.css');
});


// scroll arriba de la web
$(' .subir ').click(function(e){
    e.preventDefault();

    $(' html, body ').animate({
        scrollTop: 0
    }, 500);

    return false;
});


// simulador de login
$(' #login form ').submit(function(){
    // aqui coger el valor del input
    var nombre = $(' #nombre ').val();
    var email = $(' #email ').val();
    var contrasenha = $(' #contrasenha ').val();

    // guardar en localstorage
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('email', email);
    localStorage.setItem('contrasenha', contrasenha);

});

// coger el valor guardado en el localstorage
var nombre = localStorage.getItem('nombre');
var email = localStorage.getItem('email');
var contrasenha = localStorage.getItem('contrasenha');

// comprobar si no es null y si existe
if (nombre != null && nombre != 'undefined' || email != null && email != 'undefined' || contrasenha != null && contrasenha != 'undefined' ) {
    
    // aqui donde la quiero enseñarlo
    var about_parrafo = $(' #about p ');

    about_parrafo.html('<br><strong>Nombre: ' +nombre+  '<br><strong>Email: ' +email+ '<br><strong>Contraseña: ' +contrasenha+'<strong>');
   

    
    // creo y añado  un boton de cerrar session
    about_parrafo.append('<br><br><a href="#" id="logout">Cerrar session</a> ');
    
    // escondo el formulario
    $(' #login ').hide();

    // cogo el boton y la doy funcionalidades
    $(' #logout ').click(function(){
        // se limpia el localstroge
        localStorage.clear();
        // se reinicia la pagina
        location.reload();
    });
}



});