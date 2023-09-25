/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//Graficas

//Accedo a los datos en memoria
    // //Si quieres imprimir nombres hazlo asi
    // let exampleNombres = localStorage.getItem('nombreEmpresaGraph').split(",");
    // console.log(exampleNombres);

    // //Si quieres imprimir numeros hazlo asi...
    // console.log(JSON.parse(localStorage.getItem('endeudamientoEmpresaGraph')));

    var dataLiquidezEsp = localStorage.getItem('indicesSeparadosLiquidez');
    var dataLiquidezEspOBJ = JSON.parse(dataLiquidezEsp);
    var labels = localStorage.getItem('nombreEmpresaGraph').split(",");

//Linea capital_de_trabajo
const linea_capital_de_trabajo = document.getElementById("linea_capital_de_trabajo");

const data_linea_capital_de_trabajo = {
  labels: labels,
  datasets: [{
    label: 'Capital_de_trabajo',
    data: dataLiquidezEspOBJ.capital_de_trabajo,
    fill: false,
    borderColor: backgroundColor_dinamico[3],
    tension: 0.1
  }]
};

let linea_capital_de_trabajo_OBJ = new Chart(linea_capital_de_trabajo, {
  type: 'line',
  data: data_linea_capital_de_trabajo,
  options: {
    plugins: {
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true
          },
          mode: 'xy',
        }
      }
    }
  }
});

//Linea capital_operativo
const linea_capital_operativo = document.getElementById("linea_capital_operativo");

const data_linea_capital_operativo = {
  labels: labels,
  datasets: [{
    label: 'Capital_operativo',
    data: dataLiquidezEspOBJ.capital_operativo,
    fill: false,
    borderColor: backgroundColor_dinamico[3],
    tension: 0.1
  }]
};

let linea_capital_operativo_OBJ = new Chart(linea_capital_operativo, {
  type: 'line',
  data: data_linea_capital_operativo,
  options: {
    plugins: {
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true
          },
          mode: 'xy',
        }
      }
    }
  }
});

//Linea prueba_del_acido
const linea_prueba_del_acido = document.getElementById("linea_prueba_del_acido");

const data_linea_prueba_del_acido = {
  labels: labels,
  datasets: [{
    label: 'prueba_del_acido',
    data: dataLiquidezEspOBJ.prueba_del_acido,
    fill: false,
    borderColor: backgroundColor_dinamico[3],
    tension: 0.1
  }]
};

let linea_prueba_del_acido_OBJ = new Chart(linea_prueba_del_acido, {
  type: 'line',
  data: data_linea_prueba_del_acido,
  options: {
    plugins: {
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true
          },
          mode: 'xy',
        }
      }
    }
  }
});

//Linea razon_de_liquidez
const linea_razon_de_liquidez = document.getElementById("linea_razon_de_liquidez");

const data_linea_razon_de_liquidez = {
  labels: labels,
  datasets: [{
    label: 'razon_de_liquidez',
    data: dataLiquidezEspOBJ.razon_de_liquidez,
    fill: false,
    borderColor: backgroundColor_dinamico[3],
    tension: 0.1
  }]
};

let linea_razon_de_liquidez_OBJ = new Chart(linea_razon_de_liquidez, {
  type: 'line',
  data: data_linea_razon_de_liquidez,
  options: {
    plugins: {
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true
          },
          mode: 'xy',
        }
      }
    }
  }
});