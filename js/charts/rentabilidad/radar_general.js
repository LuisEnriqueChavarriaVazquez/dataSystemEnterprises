var dataRentabilidadEsp = localStorage.getItem('indicesSeparadosRentabilidad');
var dataRentabilidadEspOBJ = JSON.parse(dataRentabilidadEsp);
var labels = localStorage.getItem('nombreEmpresaGraph').split(",");

const radar_rentabilidad_esp = document.getElementById("radar_rentabilidad_esp");

const data_radar_rentabilidad_esp = {
  labels: labels,
  datasets: [
    {
      label: "Margen_de_utilidad",
      data: dataRentabilidadEspOBJ.margen_de_utilidad,
      fill: true,
      backgroundColor: backgroundColor_dinamico[6],
      borderColor: backgroundColor_dinamico[6],
      pointBackgroundColor: backgroundColor_dinamico[6],
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "Rendimientos_sobre_activos_totales",
      data: dataRentabilidadEspOBJ.rendimientos_sobre_activos_totales,
      fill: true,
      backgroundColor: backgroundColor_dinamico[4],
      borderColor: backgroundColor_dinamico[4],
      pointBackgroundColor: backgroundColor_dinamico[4],
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "Rendimientos_sobre_capital_contable",
      data: dataRentabilidadEspOBJ.rendimientos_sobre_capital_contable,
      fill: true,
      backgroundColor: backgroundColor_dinamico[2],
      borderColor: backgroundColor_dinamico[2],
      pointBackgroundColor: backgroundColor_dinamico[2],
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
  ],
};

new Chart(radar_rentabilidad_esp, {
  type: "radar",
  data: data_radar_rentabilidad_esp,
  options: {
    elements: {
      line: {
        borderWidth: 3,
      },
    },
  },
});
