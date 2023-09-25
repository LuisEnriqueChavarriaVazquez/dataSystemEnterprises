var dataLiquidezEsp = localStorage.getItem('indicesSeparadosLiquidez');
var dataLiquidezEspOBJ = JSON.parse(dataLiquidezEsp);
var labels = localStorage.getItem('nombreEmpresaGraph').split(",");

const radar_liquidez_esp = document.getElementById("radar_liquidez_esp");

const data_radar_liquidez_esp = {
  labels: labels,
  datasets: [
    {
      label: "Capital_de_trabajo",
      data: dataLiquidezEspOBJ.capital_de_trabajo,
      fill: true,
      backgroundColor: backgroundColor_dinamico[6],
      borderColor: backgroundColor_dinamico[6],
      pointBackgroundColor: backgroundColor_dinamico[6],
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "Capital_operativo",
      data: dataLiquidezEspOBJ.capital_operativo,
      fill: true,
      backgroundColor: backgroundColor_dinamico[4],
      borderColor: backgroundColor_dinamico[4],
      pointBackgroundColor: backgroundColor_dinamico[4],
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "Prueba_del_acido",
      data: dataLiquidezEspOBJ.prueba_del_acido,
      fill: true,
      backgroundColor: backgroundColor_dinamico[2],
      borderColor: backgroundColor_dinamico[2],
      pointBackgroundColor: backgroundColor_dinamico[2],
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "Razon_de_liquidez",
      data: dataLiquidezEspOBJ.razon_de_liquidez,
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

new Chart(radar_liquidez_esp, {
  type: "radar",
  data: data_radar_liquidez_esp,
  options: {
    elements: {
      line: {
        borderWidth: 3,
      },
    },
  },
});
