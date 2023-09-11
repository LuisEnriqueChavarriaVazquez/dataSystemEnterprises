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

//Pastel rentabilidad
const pastel_rentabilidad = document.getElementById("pastel_rentabilidad");

const data_pastel_rentabilidad = {
  labels: localStorage.getItem('nombreEmpresaGraph').split(","),
  datasets: [{
    label: 'índice de rentabilidad',
    data: JSON.parse(localStorage.getItem('rentabilidadEmpresaGraph')),
    backgroundColor: backgroundColor_dinamico,
    hoverOffset: 4
  }]
};

new Chart(pastel_rentabilidad, {
  type: 'pie',
  data: data_pastel_rentabilidad
});

//Pastel endeudamiento
const pastel_endeudamiento = document.getElementById("pastel_endeudamiento");

const data_pastel_endeudamiento = {
  labels: localStorage.getItem('nombreEmpresaGraph').split(","),
  datasets: [{
    label: 'índice de endeudamiento',
    data: JSON.parse(localStorage.getItem('endeudamientoEmpresaGraph')),
    backgroundColor: backgroundColor_dinamico,
    hoverOffset: 4
  }]
};

new Chart(pastel_endeudamiento, {
  type: 'pie',
  data: data_pastel_endeudamiento
});

//Pastel rotacion
const pastel_rotacion = document.getElementById("pastel_rotacion");

const data_pastel_rotacion = {
  labels: localStorage.getItem('nombreEmpresaGraph').split(","),
  datasets: [{
    label: 'índice de rotación',
    data: JSON.parse(localStorage.getItem('rotacionEmpresaGraph')),
    backgroundColor: backgroundColor_dinamico,
    hoverOffset: 4
  }]
};

new Chart(pastel_rotacion, {
  type: 'pie',
  data: data_pastel_rotacion
});

//Pastel liquidez
const pastel_liquidez = document.getElementById("pastel_liquidez");

const data_pastel_liquidez = {
  labels: localStorage.getItem('nombreEmpresaGraph').split(","),
  datasets: [{
    label: 'índice de liquidez',
    data: JSON.parse(localStorage.getItem('liquidezEmpresaGraph')),
    backgroundColor: backgroundColor_dinamico,
    hoverOffset: 4
  }]
};

new Chart(pastel_liquidez, {
  type: 'pie',
  data: data_pastel_liquidez
});