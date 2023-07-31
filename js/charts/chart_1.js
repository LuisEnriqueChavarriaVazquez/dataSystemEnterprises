const chart_1 = document.getElementById("chart_1");

new Chart(chart_1, {
  type: "bar",
  data: {
    labels: ["Empresa 1", "Empresa 2", "Empresa 3", "Empresa 4", "Empresa 5", "Empresa 6"],
    datasets: [
      {
        label: "Puntos del ranking",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: backgroundColor_dinamico,
        borderColor: borderColor_dinamico,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
