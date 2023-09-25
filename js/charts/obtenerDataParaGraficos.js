/**
 * Lo que esta funcion hace es guardar los datos en memoria que fueron obteneidos despues de la busqueda, 
 * pero los obtiene del JSON que estaba en local storage
 * 
 * Con esto se consigue guardarlos en arrays por separado.
 * 
 * Con lo que al final d¿se salvan recursos, teniendo cada dato en arrays mas ligeros en lugar de un obj json grande
 */

function guardarTodaLaDataEnArraysMemoria(){   

    //Accedemos a los datos de las empresas
    let datosEmpresaAlmacenados = localStorage.getItem('empresaConIndices');
    let datosJsonParaGrafica = JSON.parse(datosEmpresaAlmacenados);
    console.log('datosJsonParaGrafica: ', datosJsonParaGrafica);

    //Reservamos el espacio para los arrays de nombres de empresas
    let nombreEmpresaGraph = [];
    let rentabilidadEmpresaGraph = [];
    let endeudamientoEmpresaGraph = [];
    let rotacionEmpresaGraph = [];
    let liquidezEmpresaGraph = [];
    
    //Guardamos los datos provenientes del JSON que estaba en memoria
    for (let empresa in datosJsonParaGrafica) {
        if (datosJsonParaGrafica.hasOwnProperty(empresa)) {
            nombreEmpresaGraph.push(empresa);
            rentabilidadEmpresaGraph.push((datosJsonParaGrafica[empresa].rentabilidad));
            endeudamientoEmpresaGraph.push(datosJsonParaGrafica[empresa].endeudamiento);
            rotacionEmpresaGraph.push(datosJsonParaGrafica[empresa].rotacion);
            liquidezEmpresaGraph.push(datosJsonParaGrafica[empresa].liquidez);
        }
    }

    localStorage.setItem("nombreEmpresaGraph", nombreEmpresaGraph);
    localStorage.setItem("rentabilidadEmpresaGraph", "[" + rentabilidadEmpresaGraph + "]");
    localStorage.setItem("endeudamientoEmpresaGraph", "[" + endeudamientoEmpresaGraph + "]");
    localStorage.setItem("rotacionEmpresaGraph", "[" + rotacionEmpresaGraph + "]");
    localStorage.setItem("liquidezEmpresaGraph", "[" + liquidezEmpresaGraph + "]");


    //Si quieres imprimir nombres hazlo asi
    let exampleNombres = localStorage.getItem('nombreEmpresaGraph').split(",");
    console.log(exampleNombres);

    //Si quieres imprimir numeros hazlo asi...
    console.log(JSON.parse(localStorage.getItem('endeudamientoEmpresaGraph')));
}



//Llamamos a la funcion para que guarde todo en memoria
guardarTodaLaDataEnArraysMemoria();