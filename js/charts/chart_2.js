const chart_2 = document.getElementById("chart_2");

const data_chart_2 = {
  labels: [
    'Empresa 1',
    'Empresa 2',
    'Empresa 3'
  ],
  datasets: [{
    label: 'Datos del ranking',
    data: [300, 50, 100],
    backgroundColor: backgroundColor_dinamico,
    hoverOffset: 4
  }]
};

new Chart(chart_2, {
  type: 'doughnut',
  data: data_chart_2
});

