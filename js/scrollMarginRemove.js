/**
 * La idea de este código es que cuando hagamos scroll hacia 
 * abajo entonces los margenes se reduzcan
 */

let mainContainerElementInitialState = document.getElementById('mainContainerElement');

let menuContenidoPrincipal = document.getElementById('menuContenidoPrincipal');
let contenidoPrincipal = document.getElementById('contenidoPrincipal');

//Contenedor del input del buscador
let inputBrowser_empresasScroll = document.getElementById('inputBrowser_empresas');

contenidoPrincipal.addEventListener('scroll', function() {
    var scrollPosition = contenidoPrincipal.scrollTop; //Position actual de scroll en div
    var scrollHeight = contenidoPrincipal.scrollHeight; //altura total de la caja de contenido con scroll
    var clientHeight = contenidoPrincipal.clientHeight; //altura total de la caja sin scroll (solo visible)
  
    // //Cuando hallamos recorrido una distancia igual a la altura visible
    // if (scrollPosition > clientHeight) {
    //     mainContainerElementInitialState.setAttribute('style', 'padding: 0px;');
    //     menuContenidoPrincipal.setAttribute('style', 'border-radius: 0px;');
    //     contenidoPrincipal.setAttribute('style', 'border-radius: 0px;');

    //     setTimeout(() => {
    //         inputBrowser_empresasScroll.setAttribute('style', "width:" + (window.innerWidth - menuContenidoPrincipal.offsetWidth) + "px; left:" + (menuContenidoPrincipal.offsetWidth) + "px; top:" + "0px; border-radius: 0px;");
    //     }, 100);

    // }else if(scrollPosition <= 200){
    //     mainContainerElementInitialState.setAttribute('style', 'padding: 30px;');
    //     menuContenidoPrincipal.setAttribute('style', 'border-radius: 15px 0 0 15px;');
    //     contenidoPrincipal.setAttribute('style', 'border-radius: 0 15px 15px 0;');

    //     inputBrowser_empresasScroll.setAttribute('style', "width:" + (window.innerWidth - menuContenidoPrincipal.offsetWidth - 60) + "px; left:" + (menuContenidoPrincipal.offsetWidth + 30) + "px; top: 30px;");
    // }

    //Damos nuevos estilos al contenedor del buscador
    if(window.innerWidth > 1000){
        if(scrollPosition > 50){
            inputBrowser_empresasScroll.classList.add('inputBrowser_empresasSticked');
            inputBrowser_empresasScroll.setAttribute('style', "width:" + (window.innerWidth - menuContenidoPrincipal.offsetWidth - 60) + "px; left:" + (menuContenidoPrincipal.offsetWidth + 30) + "px; top: 30px;");
        }else{
            inputBrowser_empresasScroll.classList.remove('inputBrowser_empresasSticked');
            inputBrowser_empresasScroll.removeAttribute('style');
        }
    }
});
  
  
  