let filtro_reinicio = document.getElementById('filtro_reinicio');
let filtro_borrado_seleccion = document.getElementById('filtro_borrado_seleccion');

//Reiniciamos los filtros
filtro_reinicio.addEventListener('click', () => {
    //Accedemos a todos los botones.
    let btnsReset = document.getElementsByClassName('btnReset');
    let btnReset_arr = [...btnsReset];
    btnReset_arr.forEach(button => {
        if(button.getAttribute('state') == "true"){
            button.click();
        }
    });

    //Contenedor de empresas listadas (Es el contenedor del buscador)
    let lista_empresa_actual = document.getElementById("lista_empresa");
    //Accedemos a la lista original 
    let originalLista = localStorage.getItem('originalLista');
    let originalLista_arr = originalLista.split(',');

    //Ingresamos la lista original.
    lista_empresa_actual.innerHTML = originalLista_arr.join("");
});

//Boton para borrar la seleccion
filtro_borrado_seleccion.addEventListener('click', () => {
    //Accedemos a todos los botones.
    let btnsReset = document.getElementsByClassName('btnReset');
    let btnReset_arr = [...btnsReset];
    btnReset_arr.forEach(button => {
        if(button.getAttribute('state') == "true"){
            button.click();
        }
    });

    //Borramos las empresas que se seleccionaron
    let empresasSeleccionadas = document.getElementsByClassName('empresaSeleccionada');
    let empresasSeleccionadas_arr = [...empresasSeleccionadas];
    empresasSeleccionadas_arr.forEach(empresa => {
        empresa.remove();
    });

    //Contenedor de empresas listadas (Es el contenedor del buscador)
    let lista_empresa_actual = document.getElementById("lista_empresa");
    //Accedemos a la lista original 
    let originalLista = localStorage.getItem('originalLista');
    let originalLista_arr = originalLista.split(',');

    //Ingresamos la lista original.
    lista_empresa_actual.innerHTML = originalLista_arr.join("");
});