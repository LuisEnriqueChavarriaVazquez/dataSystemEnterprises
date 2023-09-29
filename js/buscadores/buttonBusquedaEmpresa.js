//Elementos en la caja de busqueda
let elements_to_search = document.getElementsByClassName('shown');

//Button para realizar la busqueda
let searchCompanyButton = document.getElementById('searchCompanyButton');

//variables y constantes para la paginacion
let paginasDeEmpresas=[];
const empresasPagina=3;
let paginaActual=0;
let empresasIndicesValor = {};
let datosFinancieros = {};

// funcion para calcular los indices financieros correspondientes a la empresa en cuestion en base a los datos 
//del periodo más reciente
function calculaIndicesFinancieros(empresa,html, contadorCalculo){

    let  edoResultados=html;

    //creamos un div temporal para similiar que es codigo html

    let tempDiv=document.createElement('div')
    tempDiv.innerHTML=edoResultados;


    //obtenemos todas las filas de la tabla
    let rows = tempDiv.querySelectorAll('.genTbl.reportTbl tbody tr');

    //Obtenemos valores concretos para restas
    let cuentasPorCobrarSegundoValor = "";
    let inventarioSegundoValor = "";

    //iteramos a traves de las filas y obtenemos los datos del periodo mas reciente, los guardamos en forma de diccionario para que sea facil de recuperar la data
    rows.forEach(row =>{
        let cells = row.querySelectorAll('td');
        if (cells.length > 1){
            let label = cells[0].textContent.trim();
            let value = parseFloat(cells[1].textContent.trim().replace(',',''));

            if(label == "Cuentas por cobrar, Neto"){
                cuentasPorCobrarSegundoValor = parseFloat(cells[2].textContent.trim().replace(',',''))
                console.log('cuentasPorCobrarSegundoValor: ', cuentasPorCobrarSegundoValor);
            }

            if(label == "Inventarios, Neto"){
                inventarioSegundoValor = parseFloat(cells[2].textContent.trim().replace(',',''))
                console.log('inventarioSegundoValor: ', inventarioSegundoValor);
            }
            
            if(!isNaN(value)){
                datosFinancieros[label] = value;
            }
        }
    })
    
    //El contador de calculo sirve para evaluar si estamos en la primera o segunda tabla de una empresa
    /**
     * Cuando el valor es 2 significa que ya tenemos los datos necesarios para calcular los indices
    */
   
    if(contadorCalculo == 1){
        console.log("Primera tabla almacenada");
        //console.log('datosFinancieros: ', datosFinancieros);
        console.log("Longitud", Object.keys(datosFinancieros).length);
    }else if(contadorCalculo == 2){ //Como ya tenemos las dos tablas ya podemos hacer calculos
        console.log("Segunda tabla almacenada");
        console.log('datosFinancieros: ', datosFinancieros);
        console.log("Longitud", Object.keys(datosFinancieros).length);

        //Indice de rentabilidad de forma especifica
        let indices_rentabilidad = {
            //Resultado neto == Utilidad neta
            margen_de_utilidad: (datosFinancieros["Resultado neto"] / datosFinancieros["Ventas Netas"]).toFixed(2),
            rendimientos_sobre_activos_totales: (datosFinancieros["Resultado neto"] / datosFinancieros["Ventas netas totales"]).toFixed(2),
            rendimientos_sobre_capital_contable: (datosFinancieros["Resultado neto"] / datosFinancieros["Capital contable"]).toFixed(2),
        }

        //Indices especificos de liquidez
        let indices_liquidez = {
            capital_de_trabajo: (datosFinancieros["Total de activos corrientes"] - datosFinancieros["Total pasivos corrientes"]).toFixed(2),
            //En la primera division lo que se hace calcular Rotacion de inventario, luego rotacion de cuentas por cobrar y luego por pagar en la ultima division
            capital_operativo: ((datosFinancieros["Inventarios, Neto"] / datosFinancieros["Costo de venta"]) - (datosFinancieros["Ventas Netas"]/datosFinancieros["Cuentas por cobrar, Neto"]) - (datosFinancieros["Costo de venta"]/datosFinancieros["Cuentas por pagar"])).toFixed(2), //Pendiente duda
            prueba_del_acido: ((datosFinancieros["Total de activos corrientes"] - datosFinancieros["Inventarios, Neto"]) / datosFinancieros["Total pasivos corrientes"]).toFixed(2),
            razon_de_liquidez: ((datosFinancieros["Total de activos corrientes"]) / datosFinancieros["Total pasivos corrientes"]).toFixed(2),
        }

        //Indices especificos de endeudamiento
        let indices_endeudamiento = {
            razon_de_cobertura_de_interes: (datosFinancieros["Total pasivo"] / datosFinancieros["Deuda a largo plazo, Total"]).toFixed(2),
            apalancamiento_sobre_activo_total: ((datosFinancieros["Resultado antes de los impuestos a la utilidad"]) / (datosFinancieros["Intereses pagados (Utilidad), Neto"] * -1)).toFixed(2), //Pendiente duda
        }

        //Indices especificos de rotacion
        let indices_rotacion = {
            rotacion_de_activos_fijos: (datosFinancieros["Ventas Netas"] / datosFinancieros["Total de activos corrientes"]).toFixed(2),
            rotacion_de_activos_totales: (datosFinancieros["Ventas Netas"] / datosFinancieros["Total activo"]).toFixed(2),
            rotacion_de_cuentas_por_cobrar: (((cuentasPorCobrarSegundoValor + datosFinancieros["Cuentas por cobrar, Neto"])/2) / (datosFinancieros["Ventas Netas"]/90)).toFixed(2),
            rotacion_de_inventarios: (((inventarioSegundoValor + datosFinancieros["Inventarios, Neto"])/2) / (datosFinancieros["Costo de venta"]/90)).toFixed(2),
        }

        //AHORA CALCULAMOS de forma general
        let indices = {
            rentabilidad: (datosFinancieros["Resultado neto"] / datosFinancieros["Ventas Netas"]).toFixed(2),
            endeudamiento: (datosFinancieros["Total de gastos de operación"] / datosFinancieros["Ventas Netas"]).toFixed(2),
            rotacion: (datosFinancieros["Ventas Netas"] / datosFinancieros["Utilidad bruta"]).toFixed(2),
            liquidez: (datosFinancieros["Utilidad bruta"] / datosFinancieros["Ventas Netas"]).toFixed(2),
            indices_rentabilidad_especificos: indices_rentabilidad,
            indices_liquidez_especificos: indices_liquidez,
            indices_endeudamiento_especificos: indices_endeudamiento,
            indices_rotacion_especificos: indices_rotacion
        };

        //En caso de que algun valor fuera NaN aplicamos la funcion...
        function reemplazarNaNConCero(obj) {
            // Recorre el objeto
            for (let key in obj) {
                if (typeof obj[key] === 'object') {
                    // Si es un objeto anidado, llama recursivamente a la función
                    reemplazarNaNConCero(obj[key]);
                } else if (isNaN(obj[key])) {
                    // Si es NaN, reemplaza con 0
                    obj[key] = 0;
                }
            }
        }
        reemplazarNaNConCero(indices);
    
    
        //En este objeto vamos sumando los mini arrays de indices
        empresasIndicesValor[empresa] = indices;

        //Guardamos en memoria los indices
        localStorage.setItem("empresaConIndices", JSON.stringify(empresasIndicesValor));

        //Comprobamos que este en memoria...
        let memoriaValor = localStorage.getItem("empresaConIndices");
        console.log('memoriaValor: ', memoriaValor);

        //Reiniciamos el objeto para que cuando busquemos otra empresa el dato cambie
        datosFinancieros = {};
    }

}


