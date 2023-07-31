const chart_7 = document.getElementById("chart_7");

const labels = ["Empresa 1", "Empresa 2", "Empresa 3", "Empresa 4", "Empresa 5", "Empresa 6", "Empresa 7"];
const data_chart_7 = {
  labels: labels,
  datasets: [{
    axis: 'y',
    label: 'Datos del índice',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: true,
    backgroundColor: backgroundColor_dinamico,
    borderColor: borderColor_dinamico,
    borderWidth: 1
  }]
};

new Chart(chart_7, {
  type: 'bar',
  data: data_chart_7,
  options: {
    indexAxis: 'y',
  }
});
