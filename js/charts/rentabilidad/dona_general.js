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

    var dataRentabilidadEsp = localStorage.getItem('indicesSeparadosRentabilidad');
    var dataRentabilidadEspOBJ = JSON.parse(dataRentabilidadEsp);
    var labels = localStorage.getItem('nombreEmpresaGraph').split(",");

//DONA Margen de utilidad
const dona_margen_de_utilidad = document.getElementById("dona_margen_de_utilidad");

const data_dona_margen_de_utilidad = {
  labels: localStorage.getItem('nombreEmpresaGraph').split(","),
  datasets: [{
    label: 'Margen de utilidad',
    data: dataRentabilidadEspOBJ.margen_de_utilidad,
    backgroundColor: backgroundColor_dinamico,
    hoverOffset: 4
  }]
};

new Chart(dona_margen_de_utilidad, {
  type: 'doughnut',
  data: data_dona_margen_de_utilidad
});

//DONA rendimientos_sobre_activos_totales
const dona_rendimientos_sobre_activos_totales = document.getElementById("dona_rendimientos_sobre_activos_totales");

const data_dona_rendimientos_sobre_activos_totales = {
  labels: localStorage.getItem('nombreEmpresaGraph').split(","),
  datasets: [{
    label: 'Rendimientos sobre activos totales',
    data: dataRentabilidadEspOBJ.rendimientos_sobre_activos_totales,
    backgroundColor: backgroundColor_dinamico,
    hoverOffset: 4
  }]
};

new Chart(dona_rendimientos_sobre_activos_totales, {
  type: 'doughnut',
  data: data_dona_rendimientos_sobre_activos_totales
});

//DONA rendimientos_sobre_capital_contable
const dona_rendimientos_sobre_capital_contable = document.getElementById("dona_rendimientos_sobre_capital_contable");

const data_dona_rendimientos_sobre_capital_contable = {
  labels: localStorage.getItem('nombreEmpresaGraph').split(","),
  datasets: [{
    label: 'Margen de utilidad',
    data: dataRentabilidadEspOBJ.rendimientos_sobre_capital_contable,
    backgroundColor: backgroundColor_dinamico,
    hoverOffset: 4
  }]
};

new Chart(dona_rendimientos_sobre_capital_contable, {
  type: 'doughnut',
  data: data_dona_rendimientos_sobre_capital_contable
});
