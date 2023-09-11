//Elementos en la caja de busqueda
let elements_to_search = document.getElementsByClassName('shown');

//Button para realizar la busqueda
let searchCompanyButton = document.getElementById('searchCompanyButton');
let searchCompanyButton_index_all = document.getElementById('searchCompanyButton_index_all');


//variables y constantes para la paginacion
let paginasDeEmpresas=[];
const empresasPagina=3;
let paginaActual=0;
let empresasIndicesValor = {};



// funcion para calcular los indices financieros correspondientes a la empresa en cuestion en base a los datos 
//del periodo más reciente
function calculaIndicesFinancieros(empresa,html){

    let  edoResultados=html;

    //creamos un div temporal para similiar que es codigo html

    let tempDiv=document.createElement('div')
    tempDiv.innerHTML=edoResultados;


    //obtenemos todas las filas de la tabla
    let rows = tempDiv.querySelectorAll('.genTbl.reportTbl tbody tr');

    let datosFinancieros = {};

    //iteramos a traves de las filas y obtenemos los datos del periodo mas reciente, los guardamos en forma de diccionario para que sea facil de 
    //recuperar la data
    rows.forEach(row =>{
        let cells = row.querySelectorAll('td');
        if (cells.length > 1){
            let label = cells[0].textContent.trim();
            let value = parseFloat(cells[1].textContent.trim().replace(',',''));

            if(!isNaN(value)){
                datosFinancieros[label] = value;
            }
        }
    })

    //AHORA CALCULAMOS LOS INDICES QUE NECESITAMOS

    let indices = {
        rentabilidad: datosFinancieros["Resultado neto"] / datosFinancieros["Ventas Netas"],
        endeudamiento: datosFinancieros["Total de gastos de operación"] / datosFinancieros["Ventas Netas"],
        rotacion: datosFinancieros["Ventas Netas"] / datosFinancieros["Utilidad bruta"],
        liquidez: datosFinancieros["Utilidad bruta"] / datosFinancieros["Ventas Netas"]
    };

    empresasIndicesValor[empresa] = indices;

    
    
    localStorage.setItem("empresaConIndices", JSON.stringify(empresasIndicesValor));;
    

}


// Funcion auxiliar que nos trae los estados de resultandos correspondientes a las empresas que se estan buscando para así
// calcular sus indices financieros
function traerEstadoResultado(arrayEmpresasSeleccionadas) {
    arrayEmpresasSeleccionadas.forEach(empresa => { 
        fetch(`https://raw.githubusercontent.com/LuisEnriqueChavarriaVazquez/getInvestingServiceData/main/generatedFiles/${empresa}-income-statement.html`)
        .then(response => response.text())
        .then(html => {
            calculaIndicesFinancieros(empresa, html);
        })
        .catch(error => {
            console.error(`Error al obtener datos de ${empresa}:`, error);
        });
    });
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
        return element.innerText;
    });


    // CALCULAMOS LOS INDICES FINANCIEROS PARA LAS EMPRESAS QUE EL USUARIO SELECCIONO
    traerEstadoResultado(elementosEncontrados);

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

//Procedemos a hacer la busqueda de todos los elementos...
searchCompanyButton_index_all.addEventListener('click', () => {

    //peticionEmpresa(array_nombres_solos);
    
    //CALCULAMOS LOS INDICES FINANCIEROS PARA TODAS LAS EMPRESAS DISPONIBLES
    traerEstadoResultado(array_nombres_solos);

    empresasIndicesValor = {}


    paginasDeEmpresas = divideEmpresasPagina(array_nombres_solos, empresasPagina);
    mostrarPagina(0);
   

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

            //Mensaje de listo
            mdtoast('Busqueda de empresa lista.', { 
                interaction: false,
                duration: 1000
            });
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
            mdtoast('Busqueda de empresa lista.', { 
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

