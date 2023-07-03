/**
 * La idea de este código es que cuando hagamos scroll hacia 
 * abajo entonces los margenes se reduzcan
 */

let mainContainerElementInitialState = document.getElementById('mainContainerElement');

let menuContenidoPrincipal = document.getElementById('menuContenidoPrincipal');
let contenidoPrincipal = document.getElementById('contenidoPrincipal');

contenidoPrincipal.addEventListener('scroll', function() {
    var scrollPosition = contenidoPrincipal.scrollTop; //Position actual de scroll en div
    var scrollHeight = contenidoPrincipal.scrollHeight; //altura total de la caja de contenido con scroll
    var clientHeight = contenidoPrincipal.clientHeight; //altura total de la caja sin scroll (solo visible)
  
    //Cuando hallamos recorrido una distancia igual a la altura visible
    if (scrollPosition-20 > clientHeight) {
        mainContainerElementInitialState.setAttribute('style', 'padding: 0px;');
        menuContenidoPrincipal.setAttribute('style', 'border-radius: 0px;');
        contenidoPrincipal.setAttribute('style', 'border-radius: 0px;');
    }else{
        mainContainerElementInitialState.setAttribute('style', 'padding: 25px;');
        menuContenidoPrincipal.setAttribute('style', 'border-radius: 25px 0 0 25px;');
        contenidoPrincipal.setAttribute('style', 'border-radius: 0 25px 25px 0;');
    }
});
  
  
  