//Boton para poner los filtros
let searchCompanyButton_filter = document.getElementById('searchCompanyButton_filter');
//Bandera para saber si el filtro cambio
let banderaFiltro = false;

//Procedemos a hacer la busqueda de todos los elementos...
searchCompanyButton_filter.addEventListener('click', () => {

    if(banderaFiltro == false){
        searchCompanyButton_filter.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        
        mostrarMenuDeFiltros(true);

        //Mensaje de listo
        mdtoast('Menú de filtros.', { 
            interaction: false,
            duration: 1000
        });
        
        banderaFiltro = true;
    }else{
        searchCompanyButton_filter.innerHTML = `<i class="fa-solid fa-filter"></i>`;

        mostrarMenuDeFiltros(false);

        //Mensaje de listo
        mdtoast('Menú de filtros cerrado.', { 
            interaction: false,
            duration: 1000
        });

        banderaFiltro = false;
    }

});

//Funcion para mostrar y quitar el menu de filtros.
let filtrosContainer = document.getElementById('filtrosContainer');
function mostrarMenuDeFiltros(indicadorActivado){

    //Validamos si el menu se muestra o no
    if(indicadorActivado != true){
        filtrosContainer.setAttribute('style', 'display: none;');
    }else{  
        filtrosContainer.setAttribute('style', 'display: grid;');
    }

}

