const chart_6 = document.getElementById("chart_6");

const data_chart_6 = {
  labels: [
    "Índice 1",
    "Índice 2",
    "Índice 3",
    "Índice 4",
    "Índice 5",
    "Índice 6",
    "Índice 7",
  ],
  datasets: [
    {
      label: "Empresa 1",
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: backgroundColor_dinamico[2],
      borderColor: backgroundColor_dinamico[3],
      pointBackgroundColor: backgroundColor_dinamico[3],
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "Empresa 2",
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: backgroundColor_dinamico[4],
      borderColor: backgroundColor_dinamico[5],
      pointBackgroundColor: backgroundColor_dinamico[5],
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(54, 162, 235)",
    },
  ],
};

new Chart(chart_6, {
  type: "radar",
  data: data_chart_6,
  options: {
    elements: {
      line: {
        borderWidth: 3,
      },
    },
  },
});
