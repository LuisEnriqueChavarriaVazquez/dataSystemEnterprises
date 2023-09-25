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

//Linea rentabilidad
const linea_rentabilidad = document.getElementById("linea_rentabilidad");

const labels_linea_rentabilidad = localStorage.getItem('nombreEmpresaGraph').split(",");
const data_linea_rentabilidad = {
  labels: labels_linea_rentabilidad,
  datasets: [{
    label: 'índice de rentabilidad',
    data: JSON.parse(localStorage.getItem('rentabilidadEmpresaGraph')),
    fill: false,
    borderColor: backgroundColor_dinamico[3],
    tension: 0.1
  }]
};

let linea_rentabilidad_OBJ = new Chart(linea_rentabilidad, {
  type: 'line',
  data: data_linea_rentabilidad,
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

//Linea endeudamiento
const linea_endeudamiento = document.getElementById("linea_endeudamiento");

const labels_linea_endeudamiento = localStorage.getItem('nombreEmpresaGraph').split(",");
const data_linea_endeudamiento = {
  labels: labels_linea_endeudamiento,
  datasets: [{
    label: 'índice de endeudamiento',
    data: JSON.parse(localStorage.getItem('endeudamientoEmpresaGraph')),
    fill: false,
    borderColor: backgroundColor_dinamico[3],
    tension: 0.1
  }]
};

let linea_endeudamiento_OBJ = new Chart(linea_endeudamiento, {
  type: 'line',
  data: data_linea_endeudamiento,
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

//Linea rotacion
const linea_rotacion = document.getElementById("linea_rotacion");

const labels_linea_rotacion = localStorage.getItem('nombreEmpresaGraph').split(",");
const data_linea_rotacion = {
  labels: labels_linea_rotacion,
  datasets: [{
    label: 'índice de rotacion',
    data: JSON.parse(localStorage.getItem('rotacionEmpresaGraph')),
    fill: false,
    borderColor: backgroundColor_dinamico[3],
    tension: 0.1
  }]
};

let linea_rotacion_OBJ = new Chart(linea_rotacion, {
  type: 'line',
  data: data_linea_rotacion,
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

//Linea liquidez
const linea_liquidez = document.getElementById("linea_liquidez");

const labels_linea_liquidez = localStorage.getItem('nombreEmpresaGraph').split(",");
const data_linea_liquidez = {
  labels: labels_linea_liquidez,
  datasets: [{
    label: 'índice de liquidez',
    data: JSON.parse(localStorage.getItem('liquidezEmpresaGraph')),
    fill: false,
    borderColor: backgroundColor_dinamico[3],
    tension: 0.1
  }]
};

let linea_liquidez_OBJ = new Chart(linea_liquidez, {
  type: 'line',
  data: data_linea_liquidez,
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

