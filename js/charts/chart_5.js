const chart_5 = document.getElementById("chart_5");

const data_chart_5 = {
  labels: ["Empresa 1", "Empresa 2", "Empresa 3", "Empresa 4", "Empresa 5"],
  datasets: [
    {
      label: "Datos de las empresas",
      data: [11, 16, 7, 3, 14],
      backgroundColor: backgroundColor_dinamico,
    },
  ],
};

new Chart(chart_5, {
  type: "polarArea",
  data: data_chart_5,
  options: {},
});
