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
                <div class="checkbox" id="filtro_alfabeto_ascendente">
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
                <div class="checkbox" id="filtro_grupo_pais">
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
                <div class="checkbox" id="filtro_no_eua">
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
                <div class="checkbox" id="filtro_no_mexico">
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
                <div class="checkbox" id="filtro_no_argentina">
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
                <div class="checkbox" id="filtro_no_brasil">
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
                <div class="checkbox" id="filtro_no_espana">
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
                <div class="checkbox" id="filtro_no_colombia">
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
                <div class="checkbox" id="filtro_no_suiza">
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
                <div class="checkbox" id="filtro_no_chile">
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
                <div class="checkbox" id="filtro_no_venezuela">
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
                <div class="checkbox" id="filtro_no_peru">
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
                <div class="checkbox" id="filtro_no_colombia">
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
                <div class="checkbox" id="filtro_no_rusia">
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
                    <div class="checkbox" id="filtro_solo_tech">
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
                    <div class="checkbox" id="filtro_solo_finanzas">
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
                    <div class="checkbox" id="filtro_solo_alimentos">
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
                    <div class="checkbox" id="filtro_solo_salud">
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
                    <div class="checkbox" id="filtro_solo_manufactura">
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
                    <div class="checkbox" id="filtro_solo_minoristas">
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
                    <div class="checkbox" id="filtro_solo_energia">
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
                    <div class="checkbox" id="filtro_solo_comunicacion">
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
                    <div class="checkbox" id="filtro_solo_transporte">
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
                    <div class="checkbox" id="filtro_solo_construccion">
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

////////////////////////////////////////////////
//Botones de filtros
////////////////////////////////////////////////
let filtro_alfabeto_ascendente = document.getElementById("filtro_alfabeto_ascendente");
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

let filtro_solo_tech = document.getElementById("filtro_solo_tech");
let filtro_solo_finanzas = document.getElementById("filtro_solo_finanzas");
let filtro_solo_alimentos = document.getElementById("filtro_solo_alimentos");
let filtro_solo_salud = document.getElementById("filtro_solo_salud");
let filtro_solo_manufactura = document.getElementById("filtro_solo_manufactura");
let filtro_solo_minoristas = document.getElementById("filtro_solo_minoristas");
let filtro_solo_energia = document.getElementById("filtro_solo_energia");
let filtro_solo_comunicacion = document.getElementById("filtro_solo_comunicacion");
let filtro_solo_transporte = document.getElementById("filtro_solo_transporte");
let filtro_solo_construccion = document.getElementById("filtro_solo_construccion");

//Variable para evitar que se presione dos veces el boton
let prevenirDoblePulsacion = 0;

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

//Primer boton
filtro_alfabeto_ascendente.addEventListener("click", () => {
  if (prevenirDoblePulsacion == 0) {
    //Obtenemos los nombres de empresas
    let listaActual = obtenerListaDeEmpresasActual();
    //Invertimos el orden de la lista
    listaActual = listaActual.reverse();

    //Le ponemos la etique li a cada elemento
    let listaActualFinal = listaActual.map(elemento => {
        return `<li>${elemento}</li>`;
    })

    //Obtenemos el contenedor de empresas listadas (Es el contenedor del buscador)
    //Debe ser obtenido aqui porque se carga de forma asincrona
    let lista_empresa_actual = document.getElementById("lista_empresa");

    //Actualizamos el contenido
    lista_empresa_actual.innerHTML = listaActualFinal.join("");

    prevenirDoblePulsacion++;
  } else {
    prevenirDoblePulsacion = 0;
  }
});

//Segundo boton
filtro_grupo_pais.addEventListener("click", () => {
    if (prevenirDoblePulsacion == 0) {
        //Obtenemos los nombres de empresas
        let listaActual = obtenerListaDeEmpresasActual();
        
        ///////Agrupamiento por pais
        // Objeto para almacenar los grupos
        const grupos = {};
        
        // Expresión regular para buscar emojis de bandera
        const regexBandera =  /🇧🇷|🇨🇭|🇪🇸|🇵🇪|🇩🇪|🇦🇷|🇺🇸|🇲🇽|🇨🇱|🇻🇪|🇵🇪|🇨🇴|🇷🇺/;
        
        // Recorre los textos y agrupa por emoji de bandera
        listaActual.forEach(texto => {
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
                grupo.forEach(texto => {
                    elementosConEtiquetas.push(`<li>${texto}</li>`);
                });
            }
        }
    
        //Obtenemos el contenedor de empresas listadas (Es el contenedor del buscador)
        //Debe ser obtenido aqui porque se carga de forma asincrona
        let lista_empresa_actual = document.getElementById("lista_empresa");
    
        //Actualizamos el contenido
        lista_empresa_actual.innerHTML = elementosConEtiquetas.join("");
    
        prevenirDoblePulsacion++;
      } else {
        prevenirDoblePulsacion = 0;
      }
  });
