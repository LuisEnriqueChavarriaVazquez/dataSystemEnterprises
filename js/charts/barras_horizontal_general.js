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

//BARRAS HORIZONTAL RENTABILIDAD
const barras_rentabilidad = document.getElementById("barras_rentabilidad");

var labels = localStorage.getItem('nombreEmpresaGraph').split(",");
const data_barras_rentabilidad = {
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

new Chart(barras_rentabilidad, {
  type: 'bar',
  data: data_barras_rentabilidad,
  options: {
    indexAxis: 'y',
  }
});

//BARRAS HORIZONTAL ENDEUDAMIENTO
const barras_endeudamiento = document.getElementById("barras_endeudamiento");

var labels = localStorage.getItem('nombreEmpresaGraph').split(",");
const data_barras_endeudamiento = {
  labels: labels,
  datasets: [{
    axis: 'y',
    label: 'índice de endeudamiento',
    data: JSON.parse(localStorage.getItem('endeudamientoEmpresaGraph')),
    fill: true,
    backgroundColor: backgroundColor_dinamico,
    borderColor: borderColor_dinamico,
    borderWidth: 1
  }]
};

new Chart(barras_endeudamiento, {
  type: 'bar',
  data: data_barras_endeudamiento,
  options: {
    indexAxis: 'y',
  }
});

//BARRAS HORIZONTAL ROTACION
const barras_rotacion = document.getElementById("barras_rotacion");

var labels = localStorage.getItem('nombreEmpresaGraph').split(",");
const data_barras_rotacion = {
  labels: labels,
  datasets: [{
    axis: 'y',
    label: 'índice de rotación',
    data: JSON.parse(localStorage.getItem('rotacionEmpresaGraph')),
    fill: true,
    backgroundColor: backgroundColor_dinamico,
    borderColor: borderColor_dinamico,
    borderWidth: 1
  }]
};

new Chart(barras_rotacion, {
  type: 'bar',
  data: data_barras_rotacion,
  options: {
    indexAxis: 'y',
  }
});

//BARRAS HORIZONTAL LIQUIDEZ
const barras_liquidez = document.getElementById("barras_liquidez");

var labels = localStorage.getItem('nombreEmpresaGraph').split(",");
const data_barras_liquidez = {
  labels: labels,
  datasets: [{
    axis: 'y',
    label: 'índice de liquidez',
    data: JSON.parse(localStorage.getItem('liquidezEmpresaGraph')),
    fill: true,
    backgroundColor: backgroundColor_dinamico,
    borderColor: borderColor_dinamico,
    borderWidth: 1
  }]
};

new Chart(barras_liquidez, {
  type: 'bar',
  data: data_barras_liquidez,
  options: {
    indexAxis: 'y',
  }
});
