
let pagination = document.getElementById('pagination');

//Estilos de paginacion cuando hacemos scroll
contenidoPrincipal.addEventListener('scroll', function() {
    var scrollPosition = contenidoPrincipal.scrollTop; //Position actual de scroll en div
    var scrollHeight = contenidoPrincipal.scrollHeight; //altura total de la caja de contenido con scroll
    var clientHeight = contenidoPrincipal.clientHeight; //altura total de la caja sin scroll (solo visible)
  
    //Cuando hallamos recorrido una distancia igual a la altura visible
    if (scrollPosition > clientHeight) {
        pagination.setAttribute('style', 'margin-bottom: 20px;');
    }else if(scrollPosition <= 200){
        pagination.setAttribute('style', 'margin-bottom: 50px;');
    }
});
  