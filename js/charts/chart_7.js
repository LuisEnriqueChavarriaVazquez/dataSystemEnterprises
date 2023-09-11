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

const chart_7 = document.getElementById("chart_7");

const labels = localStorage.getItem('nombreEmpresaGraph').split(",");
const data_chart_7 = {
  labels: labels,
  datasets: [{
    axis: 'y',
    label: 'índice de rentabilidad',
    data: JSON.parse(localStorage.getItem('rentabilidadEmpresaGraph')),
    fill: true,
    backgroundColor: backgroundColor_dinamico,
    borderColor: borderColor_dinamico,
    borderWidth: 1
  }]
};

new Chart(chart_7, {
  type: 'bar',
  data: data_chart_7,
  options: {
    indexAxis: 'y',
  }
});
