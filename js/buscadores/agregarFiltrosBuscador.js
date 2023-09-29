//Boton para poner los filtros
let searchCompanyButton_filter = document.getElementById('searchCompanyButton_filter');
//Bandera para saber si el filtro cambio
let banderaFiltro = false;

//Procedemos a hacer la busqueda de todos los elementos...
searchCompanyButton_filter.addEventListener('click', () => {

    if(banderaFiltro == false){
        searchCompanyButton_filter.innerHTML = `<i class="fa-solid fa-filter-circle-xmark"></i>`;
        
        //Mensaje de listo
        mdtoast('Menú de filtros.', { 
            interaction: false,
            duration: 1000
        });
        
        banderaFiltro = true;
    }else{
        searchCompanyButton_filter.innerHTML = `<i class="fa-solid fa-filter"></i>`;

        //Mensaje de listo
        mdtoast('Filtros desactivados.', { 
            interaction: false,
            duration: 1000
        });

        banderaFiltro = false;
    }

});