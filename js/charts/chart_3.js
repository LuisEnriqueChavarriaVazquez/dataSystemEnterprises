const chart_3 = document.getElementById("chart_3");

const data_chart_3 = {
  labels: [
    'Empresa 1',
    'Empresa 2',
    'Empresa 3'
  ],
  datasets: [{
    label: 'Datos de la empresa',
    data: [300, 50, 100],
    backgroundColor: backgroundColor_dinamico,
    hoverOffset: 4
  }]
};

new Chart(chart_3, {
  type: 'pie',
  data: data_chart_3
});

