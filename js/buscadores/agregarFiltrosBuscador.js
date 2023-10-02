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
                        <input type="checkbox" class="checkbox-input btnReset" id="filtro_alfabeto_reset" state="false"/>
                        <span class="checkbox-tile waves-effect">
                            <span class="checkbox-icon">
                                <i class="fa-solid fa-arrow-down-z-a"></i>
                            </span>
                            <span class="checkbox-label">Alfabético descendente</span>
                        </span>
                    </label>
                </div>
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input btnReset" state="false" id="filtro_grupo_pais" />
                        <span class="checkbox-tile waves-effect">
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
        <label for="cb2" class="tab__label">Filtro por nación</label>
        <div class="tab__content">
            
            <section class="containerOptionsFilters">
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input btnReset" state="false" id="filtro_no_eua"/>
                        <span class="checkbox-tile waves-effect">
                            <span class="checkbox-icon checkbox-icon-flag">
                                🇺🇸
                            </span>
                            <span class="checkbox-label">No mostrar EUA</span>
                        </span>
                    </label>
                </div>
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input btnReset" state="false" id="filtro_no_mexico"/>
                        <span class="checkbox-tile waves-effect">
                            <span class="checkbox-icon checkbox-icon-flag">
                                🇲🇽
                            </span>
                            <span class="checkbox-label">No mostrar México</span>
                        </span>
                    </label>
                </div>
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input btnReset" state="false" id="filtro_no_argentina"/>
                        <span class="checkbox-tile waves-effect">
                            <span class="checkbox-icon checkbox-icon-flag">
                                🇦🇷
                            </span>
                            <span class="checkbox-label">No mostrar Argentina</span>
                        </span>
                    </label>
                </div>
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input btnReset" state="false" id="filtro_no_brasil"/>
                        <span class="checkbox-tile waves-effect">
                            <span class="checkbox-icon checkbox-icon-flag">
                                🇧🇷
                            </span>
                            <span class="checkbox-label">No mostrar Brasil</span>
                        </span>
                    </label>
                </div>
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input btnReset" state="false" id="filtro_no_espana"/>
                        <span class="checkbox-tile waves-effect">
                            <span class="checkbox-icon checkbox-icon-flag">
                                🇪🇸
                            </span>
                            <span class="checkbox-label">No mostrar España</span>
                        </span>
                    </label>
                </div>
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input btnReset" state="false" id="filtro_no_alemania"/>
                        <span class="checkbox-tile waves-effect">
                            <span class="checkbox-icon checkbox-icon-flag">
                                🇩🇪
                            </span>
                            <span class="checkbox-label">No mostrar Alemania</span>
                        </span>
                    </label>
                </div> 
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input btnReset" state="false" id="filtro_no_suiza"/>
                        <span class="checkbox-tile waves-effect">
                            <span class="checkbox-icon checkbox-icon-flag">
                                🇨🇭
                            </span>
                            <span class="checkbox-label">No mostrar Suiza</span>
                        </span>
                    </label>
                </div>
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input btnReset" state="false" id="filtro_no_chile"/>
                        <span class="checkbox-tile waves-effect">
                            <span class="checkbox-icon checkbox-icon-flag">
                                🇨🇱
                            </span>
                            <span class="checkbox-label">No mostrar Chile</span>
                        </span>
                    </label>
                </div>
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input btnReset" state="false" id="filtro_no_venezuela"/>
                        <span class="checkbox-tile waves-effect">
                            <span class="checkbox-icon checkbox-icon-flag">
                                🇻🇪
                            </span>
                            <span class="checkbox-label">No mostrar Venezuela</span>
                        </span>
                    </label>
                </div>
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input btnReset" state="false" id="filtro_no_peru"/>
                        <span class="checkbox-tile waves-effect">
                            <span class="checkbox-icon checkbox-icon-flag">
                                🇵🇪
                            </span>
                            <span class="checkbox-label">No mostrar Perú</span>
                        </span>
                    </label>
                </div>
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input btnReset" state="false" id="filtro_no_colombia"/>
                        <span class="checkbox-tile waves-effect">
                            <span class="checkbox-icon checkbox-icon-flag">
                                🇨🇴
                            </span>
                            <span class="checkbox-label">No mostrar Colombia</span>
                        </span>
                    </label>
                </div>
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input btnReset" state="false" id="filtro_no_rusia"/>
                        <span class="checkbox-tile waves-effect">
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
            <label for="cb3" class="tab__label">Filtro por categoría</label>
            <div class="tab__content">

                <section class="containerOptionsFilters">
                    <div class="checkbox">
                        <label class="checkbox-wrapper">
                            <input type="checkbox" class="checkbox-input buttonCategoria btnReset" state="false" id="filtro_solo_tech"/>
                            <span class="checkbox-tile waves-effect">
                                <span class="checkbox-icon checkbox-icon-flag">
                                    <i class="fa-solid fa-microchip"></i>
                                </span>
                                <span class="checkbox-label">Tecnología y software</span>
                            </span>
                        </label>
                    </div>
                    <div class="checkbox">
                        <label class="checkbox-wrapper">
                            <input type="checkbox" class="checkbox-input buttonCategoria btnReset" state="false" id="filtro_solo_finanzas"/>
                            <span class="checkbox-tile waves-effect">
                                <span class="checkbox-icon checkbox-icon-flag">
                                    <i class="fa-solid fa-landmark"></i>
                                </span>
                                <span class="checkbox-label">Finanzas y banca</span>
                            </span>
                        </label>
                    </div>
                    <div class="checkbox">
                        <label class="checkbox-wrapper">
                            <input type="checkbox" class="checkbox-input buttonCategoria btnReset" state="false" id="filtro_solo_alimentos"/>
                            <span class="checkbox-tile waves-effect">
                                <span class="checkbox-icon checkbox-icon-flag">
                                    <i class="fa-solid fa-utensils"></i>
                                </span>
                                <span class="checkbox-label">Alimentos y bebidas</span>
                            </span>
                        </label>
                    </div>
                    <div class="checkbox">
                        <label class="checkbox-wrapper">
                            <input type="checkbox" class="checkbox-input buttonCategoria btnReset" state="false" id="filtro_solo_salud"/>
                            <span class="checkbox-tile waves-effect">
                                <span class="checkbox-icon checkbox-icon-flag">
                                    <i class="fa-solid fa-staff-snake"></i>
                                </span>
                                <span class="checkbox-label">Salud y farmacéutica</span>
                            </span>
                        </label>
                    </div>
                    <div class="checkbox">
                        <label class="checkbox-wrapper">
                            <input type="checkbox" class="checkbox-input buttonCategoria btnReset" state="false" id="filtro_solo_manufactura"/>
                            <span class="checkbox-tile waves-effect">
                                <span class="checkbox-icon checkbox-icon-flag">
                                    <i class="fa-solid fa-industry"></i>
                                </span>
                                <span class="checkbox-label">Manufactura y tecnología industrial</span>
                            </span>
                        </label>
                    </div>
                    <div class="checkbox">
                        <label class="checkbox-wrapper">
                            <input type="checkbox" class="checkbox-input buttonCategoria btnReset" state="false" id="filtro_solo_minoristas"/>
                            <span class="checkbox-tile waves-effect">
                                <span class="checkbox-icon checkbox-icon-flag">
                                    <i class="fa-solid fa-store"></i>
                                </span>
                                <span class="checkbox-label">Minoristas</span>
                            </span>
                        </label>
                    </div>
                    <div class="checkbox">
                        <label class="checkbox-wrapper">
                            <input type="checkbox" class="checkbox-input buttonCategoria btnReset" state="false" id="filtro_solo_energia"/>
                            <span class="checkbox-tile waves-effect">
                                <span class="checkbox-icon checkbox-icon-flag">
                                    <i class="fa-solid fa-bolt"></i>
                                </span>
                                <span class="checkbox-label">Energía y recursos</span>
                            </span>
                        </label>
                    </div>
                    <div class="checkbox">
                        <label class="checkbox-wrapper">
                            <input type="checkbox" class="checkbox-input buttonCategoria btnReset" state="false" id="filtro_solo_comunicacion"/>
                            <span class="checkbox-tile waves-effect">
                                <span class="checkbox-icon checkbox-icon-flag">
                                    <i class="fa-solid fa-satellite-dish"></i>
                                </span>
                                <span class="checkbox-label">Comunicación y medios</span>
                            </span>
                        </label>
                    </div>
                    <div class="checkbox">
                        <label class="checkbox-wrapper">
                            <input type="checkbox" class="checkbox-input buttonCategoria btnReset" state="false" id="filtro_solo_transporte"/>
                            <span class="checkbox-tile waves-effect">
                                <span class="checkbox-icon checkbox-icon-flag">
                                    <i class="fa-solid fa-truck-front"></i>
                                </span>
                                <span class="checkbox-label">Transporte y logística</span>
                            </span>
                        </label>
                    </div>
                    <div class="checkbox">
                        <label class="checkbox-wrapper">
                            <input type="checkbox" class="checkbox-input buttonCategoria btnReset" state="false" id="filtro_solo_construccion"/>
                            <span class="checkbox-tile waves-effect">
                                <span class="checkbox-icon checkbox-icon-flag">
                                    <i class="fa-solid fa-building"></i>
                                </span>
                                <span class="checkbox-label">Construcción e inmobiliaria</span>
                            </span>
                        </label>
                    </div>
                    <div class="checkbox">
                        <label class="checkbox-wrapper">
                            <input type="checkbox" class="checkbox-input buttonCategoria btnReset" state="false" id="filtro_solo_seguros"/>
                            <span class="checkbox-tile waves-effect">
                                <span class="checkbox-icon checkbox-icon-flag">
                                    <i class="fa-solid fa-shield"></i>
                                </span>
                                <span class="checkbox-label">Seguros</span>
                            </span>
                        </label>
                    </div>
                    <div class="checkbox">
                      <label class="checkbox-wrapper">
                          <input type="checkbox" class="checkbox-input buttonCategoria btnReset" state="false" id="filtro_solo_agricultura"/>
                          <span class="checkbox-tile waves-effect">
                              <span class="checkbox-icon checkbox-icon-flag">
                                 <i class="fa-solid fa-seedling"></i>
                              </span>
                              <span class="checkbox-label">Agricultura</span>
                          </span>
                      </label>
                  </div>
                  <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input buttonCategoria btnReset" state="false" id="filtro_solo_educacion"/>
                        <span class="checkbox-tile waves-effect">
                            <span class="checkbox-icon checkbox-icon-flag">
                                <i class="fa-solid fa-user-graduate"></i>
                            </span>
                            <span class="checkbox-label">Educación</span>
                        </span>
                    </label>
                  </div>
                  <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input buttonCategoria btnReset" state="false" id="filtro_solo_turismo"/>
                        <span class="checkbox-tile waves-effect">
                            <span class="checkbox-icon checkbox-icon-flag">
                                <i class="fa-solid fa-umbrella-beach"></i>
                            </span>
                            <span class="checkbox-label">Turismo y viajes</span>
                        </span>
                    </label>
                  </div>
                  <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input buttonCategoria btnReset" state="false" id="filtro_solo_moda"/>
                        <span class="checkbox-tile waves-effect">
                            <span class="checkbox-icon checkbox-icon-flag">
                               <i class="fa-solid fa-shirt"></i>
                            </span>
                            <span class="checkbox-label">Moda y vestimenta</span>
                        </span>
                    </label>
                  </div>
                </section>
                
            </div>
            <br>
            <section style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; align-content: center;">
              <div class="checkbox" style="width: 100%;">
                <label class="checkbox-wrapper">
                    <input type="checkbox" class="checkbox-input" state="false" id="filtro_reinicio"/>
                    <span class="checkbox-tile-reset waves-effect" style="width: 100%;">
                        <span class="checkbox-icon checkbox-icon-flag">
                          <i class="fa-solid fa-rotate-right"></i>
                        </span>
                        <span class="checkbox-label">Reiniciar filtros</span>
                    </span>
                </label>
              </div>
              <div class="checkbox" style="width: 100%;">
                <label class="checkbox-wrapper">
                    <input type="checkbox" class="checkbox-input" state="false" id="filtro_borrado_seleccion"/>
                    <span class="checkbox-tile-reset waves-effect" style="width: 100%;">
                        <span class="checkbox-icon checkbox-icon-flag">
                          <i class="fa-solid fa-eraser"></i>
                        </span>
                        <span class="checkbox-label">Reiniciar selección</span>
                    </span>
                </label>
              </div>
            </section>
            
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

