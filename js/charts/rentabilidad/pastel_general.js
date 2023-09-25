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

//Pastel rentabilidad
const pastel_margen_de_utilidad = document.getElementById("pastel_margen_de_utilidad");

const data_pastel_margen_de_utilidad = {
  labels: labels,
  datasets: [{
    label: 'Margen de utilidad',
    data: dataRentabilidadEspOBJ.margen_de_utilidad,
    backgroundColor: backgroundColor_dinamico,
    hoverOffset: 4
  }]
};

new Chart(pastel_margen_de_utilidad, {
  type: 'pie',
  data: data_pastel_margen_de_utilidad
});

//Pastel endeudamiento
const pastel_rendimientos_sobre_activos_totales = document.getElementById("pastel_rendimientos_sobre_activos_totales");

const data_pastel_rendimientos_sobre_activos_totales = {
  labels: labels,
  datasets: [{
    label: 'Rendimientos sobre activos totales',
    data: dataRentabilidadEspOBJ.rendimientos_sobre_activos_totales,
    backgroundColor: backgroundColor_dinamico,
    hoverOffset: 4
  }]
};

new Chart(pastel_rendimientos_sobre_activos_totales, {
  type: 'pie',
  data: data_pastel_rendimientos_sobre_activos_totales
});

//Pastel rotacion
const pastel_rendimientos_sobre_capital_contable = document.getElementById("pastel_rendimientos_sobre_capital_contable");

const data_pastel_rendimientos_sobre_capital_contable = {
  labels: labels,
  datasets: [{
    label: 'Rendimientos sobre capital contable',
    data: dataRentabilidadEspOBJ.rendimientos_sobre_capital_contable,
    backgroundColor: backgroundColor_dinamico,
    hoverOffset: 4
  }]
};

new Chart(pastel_rendimientos_sobre_capital_contable, {
  type: 'pie',
  data: data_pastel_rendimientos_sobre_capital_contable
})