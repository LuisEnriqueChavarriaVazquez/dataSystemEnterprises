var dataEndeudamientoEsp = localStorage.getItem('indicesSeparadosEndeudamiento');
var dataEndeudamientoEspOBJ = JSON.parse(dataEndeudamientoEsp);
var labels = localStorage.getItem('nombreEmpresaGraph').split(",");

const radar_endeudamiento_esp = document.getElementById("radar_endeudamiento_esp");

const data_radar_endeudamiento_esp = {
  labels: labels,
  datasets: [
    {
      label: "Razon_de_cobertura_de_interes",
      data: dataEndeudamientoEspOBJ.razon_de_cobertura_de_interes,
      fill: true,
      backgroundColor: backgroundColor_dinamico[6],
      borderColor: backgroundColor_dinamico[6],
      pointBackgroundColor: backgroundColor_dinamico[6],
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "Apalancamiento_sobre_activo_total",
      data: dataEndeudamientoEspOBJ.apalancamiento_sobre_activo_total,
      fill: true,
      backgroundColor: backgroundColor_dinamico[4],
      borderColor: backgroundColor_dinamico[4],
      pointBackgroundColor: backgroundColor_dinamico[4],
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
  ],
};

new Chart(radar_endeudamiento_esp, {
  type: "radar",
  data: data_radar_endeudamiento_esp,
  options: {
    elements: {
      line: {
        borderWidth: 3,
      },
    },
  },
});