//Funcion para guardar las empresas originales en memoria
function guardarOriginalesMemoria() {
  let listaActual = obtenerListaDeEmpresasActual();
  let listaOriginal = listaActual.map((element) => {
    return `<li>${element}</li>`;
  });
  localStorage.setItem("originalLista", listaOriginal);
}

setTimeout(() => {
  guardarOriginalesMemoria();
}, 1000);

// Función para eliminar los textos con la bandera de USA
localStorage.setItem("expresionRegularQuitar", "");
function eliminarTextosConBandera(expresionRegular, accion) {
  // Obtenemos los nombres de empresas que no contengan display:none
  let listaActual = document.getElementById("lista_empresa");
  let listaActual_nodos = listaActual.childNodes;
  let listaActual_nodos_arr = [...listaActual_nodos];
  let listaActual_nodos_outerHtml = "";
  listaActual_nodos_arr.filter((nodo) => {
    if (nodo != undefined) {
      listaActual_nodos_outerHtml += nodo.outerHTML;
    }
  });
  listaActual_nodos_outerHtml = listaActual_nodos_outerHtml.replace(
    /undefined/g,
    ""
  );
  let listaActual_nodos_outerHtml_arr =
    listaActual_nodos_outerHtml.split("</li>");
  let listaActual_nodos_outerHtml_arrfinal =
    listaActual_nodos_outerHtml_arr.map((elemento) => elemento + "</li>");
  let listaActual_nodos_sinDisplayNone =
    listaActual_nodos_outerHtml_arrfinal.filter((empresa) => {
      if (!empresa.includes("display:none")) {
        return empresa;
      }
    });

  //Actualizamos el contenido en memoria con la expresion regular
  if (localStorage.getItem("expresionRegularQuitar") == null) {
    localStorage.setItem("expresionRegularQuitar", "");
  }

  function crearExpresionRegularDesdeTexto(texto) {
    // Usamos una expresión regular para encontrar todas las banderas en el texto original
    const banderasEnTexto = texto.match(/🇧🇷|🇨🇭|🇪🇸|🇵🇪|🇩🇪|🇦🇷|🇺🇸|🇲🇽|🇨🇱|🇻🇪|🇨🇴|🇷🇺/g);

    if (banderasEnTexto) {
      // Usamos map para agregar "+" después de cada bandera y join para combinarlas con "|"
      const expresionRegular = new RegExp(
        banderasEnTexto.map((bandera) => `${bandera}+`).join("|"),
        "g"
      );
      return expresionRegular;
    } else {
      // Si no se encuentran banderas en el texto, retornamos una expresión vacía
      return new RegExp("", "g");
    }
  }

  function eliminarBandera(texto, bandera) {
    const regex = new RegExp(`${bandera}`, "g");
    const resultado = texto.replace(regex, "");
    return resultado;
  }

  let elementosSinBanderas = [];
  if (accion == "remove") {
    //Guardamos/agregamos en memoria la nueva bandera
    localStorage.setItem(
      "expresionRegularQuitar",
      localStorage.getItem("expresionRegularQuitar") + expresionRegular
    );

    // Llama a la función para obtener la expresión regular
    const regex = crearExpresionRegularDesdeTexto(
      localStorage.getItem("expresionRegularQuitar")
    );

    //Hacemos 4 pasadas porque la expresion regular no es tan eficiente con muchos elementos (Se brinca elementos)
    elementosSinBanderas = listaActual_nodos_sinDisplayNone.filter((item) => {
      if (!regex.test(item)) {
        return item;
      }
    });
    let elementosSinBanderas2 = elementosSinBanderas.filter((item) => {
      if (!regex.test(item)) {
        return item;
      }
    });
    let elementosSinBanderas3 = elementosSinBanderas2.filter((item) => {
      if (!regex.test(item)) {
        return item;
      }
    });
    let elementosSinBanderas4 = elementosSinBanderas3.filter((item) => {
      if (!regex.test(item)) {
        return item;
      }
    });
    let elementosSinBanderas5 = elementosSinBanderas4.filter((item) => {
      if (!regex.test(item)) {
        return item;
      }
    });
    let elementosSinBanderas6 = elementosSinBanderas5.filter((item) => {
      if (!regex.test(item)) {
        return item;
      }
    });
    let elementosSinBanderas7 = elementosSinBanderas6.filter((item) => {
      if (!regex.test(item)) {
        return item;
      }
    });
    return elementosSinBanderas7;
  } else if (accion == "add") {
    //Elegimos la bandera que queremos quitar
    let textoSinBandera = eliminarBandera(
      localStorage.getItem("expresionRegularQuitar"),
      expresionRegular
    );

    //Guardamos/quitamos en memoria la nueva bandera
    localStorage.setItem("expresionRegularQuitar", textoSinBandera);

    // Llama a la función para obtener la expresión regular
    const regex = crearExpresionRegularDesdeTexto(
      localStorage.getItem("expresionRegularQuitar")
    );

    //Obtenemos la lista original
    let listaOriginal = localStorage.getItem("originalLista");
    listaOriginal = listaOriginal.split(",");

    //Si regex no esta vacio
    if (regex != "/(?:)/g") {
      console.log("regex: ", regex);
      //Hacemos 4 pasadas porque la expresion regular no es tan eficiente con muchos elementos (Se brinca elementos)
      elementosSinBanderas = listaOriginal.filter((item) => {
        if (!regex.test(item)) {
          return item;
        }
      });
      let elementosSinBanderas2 = elementosSinBanderas.filter((item) => {
        if (!regex.test(item)) {
          return item;
        }
      });
      let elementosSinBanderas3 = elementosSinBanderas2.filter((item) => {
        if (!regex.test(item)) {
          return item;
        }
      });
      let elementosSinBanderas4 = elementosSinBanderas3.filter((item) => {
        if (!regex.test(item)) {
          return item;
        }
      });
      let elementosSinBanderas5 = elementosSinBanderas4.filter((item) => {
        if (!regex.test(item)) {
          return item;
        }
      });
      let elementosSinBanderas6 = elementosSinBanderas5.filter((item) => {
        if (!regex.test(item)) {
          return item;
        }
      });
      console.log("elementosSinBanderas: ", elementosSinBanderas6);

      return elementosSinBanderas;
    } else {
      console.log("regex: ", regex);
      if (localStorage.getItem("empresasAgrupadas") == "activo") {
        //Devuelve la lista por agrupamiento de pais
        let empresasAgrupadas = localStorage.getItem(
          "contenidoDeEmpresasBuscadorMemoria_agrupadas"
        );
        return empresasAgrupadas.split(",");
      } else {
        //Devuelve la lista desordenada
        return listaOriginal;
      }
    }
  }
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
    localStorage.setItem(
      "contenidoDeEmpresasBuscadorMemoria_agrupadas",
      empresasAgrupadas
    );
    localStorage.setItem("empresasAgrupadas", "activo");
    lista_empresa_actual.innerHTML = empresasAgrupadas.join("");

    mdtoast("Empresas agrupadas por país", {
      interaction: false,
      duration: 1000,
    });

    filtro_grupo_pais.setAttribute('state', 'true');
    filtro_grupo_pais_bandera = true;
  } else {
    //Actualizamos el menu
    lista_empresa_actual.innerHTML = localStorage.getItem(
      "contenidoDeEmpresasBuscadorMemoria_anterior"
    );
    localStorage.setItem("empresasAgrupadas", "inactivo");

    mdtoast("Empresas agrupadas por país desactivado", {
      interaction: false,
      duration: 1000,
    });

    filtro_grupo_pais.setAttribute('state', 'false');
    filtro_grupo_pais_bandera = false;
  }
});

