const chart_4 = document.getElementById("chart_4");

const labels_chart_4 = ["Julio", "Junio", "Mayo", "Abril", "Marzo", "Febrero", "Enero"];
const data_chart_4 = {
  labels: labels_chart_4,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

new Chart(chart_4, {
  type: 'line',
  data: data_chart_4
});