// Funcion auxiliar que nos trae los estados de resultandos correspondientes a las empresas que se estan buscando para así
// calcular sus indices financieros

/**
 * NOTA IMPORTANTE... Modifique las funciones para que sean asincronas...
 * Esto porque cuando son muchos datos, aveces estas funciones se ejecutaban en desorden,
 * cuando son asincronas se garantiza que se ejecuten de forma secuencial,
 * la única desventaja es que esto puede ralentizar el proceso cuando son muchos datos, pero fue la unica manera que encontre de
 * evitar que se ejecutaran en desorden.
 */
async function traerEstadoResultado(arrayEmpresasSeleccionadas) {
    for (const empresa of arrayEmpresasSeleccionadas) {
        try {
            const response = await fetch(`https://raw.githubusercontent.com/LuisEnriqueChavarriaVazquez/getInvestingServiceData/main/generatedFiles/${empresa}-income-statement.html`);
            const html = await response.text();
            calculaIndicesFinancieros(empresa, html, 1);
        } catch (error) {
            console.error(`Error al obtener datos de ${empresa}:`, error);
        }
    }
}

async function traerBalanceResultado(arrayEmpresasSeleccionadas) {
    for (const empresa of arrayEmpresasSeleccionadas) {
        try {
            const response = await fetch(`https://raw.githubusercontent.com/LuisEnriqueChavarriaVazquez/getInvestingServiceData/main/generatedFiles/${empresa}-balance-sheet.html`);
            const html = await response.text();
            calculaIndicesFinancieros(empresa, html, 2);
        } catch (error) {
            console.error(`Error al obtener datos de ${empresa}:`, error);
        }
    }
}