////////////////////////////////////////////////////////////////////////////
//Funcion para quitar a un pais en concreto
function agregarOnclickBotonQuitarBandera(
  id_button,
  emoji_bandera,
  state_button
) {
  //Boton para quitar la bandera
  id_button.addEventListener("click", () => {
    //Obtenemos el contenedor de empresas listadas (Es el contenedor del buscador)
    //Debe ser obtenido aqui porque se carga de forma asincrona
    let lista_empresa_actual = document.getElementById("lista_empresa");

    if (state_button == false) {
      ///////Agrupamiento por pais
      let empresasAgrupadas = eliminarTextosConBandera(emoji_bandera, "remove");

      //Actualizamos el contenido
      lista_empresa_actual.innerHTML = empresasAgrupadas.join("");

      mdtoast("País ocultado", {
        interaction: false,
        duration: 1000,
      });

      id_button.setAttribute('state', 'true');
      state_button = true;
    } else {
      ///////Agrupamiento por pais
      let empresasAgrupadas = eliminarTextosConBandera(emoji_bandera, "add");
      //Actualizamos el contenido
      lista_empresa_actual.innerHTML = empresasAgrupadas.join("");

      mdtoast("País mostrado", {
        interaction: false,
        duration: 1000,
      });

      id_button.setAttribute('state', 'false');
      state_button = false;
    }
  });
}