//Función para meter el contenido al menu de filtros...
function agregarContenidoMenuFiltros(){
    let contenido = `
    <section class="accordion">
        <div class="tab">
        <input type="radio" name="accordion-1" id="cb1">
        <label for="cb1" class="tab__label">Filtros básicos</label>
        <div class="tab__content">

            <section class="containerOptionsFilters">
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input" />
                        <span class="checkbox-tile">
                            <span class="checkbox-icon">
                                <i class="fa-solid fa-arrow-up-z-a"></i>
                            </span>
                            <span class="checkbox-label">Alfabético descendente</span>
                        </span>
                    </label>
                </div>
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input" />
                        <span class="checkbox-tile">
                            <span class="checkbox-icon">
                                <i class="fa-solid fa-arrow-up-a-z"></i>
                            </span>
                            <span class="checkbox-label">Alfabético ascendente</span>
                        </span>
                    </label>
                </div>
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input" />
                        <span class="checkbox-tile">
                            <span class="checkbox-icon">
                                <i class="fa-solid fa-globe"></i>
                            </span>
                            <span class="checkbox-label">Agrupar por pais</span>
                        </span>
                    </label>
                </div>
            </section>
            
        </div>
        </div>
        <div class="tab">
        <input type="radio" name="accordion-1" id="cb2">
        <label for="cb2" class="tab__label">Ocultar países</label>
        <div class="tab__content">
            
            <section class="containerOptionsFilters">
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input" />
                        <span class="checkbox-tile">
                            <span class="checkbox-icon checkbox-icon-flag">
                                🇺🇸
                            </span>
                            <span class="checkbox-label">No mostrar EUA</span>
                        </span>
                    </label>
                </div>
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input" />
                        <span class="checkbox-tile">
                            <span class="checkbox-icon checkbox-icon-flag">
                                🇲🇽
                            </span>
                            <span class="checkbox-label">No mostrar México</span>
                        </span>
                    </label>
                </div>
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input" />
                        <span class="checkbox-tile">
                            <span class="checkbox-icon checkbox-icon-flag">
                                🇦🇷
                            </span>
                            <span class="checkbox-label">No mostrar Argentina</span>
                        </span>
                    </label>
                </div>
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input" />
                        <span class="checkbox-tile">
                            <span class="checkbox-icon checkbox-icon-flag">
                                🇧🇷
                            </span>
                            <span class="checkbox-label">No mostrar Brasil</span>
                        </span>
                    </label>
                </div>
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input" />
                        <span class="checkbox-tile">
                            <span class="checkbox-icon checkbox-icon-flag">
                                🇪🇸
                            </span>
                            <span class="checkbox-label">No mostrar España</span>
                        </span>
                    </label>
                </div>
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input" />
                        <span class="checkbox-tile">
                            <span class="checkbox-icon checkbox-icon-flag">
                                🇨🇱
                            </span>
                            <span class="checkbox-label">No mostrar Colombia</span>
                        </span>
                    </label>
                </div>
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input" />
                        <span class="checkbox-tile">
                            <span class="checkbox-icon checkbox-icon-flag">
                                🇩🇪
                            </span>
                            <span class="checkbox-label">No mostrar Suiza</span>
                        </span>
                    </label>
                </div>
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input" />
                        <span class="checkbox-tile">
                            <span class="checkbox-icon checkbox-icon-flag">
                                🇨🇭
                            </span>
                            <span class="checkbox-label">No mostrar Chile</span>
                        </span>
                    </label>
                </div>
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input" />
                        <span class="checkbox-tile">
                            <span class="checkbox-icon checkbox-icon-flag">
                                🇻🇪
                            </span>
                            <span class="checkbox-label">No mostrar Venezuela</span>
                        </span>
                    </label>
                </div>
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input" />
                        <span class="checkbox-tile">
                            <span class="checkbox-icon checkbox-icon-flag">
                                🇵🇪
                            </span>
                            <span class="checkbox-label">No mostrar Perú</span>
                        </span>
                    </label>
                </div>
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input" />
                        <span class="checkbox-tile">
                            <span class="checkbox-icon checkbox-icon-flag">
                                🇨🇴
                            </span>
                            <span class="checkbox-label">No mostrar Colombia</span>
                        </span>
                    </label>
                </div>
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input" />
                        <span class="checkbox-tile">
                            <span class="checkbox-icon checkbox-icon-flag">
                                🇷🇺
                            </span>
                            <span class="checkbox-label">No mostrar Rusia</span>
                        </span>
                    </label>
                </div>
            </section>

        </div>
        </div>

        <div class="tab">
            <input type="radio" name="accordion-1" id="cb3">
            <label for="cb3" class="tab__label">Tipo de empresa</label>
            <div class="tab__content">

                <section class="containerOptionsFilters">
                    <div class="checkbox">
                        <label class="checkbox-wrapper">
                            <input type="checkbox" class="checkbox-input" />
                            <span class="checkbox-tile">
                                <span class="checkbox-icon checkbox-icon-flag">
                                    <i class="fa-solid fa-microchip"></i>
                                </span>
                                <span class="checkbox-label">Tecnología y software</span>
                            </span>
                        </label>
                    </div>
                    <div class="checkbox">
                        <label class="checkbox-wrapper">
                            <input type="checkbox" class="checkbox-input" />
                            <span class="checkbox-tile">
                                <span class="checkbox-icon checkbox-icon-flag">
                                    <i class="fa-solid fa-landmark"></i>
                                </span>
                                <span class="checkbox-label">Finanzas y banca</span>
                            </span>
                        </label>
                    </div>
                    <div class="checkbox">
                        <label class="checkbox-wrapper">
                            <input type="checkbox" class="checkbox-input" />
                            <span class="checkbox-tile">
                                <span class="checkbox-icon checkbox-icon-flag">
                                    <i class="fa-solid fa-utensils"></i>
                                </span>
                                <span class="checkbox-label">Alimentos y bebidas</span>
                            </span>
                        </label>
                    </div>
                    <div class="checkbox">
                        <label class="checkbox-wrapper">
                            <input type="checkbox" class="checkbox-input" />
                            <span class="checkbox-tile">
                                <span class="checkbox-icon checkbox-icon-flag">
                                    <i class="fa-solid fa-staff-snake"></i>
                                </span>
                                <span class="checkbox-label">Salud y farmacéutica</span>
                            </span>
                        </label>
                    </div>
                    <div class="checkbox">
                        <label class="checkbox-wrapper">
                            <input type="checkbox" class="checkbox-input" />
                            <span class="checkbox-tile">
                                <span class="checkbox-icon checkbox-icon-flag">
                                    <i class="fa-solid fa-industry"></i>
                                </span>
                                <span class="checkbox-label">Manufactura y tecnología industrial</span>
                            </span>
                        </label>
                    </div>
                    <div class="checkbox">
                        <label class="checkbox-wrapper">
                            <input type="checkbox" class="checkbox-input" />
                            <span class="checkbox-tile">
                                <span class="checkbox-icon checkbox-icon-flag">
                                    <i class="fa-solid fa-store"></i>
                                </span>
                                <span class="checkbox-label">Minoristas</span>
                            </span>
                        </label>
                    </div>
                    <div class="checkbox">
                        <label class="checkbox-wrapper">
                            <input type="checkbox" class="checkbox-input" />
                            <span class="checkbox-tile">
                                <span class="checkbox-icon checkbox-icon-flag">
                                    <i class="fa-solid fa-bolt"></i>
                                </span>
                                <span class="checkbox-label">Energía y recursos</span>
                            </span>
                        </label>
                    </div>
                    <div class="checkbox">
                        <label class="checkbox-wrapper">
                            <input type="checkbox" class="checkbox-input" />
                            <span class="checkbox-tile">
                                <span class="checkbox-icon checkbox-icon-flag">
                                    <i class="fa-solid fa-satellite-dish"></i>
                                </span>
                                <span class="checkbox-label">Comunicación y medios</span>
                            </span>
                        </label>
                    </div>
                    <div class="checkbox">
                        <label class="checkbox-wrapper">
                            <input type="checkbox" class="checkbox-input" />
                            <span class="checkbox-tile">
                                <span class="checkbox-icon checkbox-icon-flag">
                                    <i class="fa-solid fa-truck-front"></i>
                                </span>
                                <span class="checkbox-label">Transporte y logística</span>
                            </span>
                        </label>
                    </div>
                    <div class="checkbox">
                        <label class="checkbox-wrapper">
                            <input type="checkbox" class="checkbox-input" />
                            <span class="checkbox-tile">
                                <span class="checkbox-icon checkbox-icon-flag">
                                    <i class="fa-solid fa-building"></i>
                                </span>
                                <span class="checkbox-label">Construcción e inmobiliaria</span>
                            </span>
                        </label>
                    </div>
                </section>
                
            </div>
        </div>
    </section>
    `;

    //Metemos el contenido al elemento HTML
    filtrosContainer.innerHTML = contenido;
}

agregarContenidoMenuFiltros();