//funcion para dividir los array de empresas en el numero que deseamos por pagina
function divideEmpresasPagina(array,divisor){
    const resultado=[];
    for(let i=0;i<array.length;i+=divisor){
        resultado.push(array.slice(i,i+divisor));
    }
    return resultado
}


//Procedemos a hacer la busqueda de elementos cuando demos click al boton
searchCompanyButton.addEventListener('click', () => {

    //Guardamos en un array la lista de las empresas
    let elements_to_searchArr = [...elements_to_search];
    //Aqui guardaremos los elementos que el usuarios desee buscar
    let elementosEncontrados = elements_to_searchArr.map(element => {
        //Quitamos el icono de bandera al final de la empresa
        var textoSinBandera = element.innerText;
        textoSinBandera = textoSinBandera.slice(0, -5);
        //Retornamos el nombre de la empresa
        return textoSinBandera;
    });

    //Cerramos el listado de empresas una vez hecha la busqueda
    let buttonArrow = document.getElementById('buttonArrow');
    buttonArrow.click();


    // CALCULAMOS LOS INDICES FINANCIEROS PARA LAS EMPRESAS QUE EL USUARIO SELECCIONO
    traerEstadoResultado(elementosEncontrados);
    traerBalanceResultado(elementosEncontrados);

    empresasIndicesValor = {}



    if(elementosEncontrados.length<empresasPagina){
        //Llamamos a la funcion para hacer la peticion de la empresa
        peticionEmpresa(elementosEncontrados); 
        let paginaActualContainer = document.getElementById("paginaActual")
        paginaActualContainer.innerHTML=`${paginaActual}/0`;   

    }
    else{
        paginasDeEmpresas = divideEmpresasPagina(elementosEncontrados, empresasPagina);
        mostrarPagina(0);
    }
    
});


