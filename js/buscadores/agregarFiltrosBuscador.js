//Boton para poner los filtros
let searchCompanyButton_filter = document.getElementById(
  "searchCompanyButton_filter"
);
//Bandera para saber si el filtro cambio
let banderaFiltro = false;

//Procedemos a hacer la busqueda de todos los elementos...
searchCompanyButton_filter.addEventListener("click", () => {
  if (banderaFiltro == false) {
    searchCompanyButton_filter.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

    mostrarMenuDeFiltros(true);

    //Mensaje de listo
    mdtoast("Menú de filtros.", {
      interaction: false,
      duration: 1000,
    });

    banderaFiltro = true;
  } else {
    searchCompanyButton_filter.innerHTML = `<i class="fa-solid fa-filter"></i>`;

    mostrarMenuDeFiltros(false);

    //Mensaje de listo
    mdtoast("Menú de filtros cerrado.", {
      interaction: false,
      duration: 1000,
    });

    banderaFiltro = false;
  }
});

//Funcion para mostrar y quitar el menu de filtros.
let filtrosContainer = document.getElementById("filtrosContainer");
function mostrarMenuDeFiltros(indicadorActivado) {
  //Validamos si el menu se muestra o no
  if (indicadorActivado != true) {
    filtrosContainer.setAttribute("style", "display: none;");
  } else {
    filtrosContainer.setAttribute("style", "display: grid;");
  }
}

