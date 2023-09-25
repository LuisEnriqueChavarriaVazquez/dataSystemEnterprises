/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//Graficas

//Accedo a los datos en memoria
    // //Si quieres imprimir nombres hazlo asi
    // let exampleNombres = localStorage.getItem('nombreEmpresaGraph').split(",");
    // console.log(exampleNombres);

    // //Si quieres imprimir numeros hazlo asi...
    // console.log(JSON.parse(localStorage.getItem('endeudamientoEmpresaGraph')));

    var dataEndeudamientoEsp = localStorage.getItem('indicesSeparadosEndeudamiento');
    var dataEndeudamientoEspOBJ = JSON.parse(dataEndeudamientoEsp);
    var labels = localStorage.getItem('nombreEmpresaGraph').split(",");

//DONA Margen de utilidad
const pastel_razon_de_cobertura_de_interes = document.getElementById("pastel_razon_de_cobertura_de_interes");

const data_pastel_razon_de_cobertura_de_interes = {
  labels: labels,
  datasets: [{
    label: 'Razon_de_cobertura_de_interes',
    data: dataEndeudamientoEspOBJ.razon_de_cobertura_de_interes,
    backgroundColor: backgroundColor_dinamico,
    hoverOffset: 4
  }]
};

new Chart(pastel_razon_de_cobertura_de_interes, {
  type: 'pie',
  data: data_pastel_razon_de_cobertura_de_interes
});

//DONA Margen de utilidad
const pastel_apalancamiento_sobre_activo_total = document.getElementById("pastel_apalancamiento_sobre_activo_total");

const data_pastel_apalancamiento_sobre_activo_total = {
  labels: labels,
  datasets: [{
    label: 'apalancamiento_sobre_activo_total',
    data: dataEndeudamientoEspOBJ.apalancamiento_sobre_activo_total,
    backgroundColor: backgroundColor_dinamico,
    hoverOffset: 4
  }]
};

new Chart(pastel_apalancamiento_sobre_activo_total, {
  type: 'pie',
  data: data_pastel_apalancamiento_sobre_activo_total
});