function renderEmpresasEnPagina(pagina){
    let contenedorDatosEmpresas = document.getElementsByClassName("containerTables");
    contenedorDatosEmpresas[0].innerHTML = "";

    paginasDeEmpresas[pagina].forEach((empresa) => { 
        // Realizar la solicitud GET al archivo HTML
        fetch(`https://raw.githubusercontent.com/LuisEnriqueChavarriaVazquez/getInvestingServiceData/main/generatedFiles/${empresa}-balance-sheet.html`)
        .then((response) => response.text())
        .then((html) => {
            // Acceder al contenido del archivo HTML
            contenedorDatosEmpresas[0].innerHTML += `
            <div class="containerColorTables">
                <div class="tableTitle">Hoja de balance de ${empresa}</div>
                <div class="balance_sheet">${html}</div>
            </div>
            `;
        })
        .catch((error) => {
            console.error("Recurso no disponible:", error);
        });
        
        fetch(`https://raw.githubusercontent.com/LuisEnriqueChavarriaVazquez/getInvestingServiceData/main/generatedFiles/${empresa}-income-statement.html`)
        .then((response) => response.text())
        .then((html) => {
            // Acceder al contenido del archivo HTML
            contenedorDatosEmpresas[0].innerHTML += `
            <div class="containerColorTables">
                <div class="tableTitle">Estado de resultados de ${empresa}</div>
                <div class="income_statement">${html}</div>
            </div>
            `;         
        })
        .catch((error) => {
            console.error("Recurso no disponible:", error);
        });
        
    });

    if(paginasDeEmpresas[pagina].length == 0){
        contenedorDatosEmpresas[0].innerHTML += `
        <div class="card-message">
            <div class="card-image card-imageInfo border-4" id="busqueda"></div>
            <p class="textMessage">Seleccione alguna empresa en la barra superior.</p>
        </div>
        `;
    }
}

//Hacemos la peticion de la empresa, basado en la lista de empresas que el usuario pidio
function peticionEmpresa(listaEmpresas){
    let contenedorDatosEmpresas = document.getElementsByClassName("containerTables");
    contenedorDatosEmpresas[0].innerHTML = "";

    listaEmpresas.forEach((empresa) => { 
        // Realizar la solicitud GET al archivo HTML
        fetch(`https://raw.githubusercontent.com/LuisEnriqueChavarriaVazquez/getInvestingServiceData/main/generatedFiles/${empresa}-balance-sheet.html`)
        .then((response) => response.text())
        .then((html) => {
            // Acceder al contenido del archivo HTML
            contenedorDatosEmpresas[0].innerHTML += `
            <div class="containerColorTables">
                <div class="tableTitle">Hoja de balance de ${empresa}</div>
                <div class="balance_sheet">${html}</div>
            </div>
            `;
        })
        .catch((error) => {
            console.error("Recurso no disponible:", error);
        });
        
        fetch(`https://raw.githubusercontent.com/LuisEnriqueChavarriaVazquez/getInvestingServiceData/main/generatedFiles/${empresa}-income-statement.html`)
        .then((response) => response.text())
        .then((html) => {
            // Acceder al contenido del archivo HTML
            contenedorDatosEmpresas[0].innerHTML += `
            <div class="containerColorTables">
                <div class="tableTitle">Estado de resultados de ${empresa}</div>
                <div class="income_statement">${html}</div>
            </div>
            `;

            //Mensaje de listo
            mdtoast('Empresa encontrada.', { 
                interaction: false,
                duration: 1000
            });
        })
        .catch((error) => {
            console.error("Recurso no disponible:", error);
        });
        
    });

    if(listaEmpresas.length == 0){
        contenedorDatosEmpresas[0].innerHTML += `
        <div class="card-message">
            <div class="card-image card-imageInfo border-4" id="busqueda"></div>
            <p class="textMessage">Seleccione alguna empresa en la barra superior.</p>
        </div>
        `;
    }
}


// Funciones para los botones de navegacion

function mostrarPagina(pagina){
    paginaActual=pagina;
    renderEmpresasEnPagina(pagina)
    let paginaActualContainer = document.getElementById("paginaActual")
    paginaActualContainer.innerHTML=`${paginaActual}/${paginasDeEmpresas.length -1}`;
}

function paginaSiguiente(){
    if (paginaActual < paginasDeEmpresas.length -1){
        mostrarPagina(paginaActual+1)
    }
}

function paginaAnterior(){
    if (paginaActual>0){
        mostrarPagina(paginaActual-1)
    }
}

