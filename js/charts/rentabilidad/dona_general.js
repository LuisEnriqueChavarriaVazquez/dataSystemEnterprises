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

//DONA RENTABILIDAD
const dona_rentabilidad = document.getElementById("dona_rentabilidad");

const data_dona_rentabilidad = {
  labels: localStorage.getItem('nombreEmpresaGraph').split(","),
  datasets: [{
    label: 'índice de rentabilidad',
    data: JSON.parse(localStorage.getItem('rentabilidadEmpresaGraph')),
    backgroundColor: backgroundColor_dinamico,
    hoverOffset: 4
  }]
};

new Chart(dona_rentabilidad, {
  type: 'doughnut',
  data: data_dona_rentabilidad
});

//DONA ENDEUDAMIENTO
const dona_endeudamiento = document.getElementById("dona_endeudamiento");

const data_dona_endeudamiento = {
  labels: localStorage.getItem('nombreEmpresaGraph').split(","),
  datasets: [{
    label: 'índice de endeudamiento',
    data: JSON.parse(localStorage.getItem('endeudamientoEmpresaGraph')),
    backgroundColor: backgroundColor_dinamico,
    hoverOffset: 4
  }]
};

new Chart(dona_endeudamiento, {
  type: 'doughnut',
  data: data_dona_endeudamiento
});

//DONA rotacion
const dona_rotacion = document.getElementById("dona_rotacion");

const data_dona_rotacion = {
  labels: localStorage.getItem('nombreEmpresaGraph').split(","),
  datasets: [{
    label: 'índice de rotación',
    data: JSON.parse(localStorage.getItem('rotacionEmpresaGraph')),
    backgroundColor: backgroundColor_dinamico,
    hoverOffset: 4
  }]
};

new Chart(dona_rotacion, {
  type: 'doughnut',
  data: data_dona_rotacion
});

//DONA Liquidez
const dona_liquidez = document.getElementById("dona_liquidez");

const data_dona_liquidez = {
  labels: localStorage.getItem('nombreEmpresaGraph').split(","),
  datasets: [{
    label: 'índice de liquidez',
    data: JSON.parse(localStorage.getItem('liquidezEmpresaGraph')),
    backgroundColor: backgroundColor_dinamico,
    hoverOffset: 4
  }]
};

new Chart(dona_liquidez, {
  type: 'doughnut',
  data: data_dona_liquidez
});