//Función para meter el contenido al menu de filtros...
function agregarContenidoMenuFiltros() {
  let contenido = `
    <section class="accordion">
        <div class="tab">
        <input type="radio" name="accordion-1" id="cb1">
        <label for="cb1" class="tab__label">Filtros básicos</label>
        <div class="tab__content">

            <section class="containerOptionsFilters">
                <div class="checkbox" id="filtro_alfabeto_descendente">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input"/>
                        <span class="checkbox-tile">
                            <span class="checkbox-icon">
                                <i class="fa-solid fa-arrow-down-z-a"></i>
                            </span>
                            <span class="checkbox-label">Alfabético descendente</span>
                        </span>
                    </label>
                </div>
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input" id="filtro_grupo_pais" />
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
                        <input type="checkbox" class="checkbox-input" id="filtro_no_eua"/>
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
                        <input type="checkbox" class="checkbox-input" id="filtro_no_mexico"/>
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
                        <input type="checkbox" class="checkbox-input" id="filtro_no_argentina"/>
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
                        <input type="checkbox" class="checkbox-input" id="filtro_no_brasil"/>
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
                        <input type="checkbox" class="checkbox-input" id="filtro_no_espana"/>
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
                        <input type="checkbox" class="checkbox-input" id="filtro_no_alemania"/>
                        <span class="checkbox-tile">
                            <span class="checkbox-icon checkbox-icon-flag">
                                🇩🇪
                            </span>
                            <span class="checkbox-label">No mostrar Alemania</span>
                        </span>
                    </label>
                </div> 
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input" id="filtro_no_suiza"/>
                        <span class="checkbox-tile">
                            <span class="checkbox-icon checkbox-icon-flag">
                                🇨🇭
                            </span>
                            <span class="checkbox-label">No mostrar Suiza</span>
                        </span>
                    </label>
                </div>
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input" id="filtro_no_chile"/>
                        <span class="checkbox-tile">
                            <span class="checkbox-icon checkbox-icon-flag">
                                🇨🇱
                            </span>
                            <span class="checkbox-label">No mostrar Chile</span>
                        </span>
                    </label>
                </div>
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input" id="filtro_no_venezuela"/>
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
                        <input type="checkbox" class="checkbox-input" id="filtro_no_peru"/>
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
                        <input type="checkbox" class="checkbox-input" id="filtro_no_colombia"/>
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
                        <input type="checkbox" class="checkbox-input" id="filtro_no_rusia"/>
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
                            <input type="checkbox" class="checkbox-input" id="filtro_solo_tech"/>
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
                            <input type="checkbox" class="checkbox-input" id="filtro_solo_finanzas"/>
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
                            <input type="checkbox" class="checkbox-input" id="filtro_solo_alimentos"/>
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
                            <input type="checkbox" class="checkbox-input" id="filtro_solo_salud"/>
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
                            <input type="checkbox" class="checkbox-input" id="filtro_solo_manufactura"/>
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
                            <input type="checkbox" class="checkbox-input" id="filtro_solo_minoristas"/>
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
                            <input type="checkbox" class="checkbox-input" id="filtro_solo_energia"/>
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
                            <input type="checkbox" class="checkbox-input" id="filtro_solo_comunicacion"/>
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
                            <input type="checkbox" class="checkbox-input" id="filtro_solo_transporte"/>
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
                            <input type="checkbox" class="checkbox-input" id="filtro_solo_construccion"/>
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

////////////////////////////////////////////////
//Botones de filtros
////////////////////////////////////////////////
let filtro_alfabeto_descendente = document.getElementById(
  "filtro_alfabeto_descendente"
);
let filtro_grupo_pais = document.getElementById("filtro_grupo_pais");

let filtro_no_eua = document.getElementById("filtro_no_eua");
let filtro_no_mexico = document.getElementById("filtro_no_mexico");
let filtro_no_argentina = document.getElementById("filtro_no_argentina");
let filtro_no_brasil = document.getElementById("filtro_no_brasil");
let filtro_no_espana = document.getElementById("filtro_no_espana");
let filtro_no_colombia = document.getElementById("filtro_no_colombia");
let filtro_no_suiza = document.getElementById("filtro_no_suiza");
let filtro_no_chile = document.getElementById("filtro_no_chile");
let filtro_no_venezuela = document.getElementById("filtro_no_venezuela");
let filtro_no_peru = document.getElementById("filtro_no_peru");
let filtro_no_rusia = document.getElementById("filtro_no_rusia");
let filtro_no_alemania = document.getElementById("filtro_no_alemania");

let filtro_solo_tech = document.getElementById("filtro_solo_tech");
let filtro_solo_finanzas = document.getElementById("filtro_solo_finanzas");
let filtro_solo_alimentos = document.getElementById("filtro_solo_alimentos");
let filtro_solo_salud = document.getElementById("filtro_solo_salud");
let filtro_solo_manufactura = document.getElementById(
  "filtro_solo_manufactura"
);
let filtro_solo_minoristas = document.getElementById("filtro_solo_minoristas");
let filtro_solo_energia = document.getElementById("filtro_solo_energia");
let filtro_solo_comunicacion = document.getElementById(
  "filtro_solo_comunicacion"
);
let filtro_solo_transporte = document.getElementById("filtro_solo_transporte");
let filtro_solo_construccion = document.getElementById(
  "filtro_solo_construccion"
);

//Variable para evitar que se presione dos veces el boton
let filtro_alfabeto_descendente_bandera = false;
let filtro_grupo_pais_bandera = false;
let filtro_no_eua_bandera = false;
let filtro_no_mexico_bandera = false;
let filtro_no_argentina_bandera = false;
let filtro_no_brasil_bandera = false;
let filtro_no_espana_bandera = false;
let filtro_no_colombia_bandera = false;
let filtro_no_suiza_bandera = false;
let filtro_no_chile_bandera = false;
let filtro_no_venezuela_bandera = false;
let filtro_no_peru_bandera = false;
let filtro_no_rusia_bandera = false;
let filtro_no_alemania_bandera = false;
let filtro_solo_tech_bandera = false;
let filtro_solo_finanzas_bandera = false;
let filtro_solo_alimentos_bandera = false;
let filtro_solo_salud_bandera = false;
let filtro_solo_manufactura_bandera = false;
let filtro_solo_minoristas_bandera = false;
let filtro_solo_energia_bandera = false;
let filtro_solo_comunicacion_bandera = false;
let filtro_solo_transporte_bandera = false;
let filtro_solo_construccion_bandera = false;

//Funciones para los botones de filtros
function obtenerListaDeEmpresasActual() {
  //Contenedor de empresas listadas (Es el contenedor del buscador)
  let lista_empresa_actual = document.getElementById("lista_empresa");

  //Guardamos los elementos li listados
  let lista_empresa_elementos = lista_empresa_actual.children;
  //Array para guardar solo texto con el nombre de las empresas
  let lista_empresa_solo_texto = [];

  //Guardamos solamento los textos almacenados en la lista de elementos
  let lista_empresa_elementos_arr = [...lista_empresa_elementos];
  lista_empresa_solo_texto = lista_empresa_elementos_arr.map((element) => {
    return element.textContent;
  });

  return lista_empresa_solo_texto;
}

//Funcion para agrupar por pais
function agruparPorPais(expresionRegular) {
  //Obtenemos los nombres de empresas
  let listaActual = obtenerListaDeEmpresasActual();

  // Objeto para almacenar los grupos de paises
  const grupos = {};

  // Expresión regular para buscar emojis de bandera
  const regexBandera = expresionRegular;

  // Recorre los textos y agrupa por emoji de bandera
  listaActual.forEach((texto) => {
    const match = texto.match(regexBandera);
    if (match) {
      const emoji = match[0];
      if (!grupos[emoji]) {
        grupos[emoji] = [];
      }
      grupos[emoji].push(texto);
    }
  });

  // Array para almacenar los elementos con etiquetas <li>
  const elementosConEtiquetas = [];

  // Recorre el objeto de grupos y agrega cada elemento con etiqueta <li> al array
  for (const emoji in grupos) {
    if (grupos.hasOwnProperty(emoji)) {
      const grupo = grupos[emoji];
      grupo.forEach((texto) => {
        elementosConEtiquetas.push(`<li>${texto}</li>`);
      });
    }
  }

  return elementosConEtiquetas;
}

// Función para eliminar los textos con la bandera de USA
function eliminarTextosConBandera(expresionRegular) {
  // Obtenemos los nombres de empresas
  let listaActual = obtenerListaDeEmpresasActual();
  console.log("listaActual: ", listaActual);

  // Expresión regular para buscar la bandera
  const regex = expresionRegular;

  // Filtra los textos y elimina los que tienen la bandera
  let elementosSinBanderas = listaActual.filter((texto) => !regex.test(texto));

  //Le ponemos la etique li a cada elemento
  let elementosSinBanderas_arr = elementosSinBanderas.map((elemento) => {
    return `<li>${elemento}</li>`;
  });

  return elementosSinBanderas_arr;
}

/////////////////////////////////////////////////////
//Primer boton
filtro_alfabeto_descendente.addEventListener("click", () => {
  //Obtenemos el contenedor de empresas listadas (Es el contenedor del buscador)
  //Debe ser obtenido aqui porque se carga de forma asincrona
  let lista_empresa_actual = document.getElementById("lista_empresa");

  if (filtro_alfabeto_descendente_bandera == false) {
    //Obtenemos los nombres de empresas
    let listaActual = obtenerListaDeEmpresasActual();
    //Invertimos el orden de la lista
    listaActual = listaActual.reverse();

    //Le ponemos la etique li a cada elemento
    let listaActualFinal = listaActual.map((elemento) => {
      return `<li>${elemento}</li>`;
    });

    //Actualizamos el contenido
    lista_empresa_actual.innerHTML = listaActualFinal.join("");

    filtro_alfabeto_descendente_bandera = true;
  } else {
    filtro_alfabeto_descendente_bandera = false;
  }
});

//Segundo boton
filtro_grupo_pais.addEventListener("click", () => {
  //Obtenemos el contenedor de empresas listadas (Es el contenedor del buscador)
  //Debe ser obtenido aqui porque se carga de forma asincrona
  let lista_empresa_actual = document.getElementById("lista_empresa");

  if (filtro_grupo_pais_bandera == false) {
    ///////Agrupamiento por pais
    let empresasAgrupadas = agruparPorPais(
      /🇧🇷|🇨🇭|🇪🇸|🇵🇪|🇩🇪|🇦🇷|🇺🇸|🇲🇽|🇨🇱|🇻🇪|🇵🇪|🇨🇴|🇷🇺/
    );

    //Actualizamos el contenido
    localStorage.setItem(
      "contenidoDeEmpresasBuscadorMemoria_anterior",
      lista_empresa_actual.innerHTML
    );
    lista_empresa_actual.innerHTML = empresasAgrupadas.join("");

    filtro_grupo_pais_bandera = true;
  } else {
    //Actualizamos el menu
    lista_empresa_actual.innerHTML = localStorage.getItem(
      "contenidoDeEmpresasBuscadorMemoria_anterior"
    );

    filtro_grupo_pais_bandera = false;
  }
});

//Boton para quitar la bandera
filtro_no_eua.addEventListener("click", () => {
  //Obtenemos el contenedor de empresas listadas (Es el contenedor del buscador)
  //Debe ser obtenido aqui porque se carga de forma asincrona
  let lista_empresa_actual = document.getElementById("lista_empresa");

  if (filtro_no_eua_bandera == false) {
    ///////Agrupamiento por pais
    let empresasAgrupadas = eliminarTextosConBandera(/🇺🇸/);

    //Actualizamos el contenido
    localStorage.setItem(
      "contenidoDeEmpresasBuscadorMemoria_anterior",
      lista_empresa_actual.innerHTML
    );

    //Actualizamos el contenido
    lista_empresa_actual.innerHTML = empresasAgrupadas.join("");

    filtro_no_eua_bandera = true;
  } else {
    //Actualizamos el menu
    lista_empresa_actual.innerHTML = localStorage.getItem(
      "contenidoDeEmpresasBuscadorMemoria_anterior"
    );

    filtro_no_eua_bandera = false;
  }
});

//Boton para quitar la bandera
filtro_no_mexico.addEventListener("click", () => {
  //Obtenemos el contenedor de empresas listadas (Es el contenedor del buscador)
  //Debe ser obtenido aqui porque se carga de forma asincrona
  let lista_empresa_actual = document.getElementById("lista_empresa");

  if (filtro_no_mexico_bandera == false) {
    ///////Agrupamiento por pais
    let empresasAgrupadas = eliminarTextosConBandera(/🇲🇽/);

    //Actualizamos el contenido
    localStorage.setItem(
      "contenidoDeEmpresasBuscadorMemoria_anterior",
      lista_empresa_actual.innerHTML
    );

    //Actualizamos el contenido
    lista_empresa_actual.innerHTML = empresasAgrupadas.join("");

    filtro_no_mexico_bandera = true;
  } else {
    //Actualizamos el menu
    lista_empresa_actual.innerHTML = localStorage.getItem(
      "contenidoDeEmpresasBuscadorMemoria_anterior"
    );

    filtro_no_mexico_bandera = false;
  }
});

//Boton para quitar la bandera
filtro_no_brasil.addEventListener("click", () => {
  //Obtenemos el contenedor de empresas listadas (Es el contenedor del buscador)
  //Debe ser obtenido aqui porque se carga de forma asincrona
  let lista_empresa_actual = document.getElementById("lista_empresa");

  if (filtro_no_brasil_bandera == false) {
    ///////Agrupamiento por pais
    let empresasAgrupadas = eliminarTextosConBandera(/🇧🇷/);

    //Actualizamos el contenido
    localStorage.setItem(
      "contenidoDeEmpresasBuscadorMemoria_anterior",
      lista_empresa_actual.innerHTML
    );

    //Actualizamos el contenido
    lista_empresa_actual.innerHTML = empresasAgrupadas.join("");

    filtro_no_brasil_bandera = true;
  } else {
    //Actualizamos el menu
    lista_empresa_actual.innerHTML = localStorage.getItem(
      "contenidoDeEmpresasBuscadorMemoria_anterior"
    );

    filtro_no_brasil_bandera = false;
  }
});

//Boton para quitar la bandera
filtro_no_chile.addEventListener("click", () => {
  //Obtenemos el contenedor de empresas listadas (Es el contenedor del buscador)
  //Debe ser obtenido aqui porque se carga de forma asincrona
  let lista_empresa_actual = document.getElementById("lista_empresa");

  if (filtro_no_chile_bandera == false) {
    ///////Agrupamiento por pais
    let empresasAgrupadas = eliminarTextosConBandera(/🇨🇱/);

    //Actualizamos el contenido
    localStorage.setItem(
      "contenidoDeEmpresasBuscadorMemoria_anterior",
      lista_empresa_actual.innerHTML
    );

    //Actualizamos el contenido
    lista_empresa_actual.innerHTML = empresasAgrupadas.join("");

    filtro_no_chile_bandera = true;
  } else {
    //Actualizamos el menu
    lista_empresa_actual.innerHTML = localStorage.getItem(
      "contenidoDeEmpresasBuscadorMemoria_anterior"
    );

    filtro_no_chile_bandera = false;
  }
});

//Boton para quitar la bandera
filtro_no_espana.addEventListener("click", () => {
  //Obtenemos el contenedor de empresas listadas (Es el contenedor del buscador)
  //Debe ser obtenido aqui porque se carga de forma asincrona
  let lista_empresa_actual = document.getElementById("lista_empresa");

  if (filtro_no_espana_bandera == false) {
    ///////Agrupamiento por pais
    let empresasAgrupadas = eliminarTextosConBandera(/🇪🇸/);

    //Actualizamos el contenido
    localStorage.setItem(
      "contenidoDeEmpresasBuscadorMemoria_anterior",
      lista_empresa_actual.innerHTML
    );

    //Actualizamos el contenido
    lista_empresa_actual.innerHTML = empresasAgrupadas.join("");

    filtro_no_espana_bandera = true;
  } else {
    //Actualizamos el menu
    lista_empresa_actual.innerHTML = localStorage.getItem(
      "contenidoDeEmpresasBuscadorMemoria_anterior"
    );

    filtro_no_espana_bandera = false;
  }
});

//Boton para quitar la bandera
filtro_no_peru.addEventListener("click", () => {
  //Obtenemos el contenedor de empresas listadas (Es el contenedor del buscador)
  //Debe ser obtenido aqui porque se carga de forma asincrona
  let lista_empresa_actual = document.getElementById("lista_empresa");

  if (filtro_no_peru_bandera == false) {
    ///////Agrupamiento por pais
    let empresasAgrupadas = eliminarTextosConBandera(/🇵🇪/);

    //Actualizamos el contenido
    localStorage.setItem(
      "contenidoDeEmpresasBuscadorMemoria_anterior",
      lista_empresa_actual.innerHTML
    );

    //Actualizamos el contenido
    lista_empresa_actual.innerHTML = empresasAgrupadas.join("");

    filtro_no_peru_bandera = true;
  } else {
    //Actualizamos el menu
    lista_empresa_actual.innerHTML = localStorage.getItem(
      "contenidoDeEmpresasBuscadorMemoria_anterior"
    );

    filtro_no_peru_bandera = false;
  }
});

//Boton para quitar la bandera
filtro_no_argentina.addEventListener("click", () => {
  //Obtenemos el contenedor de empresas listadas (Es el contenedor del buscador)
  //Debe ser obtenido aqui porque se carga de forma asincrona
  let lista_empresa_actual = document.getElementById("lista_empresa");

  if (filtro_no_argentina_bandera == false) {
    ///////Agrupamiento por pais
    let empresasAgrupadas = eliminarTextosConBandera(/🇦🇷/);

    //Actualizamos el contenido
    localStorage.setItem(
      "contenidoDeEmpresasBuscadorMemoria_anterior",
      lista_empresa_actual.innerHTML
    );

    //Actualizamos el contenido
    lista_empresa_actual.innerHTML = empresasAgrupadas.join("");

    filtro_no_argentina_bandera = true;
  } else {
    //Actualizamos el menu
    lista_empresa_actual.innerHTML = localStorage.getItem(
      "contenidoDeEmpresasBuscadorMemoria_anterior"
    );

    filtro_no_argentina_bandera = false;
  }
});

//Boton para quitar la bandera
filtro_no_venezuela.addEventListener("click", () => {
  //Obtenemos el contenedor de empresas listadas (Es el contenedor del buscador)
  //Debe ser obtenido aqui porque se carga de forma asincrona
  let lista_empresa_actual = document.getElementById("lista_empresa");

  if (filtro_no_venezuela_bandera == false) {
    ///////Agrupamiento por pais
    let empresasAgrupadas = eliminarTextosConBandera(/🇻🇪/);

    //Actualizamos el contenido
    localStorage.setItem(
      "contenidoDeEmpresasBuscadorMemoria_anterior",
      lista_empresa_actual.innerHTML
    );

    //Actualizamos el contenido
    lista_empresa_actual.innerHTML = empresasAgrupadas.join("");

    filtro_no_venezuela_bandera = true;
  } else {
    //Actualizamos el menu
    lista_empresa_actual.innerHTML = localStorage.getItem(
      "contenidoDeEmpresasBuscadorMemoria_anterior"
    );

    filtro_no_venezuela_bandera = false;
  }
});

//Boton para quitar la bandera
filtro_no_colombia.addEventListener("click", () => {
  //Obtenemos el contenedor de empresas listadas (Es el contenedor del buscador)
  //Debe ser obtenido aqui porque se carga de forma asincrona
  let lista_empresa_actual = document.getElementById("lista_empresa");

  if (filtro_no_colombia_bandera == false) {
    ///////Agrupamiento por pais
    let empresasAgrupadas = eliminarTextosConBandera(/🇨🇴/);

    //Actualizamos el contenido
    localStorage.setItem(
      "contenidoDeEmpresasBuscadorMemoria_anterior",
      lista_empresa_actual.innerHTML
    );

    //Actualizamos el contenido
    lista_empresa_actual.innerHTML = empresasAgrupadas.join("");

    filtro_no_colombia_bandera = true;
  } else {
    //Actualizamos el menu
    lista_empresa_actual.innerHTML = localStorage.getItem(
      "contenidoDeEmpresasBuscadorMemoria_anterior"
    );

    filtro_no_colombia_bandera = false;
  }
});

//Boton para quitar la bandera
filtro_no_rusia.addEventListener("click", () => {
  //Obtenemos el contenedor de empresas listadas (Es el contenedor del buscador)
  //Debe ser obtenido aqui porque se carga de forma asincrona
  let lista_empresa_actual = document.getElementById("lista_empresa");

  if (filtro_no_rusia_bandera == false) {
    ///////Agrupamiento por pais
    let empresasAgrupadas = eliminarTextosConBandera(/🇷🇺/);

    //Actualizamos el contenido
    localStorage.setItem(
      "contenidoDeEmpresasBuscadorMemoria_anterior",
      lista_empresa_actual.innerHTML
    );

    //Actualizamos el contenido
    lista_empresa_actual.innerHTML = empresasAgrupadas.join("");

    filtro_no_rusia_bandera = true;
  } else {
    //Actualizamos el menu
    lista_empresa_actual.innerHTML = localStorage.getItem(
      "contenidoDeEmpresasBuscadorMemoria_anterior"
    );

    filtro_no_rusia_bandera = false;
  }
});

//Boton para quitar la bandera
filtro_no_alemania.addEventListener("click", () => {
  //Obtenemos el contenedor de empresas listadas (Es el contenedor del buscador)
  //Debe ser obtenido aqui porque se carga de forma asincrona
  let lista_empresa_actual = document.getElementById("lista_empresa");

  if (filtro_no_alemania_bandera == false) {
    ///////Agrupamiento por pais
    let empresasAgrupadas = eliminarTextosConBandera(/🇩🇪/);

    //Actualizamos el contenido
    localStorage.setItem(
      "contenidoDeEmpresasBuscadorMemoria_anterior",
      lista_empresa_actual.innerHTML
    );

    //Actualizamos el contenido
    lista_empresa_actual.innerHTML = empresasAgrupadas.join("");

    filtro_no_alemania_bandera = true;
  } else {
    //Actualizamos el menu
    lista_empresa_actual.innerHTML = localStorage.getItem(
      "contenidoDeEmpresasBuscadorMemoria_anterior"
    );

    filtro_no_alemania_bandera = false;
  }
});

//Boton para quitar la bandera
filtro_no_suiza.addEventListener("click", () => {
  //Obtenemos el contenedor de empresas listadas (Es el contenedor del buscador)
  //Debe ser obtenido aqui porque se carga de forma asincrona
  let lista_empresa_actual = document.getElementById("lista_empresa");

  if (filtro_no_suiza_bandera == false) {
    ///////Agrupamiento por pais
    let empresasAgrupadas = eliminarTextosConBandera(/🇨🇭/);

    //Actualizamos el contenido
    localStorage.setItem(
      "contenidoDeEmpresasBuscadorMemoria_anterior",
      lista_empresa_actual.innerHTML
    );

    //Actualizamos el contenido
    lista_empresa_actual.innerHTML = empresasAgrupadas.join("");

    filtro_no_suiza_bandera = true;
  } else {
    //Actualizamos el menu
    lista_empresa_actual.innerHTML = localStorage.getItem(
      "contenidoDeEmpresasBuscadorMemoria_anterior"
    );

    filtro_no_suiza_bandera = false;
  }
});
