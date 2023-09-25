const radar_general = document.getElementById("radar_general");

const data_radar_general = {
  labels: localStorage.getItem('nombreEmpresaGraph').split(","),
  datasets: [
    {
      label: "Rentabilidad",
      data: JSON.parse(localStorage.getItem('rentabilidadEmpresaGraph')),
      fill: true,
      backgroundColor: backgroundColor_dinamico[6],
      borderColor: backgroundColor_dinamico[6],
      pointBackgroundColor: backgroundColor_dinamico[6],
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "Endeudamiento",
      data: JSON.parse(localStorage.getItem('endeudamientoEmpresaGraph')),
      fill: true,
      backgroundColor: backgroundColor_dinamico[4],
      borderColor: backgroundColor_dinamico[4],
      pointBackgroundColor: backgroundColor_dinamico[4],
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "Rotación",
      data: JSON.parse(localStorage.getItem('rotacionEmpresaGraph')),
      fill: true,
      backgroundColor: backgroundColor_dinamico[2],
      borderColor: backgroundColor_dinamico[2],
      pointBackgroundColor: backgroundColor_dinamico[2],
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "Liquidez",
      data: JSON.parse(localStorage.getItem('liquidezEmpresaGraph')),
      fill: true,
      backgroundColor: backgroundColor_dinamico[0],
      borderColor: backgroundColor_dinamico[0],
      pointBackgroundColor: backgroundColor_dinamico[0],
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
  ],
};

new Chart(radar_general, {
  type: "radar",
  data: data_radar_general,
  options: {
    elements: {
      line: {
        borderWidth: 3,
      },
    },
  },
});
