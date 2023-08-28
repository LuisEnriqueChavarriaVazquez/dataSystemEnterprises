// //Accedemos a los datos de nombre de empresas...
// let url_nombre_empresa_income =
//   "https://raw.githubusercontent.com/LuisEnriqueChavarriaVazquez/getInvestingServiceData/main/datos/nombre_extraidos_income_statement.json";
// let url_nombre_balance_sheet =
//   "https://raw.githubusercontent.com/LuisEnriqueChavarriaVazquez/getInvestingServiceData/main/datos/nombres_extraidos_balance_sheet.json";

//Obtenemos los nombres de las empresas guardadas en memoria
if(!localStorage.getItem('lista_empresas_ranking_provenientes_del_index')){
    localStorage.setItem('lista_empresas_ranking_provenientes_del_index', JSON.stringify(["0"]));
}

let nombres_empresas_elejidas_en_index = localStorage.getItem(
  "lista_empresas_ranking_provenientes_del_index"
);
let array_nombres_memoria = JSON.parse(nombres_empresas_elejidas_en_index);

//En este array guardaremos los JSON de cada una de las empresas
let balanceSheetArrayJson = [];
let incomeStatementArrayJson = [];

//Vamos a consultar los archivos JSON de cada una de las empresas que hemos obtenido
function peticionJsonEmpresasGuardadas(listaEmpresas){
    let contenedorGraficos = document.getElementById("contenedorGraficos");
    contenedorGraficos.innerHTML = "";

    listaEmpresas.forEach((empresa) => { 
        // Realizar la solicitud GET al archivo HTML
        fetch(`https://raw.githubusercontent.com/LuisEnriqueChavarriaVazquez/getInvestingServiceData/main/generatedJsons/${empresa}-balance-sheet.json`)
        .then((response) => response.text())
        .then((json_contenido) => {
            // Acceder al contenido del archivo HTML
            contenedorGraficos.innerHTML += `
            <div class="border-2 shadow-1">
                <div class="tableTitle">Hoja de balance de ${empresa}</div>
                <div class="balance_sheet">${json_contenido}</div>
                <canvas id="chart_1"></canvas>
            </div>
            `;
        })
        .catch((error) => {
            console.error("Recurso no disponible:", error);
        });
        
        fetch(`https://raw.githubusercontent.com/LuisEnriqueChavarriaVazquez/getInvestingServiceData/main/generatedJsons/${empresa}-income-statement.json`)
        .then((response) => response.text())
        .then((json_contenido) => {
            // Acceder al contenido del archivo HTML
            contenedorGraficos.innerHTML += `
            <div>
                <div class="tableTitle">Estado de resultados de ${empresa}</div>
                <div class="income_statement">${json_contenido}</div>
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

    if(listaEmpresas.length == 0 || listaEmpresas[0] == 0){
        contenedorGraficos.innerHTML = "";
        contenedorGraficos.innerHTML = `
        <div class="card-message">
            <div class="card-image card-imageInfo border-4" id="busqueda"></div>
            <p class="textMessage">Seleccione alguna empresa en la sección de inicio.</p>
            <div class="buttonContainer-company">
                <a href="index.html" class="btn waves-effect"><i class="fa-solid fa-home"></i> &nbsp;Selección de empresas</a>
            </div>
        </div>
        `;
    }
}
peticionJsonEmpresasGuardadas(array_nombres_memoria);