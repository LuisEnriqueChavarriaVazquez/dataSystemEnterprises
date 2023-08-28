//Elementos en la caja de busqueda
let elements_to_search = document.getElementsByClassName('shown');

//Button para realizar la busqueda
let searchCompanyButton_index = document.getElementById('searchCompanyButton_index');
let searchCompanyButton_index_all = document.getElementById('searchCompanyButton_index_all');

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

//Procedemos a hacer la busqueda de todos los elementos...
searchCompanyButton_index_all.addEventListener('click', () => {

    peticionEmpresa(array_nombres_solos);

});

//Hacemos la peticion de la empresa, basado en la lista de empresas que el usuario pidio
function peticionEmpresa(listaEmpresas){
    let containerListCompanies = document.getElementsByClassName("listCompanies");
    containerListCompanies[0].innerHTML = "";

    containerListCompanies[0].innerHTML += `
    <div class="card-message">
        <div class="card-image card-imageInfo border-4" id="listo"></div>
        <p class="textMessage">${listaEmpresas.length} empresa(s) han sido agregadas</p>
        <div class="buttonContainer-company">
            <a href="rankingGeneral.html" class="btn waves-effect"><i class="fa-solid fa-ranking-star"></i> &nbsp;Ranking general</a>
            <a href="ranking.html" class="btn waves-effect"><i class="fa-solid fa-chart-simple"></i> &nbsp;Rankings</a>
        </div>
    </div>
    `;

    //Aqui guardaremos la lista de empresas que el usuario eligio en el index
    let empresaLista = [];

    //Hacemos las peticiones de los datos de las empresas
    listaEmpresas.forEach((empresa) => { 
        // Realizar la solicitud GET al archivo HTML para comprobar que el archivo existe
        fetch(`https://raw.githubusercontent.com/LuisEnriqueChavarriaVazquez/getInvestingServiceData/main/generatedFiles/${empresa}-income-statement.html`)
        .then((response) => response.text())
        .then((html) => {
            
            //Guardamos en memoria el nombre de las empresas que ha seleccionado el usuario para que pueda verlo en los rankings
            empresaLista.push(`${empresa}`);
            localStorage.setItem('lista_empresas_ranking_provenientes_del_index', JSON.stringify(empresaLista));

            //Mensaje de listo
            mdtoast(`${listaEmpresas.length} Empresas agregadas.`, { 
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
