//Contenedor para modificar la grid de las gráficas
let contenedorPrincipalAjustable = document.getElementsByClassName('informacionContainerExtra');

//Selectores de gráficas
let select_barras = document.getElementById('select_barras');
let select_dona = document.getElementById('select_dona');
let select_pastel = document.getElementById('select_pastel');
let select_linea = document.getElementById('select_linea');
let select_polar = document.getElementById('select_polar');
let select_radar = document.getElementById('select_radar');

//Contenedores de graficas
let g_barras = document.getElementById('g_barras');
let g_dona = document.getElementById('g_dona');
let g_pastel = document.getElementById('g_pastel');
let g_linea = document.getElementById('g_linea');
let g_polar = document.getElementById('g_polar');
let g_radar = document.getElementById('g_radar');

//Accedemos a todos los contenedores de graficas.
let container_graphs = document.getElementsByClassName('container_graphs');

//Hacemos que los elementos no se vean en un comienzo
let container_graphs_arr = [...container_graphs];
function eraseContentGraficas(){
    container_graphs_arr.forEach(element => {
        element.setAttribute('style', 'display: none;');
    });
}
eraseContentGraficas();

//Hacemos que las graficas de barras se vean por defecto
g_barras.setAttribute('style', 'display: grid;');

//Script para presionar los botones de selección
select_barras.addEventListener('click', () => {
    eraseContentGraficas();
    g_barras.setAttribute('style', 'display: grid;');
    contenedorPrincipalAjustable[0].setAttribute('style', 'grid-template-rows: 10vh 100vh 100vh;');
});

select_dona.addEventListener('click', () => {
    eraseContentGraficas();
    g_dona.setAttribute('style', 'display: grid;');
    contenedorPrincipalAjustable[0].setAttribute('style', 'grid-template-rows: 10vh 100vh 100vh;');
});

select_pastel.addEventListener('click', () => {
    eraseContentGraficas();
    g_pastel.setAttribute('style', 'display: grid;');
    contenedorPrincipalAjustable[0].setAttribute('style', 'grid-template-rows: 10vh 100vh 100vh;');
});

select_linea.addEventListener('click', () => {
    eraseContentGraficas();
    g_linea.setAttribute('style', 'display: grid;');
    contenedorPrincipalAjustable[0].setAttribute('style', 'grid-template-rows: 10vh 100vh 100vh;');
});

select_polar.addEventListener('click', () => {
    eraseContentGraficas();
    g_polar.setAttribute('style', 'display: grid;');
    contenedorPrincipalAjustable[0].setAttribute('style', 'grid-template-rows: 10vh 100vh 100vh;');
});

select_radar.addEventListener('click', () => {
    eraseContentGraficas();
    g_radar.setAttribute('style', 'display: grid; grid-template-columns: 1fr;');
});


//Selectores de tipo de vista
let gridBtn = document.getElementById('btnGridVista');
let listaBtn = document.getElementById('btnListaVista');


gridBtn.addEventListener('click', () => {
    container_graphs_arr.forEach(element => {
        var styleAtributo = element.getAttribute('style');
        if(styleAtributo && styleAtributo.includes('display: grid')){
            element.setAttribute('style', 'display: grid; grid-template-columns: 1fr 1fr;');
        }
    });
        contenedorPrincipalAjustable[0].setAttribute('style', 'grid-template-rows: 10vh 100vh 100vh;');
})

listaBtn.addEventListener('click', () => {
    container_graphs_arr.forEach(element => {
        var styleAtributo = element.getAttribute('style');
        if(styleAtributo && styleAtributo.includes('display: grid')){
            element.setAttribute('style', 'display: grid; grid-template-columns: 1fr;');
        }
    });
    contenedorPrincipalAjustable[0].setAttribute('style', 'grid-template-rows: 10vh 200vh 100vh;');
})