var dataRotacionEsp = localStorage.getItem('indicesSeparadosRotacion');
var dataRotacionEspOBJ = JSON.parse(dataRotacionEsp);
var labels = localStorage.getItem('nombreEmpresaGraph').split(",");

const radar_rotacion_esp = document.getElementById("radar_rotacion_esp");

const data_radar_rotacion_esp = {
  labels: labels,
  datasets: [
    {
      label: "Rotacion_de_activos_fijos",
      data: dataRotacionEspOBJ.rotacion_de_activos_fijos,
      fill: true,
      backgroundColor: backgroundColor_dinamico[6],
      borderColor: backgroundColor_dinamico[6],
      pointBackgroundColor: backgroundColor_dinamico[6],
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "Rotacion_de_activos_totales",
      data: dataRotacionEspOBJ.rotacion_de_activos_totales,
      fill: true,
      backgroundColor: backgroundColor_dinamico[4],
      borderColor: backgroundColor_dinamico[4],
      pointBackgroundColor: backgroundColor_dinamico[4],
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "Rotacion_de_cuentas_por_cobrar",
      data: dataRotacionEspOBJ.rotacion_de_cuentas_por_cobrar,
      fill: true,
      backgroundColor: backgroundColor_dinamico[2],
      borderColor: backgroundColor_dinamico[2],
      pointBackgroundColor: backgroundColor_dinamico[2],
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "Rotacion_de_inventarios",
      data: dataRotacionEspOBJ.rotacion_de_inventarios,
      fill: true,
      backgroundColor: backgroundColor_dinamico[2],
      borderColor: backgroundColor_dinamico[2],
      pointBackgroundColor: backgroundColor_dinamico[2],
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
  ],
};

new Chart(radar_rotacion_esp, {
  type: "radar",
  data: data_radar_rotacion_esp,
  options: {
    elements: {
      line: {
        borderWidth: 3,
      },
    },
  },
});
