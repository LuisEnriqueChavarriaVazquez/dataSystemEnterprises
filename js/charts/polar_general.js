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

//Polar rentabilidad
const polar_rentabilidad = document.getElementById("polar_rentabilidad");

const data_polar_rentabilidad = {
  labels: localStorage.getItem('nombreEmpresaGraph').split(","),
  datasets: [
    {
      label: "índice de rentabilidad",
      data: JSON.parse(localStorage.getItem('rentabilidadEmpresaGraph')),
      backgroundColor: backgroundColor_dinamico,
    },
  ],
};

new Chart(polar_rentabilidad, {
  type: "polarArea",
  data: data_polar_rentabilidad,
  options: {},
});

//Polar endeudamiento
const polar_endeudamiento = document.getElementById("polar_endeudamiento");

const data_polar_endeudamiento = {
  labels: localStorage.getItem('nombreEmpresaGraph').split(","),
  datasets: [
    {
      label: "índice de endeudamiento",
      data: JSON.parse(localStorage.getItem('endeudamientoEmpresaGraph')),
      backgroundColor: backgroundColor_dinamico,
    },
  ],
};

new Chart(polar_endeudamiento, {
  type: "polarArea",
  data: data_polar_endeudamiento,
  options: {},
});

//Polar rotacion
const polar_rotacion = document.getElementById("polar_rotacion");

const data_polar_rotacion = {
  labels: localStorage.getItem('nombreEmpresaGraph').split(","),
  datasets: [
    {
      label: "índice de rotación",
      data: JSON.parse(localStorage.getItem('rotacionEmpresaGraph')),
      backgroundColor: backgroundColor_dinamico,
    },
  ],
};

new Chart(polar_rotacion, {
  type: "polarArea",
  data: data_polar_rotacion,
  options: {},
});

//Polar liquidez
const polar_liquidez = document.getElementById("polar_liquidez");

const data_polar_liquidez = {
  labels: localStorage.getItem('nombreEmpresaGraph').split(","),
  datasets: [
    {
      label: "índice de liquidez",
      data: JSON.parse(localStorage.getItem('liquidezEmpresaGraph')),
      backgroundColor: backgroundColor_dinamico,
    },
  ],
};

new Chart(polar_liquidez, {
  type: "polarArea",
  data: data_polar_liquidez,
  options: {},
});


