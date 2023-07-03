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
    if (scrollPosition > clientHeight) {
        mainContainerElementInitialState.setAttribute('style', 'padding: 0px;');
        menuContenidoPrincipal.setAttribute('style', 'border-radius: 0px;');
        contenidoPrincipal.setAttribute('style', 'border-radius: 0px;');
    }else if(scrollPosition <= 200){
        mainContainerElementInitialState.setAttribute('style', 'padding: 30px;');
        menuContenidoPrincipal.setAttribute('style', 'border-radius: 15px 0 0 15px;');
        contenidoPrincipal.setAttribute('style', 'border-radius: 0 15px 15px 0;');
    }
});
  
  
  