// Define un arreglo de objetos que contiene la información de cada botón
const paisesBotones = [
  {
    boton: filtro_no_eua,
    regex: /🇺🇸/,
    state: filtro_no_eua_bandera,
  },
  {
    boton: filtro_no_mexico,
    regex: /🇲🇽/,
    state: filtro_no_mexico_bandera,
  },
  {
    boton: filtro_no_argentina,
    regex: /🇦🇷/,
    state: filtro_no_argentina_bandera,
  },
  {
    boton: filtro_no_brasil,
    regex: /🇧🇷/,
    state: filtro_no_brasil_bandera,
  },
  {
    boton: filtro_no_espana,
    regex: /🇪🇸/,
    state: filtro_no_espana_bandera,
  },
  {
    boton: filtro_no_colombia,
    regex: /🇨🇴/,
    state: filtro_no_colombia_bandera,
  },
  {
    boton: filtro_no_suiza,
    regex: /🇨🇭/,
    state: filtro_no_suiza_bandera,
  },
  {
    boton: filtro_no_chile,
    regex: /🇨🇱/,
    state: filtro_no_chile_bandera,
  },
  {
    boton: filtro_no_venezuela,
    regex: /🇻🇪/,
    state: filtro_no_venezuela_bandera,
  },
  {
    boton: filtro_no_peru,
    regex: /🇵🇪/,
    state: filtro_no_peru_bandera,
  },
  {
    boton: filtro_no_rusia,
    regex: /🇷🇺/,
    state: filtro_no_rusia_bandera,
  },
  {
    boton: filtro_no_alemania,
    regex: /🇩🇪/,
    state: filtro_no_alemania_bandera,
  },
];

//Aplicamos el evento onclick a cada boton
paisesBotones.forEach((pais) => {
  agregarOnclickBotonQuitarBandera(pais.boton, pais.regex, pais.state);
});
