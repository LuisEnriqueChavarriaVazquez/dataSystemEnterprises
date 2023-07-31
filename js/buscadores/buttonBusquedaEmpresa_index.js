//Elementos en la caja de busqueda
let elements_to_search = document.getElementsByClassName('shown');

//Button para realizar la busqueda
let searchCompanyButton_index = document.getElementById('searchCompanyButton_index');

//Procedemos a hacer la busqueda de elementos cuando demos click al boton
searchCompanyButton_index.addEventListener('click', () => {

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
    let containerListCompanies = document.getElementsByClassName("listCompanies");
    containerListCompanies[0].innerHTML = "";

    containerListCompanies[0].innerHTML += `
    <div class="card-message">
        <div class="card-image card-imageInfo border-4" id="busqueda"></div>
        <p class="textMessage">${listaEmpresas.length} empresas han sido agregadas</p>
    </div>
    `;

    listaEmpresas.forEach((empresa) => { 
        // Realizar la solicitud GET al archivo HTML
        fetch(`https://raw.githubusercontent.com/LuisEnriqueChavarriaVazquez/getInvestingServiceData/main/generatedFiles/${empresa}-income-statement.html`)
        .then((response) => response.text())
        .then((html) => {
            // Acceder al contenido del archivo HTML
            containerListCompanies[0].innerHTML += `
                <input class="empresasAgregadasRanking" type="hidden" value="${empresa}"></input>
            `;

            //Mensaje de listo
            mdtoast('Empresas agregadas.', { 
                interaction: false,
                duration: 1000
            });
        })
        .catch((error) => {
            console.error("Recurso no disponible:", error);
        });
        
    });

    if(listaEmpresas.length == 0){
        containerListCompanies[0].innerHTML = `
        <div class="card-message">
            <div class="card-image card-imageInfo border-4" id="busqueda"></div>
            <p class="textMessage">No ha seleccionado ninguna empresa</p>
        </div>
        `;
    }
}
