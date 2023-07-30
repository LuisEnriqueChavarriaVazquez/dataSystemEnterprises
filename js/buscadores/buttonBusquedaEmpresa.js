//Elementos en la caja de busqueda
let elements_to_search = document.getElementsByClassName('shown');

//Button para realizar la busqueda
let searchCompanyButton = document.getElementById('searchCompanyButton');

//Procedemos a hacer la busqueda de elementos cuando demos click al boton
searchCompanyButton.addEventListener('click', () => {

    //Guardamos en un array la lista de las empresas
    let elements_to_searchArr = [...elements_to_search];
    //Aqui guardaremos los elementos que el usuarios desee buscar
    let elementosEncontrados = elements_to_searchArr.map(element => {
        return element.innerText;
    });

    //Llamamos a la funcion para hacer la peticion de la empresa
    peticionEmpresa(elementosEncontrados);
    
        
});

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
}
