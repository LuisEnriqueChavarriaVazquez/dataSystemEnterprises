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
    const tipoGrafico = dataLiquidezEsp.length > 7 ? 'bar' : 'bar';

//BARRAS margen_de_utilidad
const capital_de_trabajo = document.getElementById("barras_capital_de_trabajo");

const data_capital_de_trabajo = {
  labels: labels,
  datasets: [{
    axis: tipoGrafico === 'line' ? 'x' : 'y',
    label: 'Capital_de_trabajo',
    data: dataLiquidezEspOBJ.capital_de_trabajo,
    fill: true,
    backgroundColor: backgroundColor_dinamico,
    borderColor: borderColor_dinamico,
    borderWidth: 1
  }]
};

let capital_de_trabajo_OBJ = new Chart(capital_de_trabajo, {
  type: tipoGrafico,
  data: data_capital_de_trabajo,
  options: {
    indexAxis: tipoGrafico === 'line' ? 'x' : 'y',
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

//BARRAS margen_de_utilidad
const capital_operativo = document.getElementById("barras_capital_operativo");

const data_capital_operativo = {
  labels: labels,
  datasets: [{
    axis: tipoGrafico === 'line' ? 'x' : 'y',
    label: 'Capital_operativo',
    data: dataLiquidezEspOBJ.capital_operativo,
    fill: true,
    backgroundColor: backgroundColor_dinamico,
    borderColor: borderColor_dinamico,
    borderWidth: 1
  }]
};

let capital_operativo_OBJ = new Chart(capital_operativo, {
  type: tipoGrafico,
  data: data_capital_operativo,
  options: {
    indexAxis: tipoGrafico === 'line' ? 'x' : 'y',
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

//BARRAS margen_de_utilidad
const prueba_del_acido = document.getElementById("barras_prueba_del_acido");

const data_prueba_del_acido = {
  labels: labels,
  datasets: [{
    axis: tipoGrafico === 'line' ? 'x' : 'y',
    label: 'Prueba_del_acido',
    data: dataLiquidezEspOBJ.prueba_del_acido,
    fill: true,
    backgroundColor: backgroundColor_dinamico,
    borderColor: borderColor_dinamico,
    borderWidth: 1
  }]
};

let prueba_del_acido_OBJ = new Chart(prueba_del_acido, {
  type: tipoGrafico,
  data: data_prueba_del_acido,
  options: {
    indexAxis: tipoGrafico === 'line' ? 'x' : 'y',
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

//BARRAS margen_de_utilidad
const razon_de_liquidez = document.getElementById("barras_razon_de_liquidez");

const data_razon_de_liquidez = {
  labels: labels,
  datasets: [{
    axis: tipoGrafico === 'line' ? 'x' : 'y',
    label: 'Razon_de_liquidez',
    data: dataLiquidezEspOBJ.razon_de_liquidez,
    fill: true,
    backgroundColor: backgroundColor_dinamico,
    borderColor: borderColor_dinamico,
    borderWidth: 1
  }]
};

let razon_de_liquidez_OBJ = new Chart(razon_de_liquidez, {
  type: tipoGrafico,
  data: data_razon_de_liquidez,
  options: {
    indexAxis: tipoGrafico === 'line' ? 'x' : 'y',
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

