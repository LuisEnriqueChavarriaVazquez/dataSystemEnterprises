const chart_4 = document.getElementById("chart_4");

const labels_chart_4 = ["Julio", "Junio", "Mayo", "Abril", "Marzo", "Febrero", "Enero"];
const data_chart_4 = {
  labels: labels_chart_4,
  datasets: [{
    label: 'Datos de la empresa 1',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: backgroundColor_dinamico[3],
    tension: 0.1
  }]
};

new Chart(chart_4, {
  type: 'line',
  data: data_chart_4
});

