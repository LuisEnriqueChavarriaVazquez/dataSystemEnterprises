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

    var labels = localStorage.getItem('nombreEmpresaGraph').split(",");
    const tipoGrafico = labels.length > 8 ? 'line' : 'bar';

//BARRAS HORIZONTAL RENTABILIDAD
const barras_rentabilidad = document.getElementById("barras_rentabilidad");

const data_barras_rentabilidad = {
  labels: labels,
  datasets: [{
    axis: tipoGrafico === 'line' ? 'x' : 'y',
    label: 'índice de rentabilidad',
    data: JSON.parse(localStorage.getItem('rentabilidadEmpresaGraph')),
    fill: true,
    backgroundColor: backgroundColor_dinamico,
    borderColor: borderColor_dinamico,
    borderWidth: 1
  }]
};

let barras_rentabilidad_OBJ = new Chart(barras_rentabilidad, {
  type: tipoGrafico,
  data: data_barras_rentabilidad,
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

//BARRAS HORIZONTAL ENDEUDAMIENTO
const barras_endeudamiento = document.getElementById("barras_endeudamiento");

const data_barras_endeudamiento = {
  labels: labels,
  datasets: [{
    axis:tipoGrafico === 'line' ? 'x' : 'y',
    label: 'índice de endeudamiento',
    data: JSON.parse(localStorage.getItem('endeudamientoEmpresaGraph')),
    fill: true,
    backgroundColor: backgroundColor_dinamico,
    borderColor: borderColor_dinamico,
    borderWidth: 1
  }]
};

let barras_endeudamiento_OBJ = new Chart(barras_endeudamiento, {
  type: tipoGrafico,
  data: data_barras_endeudamiento,
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

//BARRAS HORIZONTAL ROTACION
const barras_rotacion = document.getElementById("barras_rotacion");

const data_barras_rotacion = {
  labels: labels,
  datasets: [{
    axis:tipoGrafico === 'line' ? 'x' : 'y',
    label: 'índice de rotación',
    data: JSON.parse(localStorage.getItem('rotacionEmpresaGraph')),
    fill: true,
    backgroundColor: backgroundColor_dinamico,
    borderColor: borderColor_dinamico,
    borderWidth: 1
  }]
};

let barras_rotacion_OBJ = new Chart(barras_rotacion, {
  type:tipoGrafico,
  data: data_barras_rotacion,
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

//BARRAS HORIZONTAL LIQUIDEZ
const barras_liquidez = document.getElementById("barras_liquidez");

const data_barras_liquidez = {
  labels: labels,
  datasets: [{
    axis: tipoGrafico === 'line' ? 'x' : 'y',
    label: 'índice de liquidez',
    data: JSON.parse(localStorage.getItem('liquidezEmpresaGraph')),
    fill: true,
    backgroundColor: backgroundColor_dinamico,
    borderColor: borderColor_dinamico,
    borderWidth: 1
  }]
};

let barras_liquidez_OBJ = new Chart(barras_liquidez, {
  type: tipoGrafico,
  data: data_barras_liquidez,
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
