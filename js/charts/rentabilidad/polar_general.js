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

//Polar rentabilidad
const polar_margen_de_utilidad = document.getElementById("polar_margen_de_utilidad");

const data_polar_margen_de_utilidad = {
  labels: labels,
  datasets: [
    {
      label: "Margen de utilidad",
      data: dataRentabilidadEspOBJ.margen_de_utilidad,
      backgroundColor: backgroundColor_dinamico,
    },
  ],
};

new Chart(polar_margen_de_utilidad, {
  type: "polarArea",
  data: data_polar_margen_de_utilidad,
  options: {},
});

//Polar rentabilidad
const polar_rendimientos_sobre_activos_totales = document.getElementById("polar_rendimientos_sobre_activos_totales");

const data_polar_rendimientos_sobre_activos_totales = {
  labels: labels,
  datasets: [
    {
      label: "Rendimientos sobre activos totales",
      data: dataRentabilidadEspOBJ.rendimientos_sobre_activos_totales,
      backgroundColor: backgroundColor_dinamico,
    },
  ],
};

new Chart(polar_rendimientos_sobre_activos_totales, {
  type: "polarArea",
  data: data_polar_rendimientos_sobre_activos_totales,
  options: {},
});

//Polar rentabilidad
const polar_rendimientos_sobre_capital_contable = document.getElementById("polar_rendimientos_sobre_capital_contable");

const data_polar_rendimientos_sobre_capital_contable = {
  labels: labels,
  datasets: [
    {
      label: "Rendimientos sobre capital contable",
      data: dataRentabilidadEspOBJ.rendimientos_sobre_capital_contable,
      backgroundColor: backgroundColor_dinamico,
    },
  ],
};

new Chart(polar_rendimientos_sobre_capital_contable, {
  type: "polarArea",
  data: data_polar_rendimientos_sobre_capital_contable,
  options: {},
});

