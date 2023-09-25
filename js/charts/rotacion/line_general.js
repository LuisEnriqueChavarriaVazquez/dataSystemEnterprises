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

    var dataRotacionEsp = localStorage.getItem('indicesSeparadosRotacion');
    var dataRotacionEspOBJ = JSON.parse(dataRotacionEsp);
    var labels = localStorage.getItem('nombreEmpresaGraph').split(",");

//Linea rotacion_de_activos_fijos
const linea_rotacion_de_activos_fijos = document.getElementById("linea_rotacion_de_activos_fijos");

const data_linea_rotacion_de_activos_fijos = {
  labels: labels,
  datasets: [{
    label: 'Rotacion_de_activos_fijos',
    data: dataRotacionEspOBJ.rotacion_de_activos_fijos,
    fill: false,
    borderColor: backgroundColor_dinamico[3],
    tension: 0.1
  }]
};

let linea_rotacion_de_activos_fijos_OBJ = new Chart(linea_rotacion_de_activos_fijos, {
  type: 'line',
  data: data_linea_rotacion_de_activos_fijos,
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

//Linea rotacion_de_activos_fijos
const linea_rotacion_de_activos_totales = document.getElementById("linea_rotacion_de_activos_totales");

const data_linea_rotacion_de_activos_totales = {
  labels: labels,
  datasets: [{
    label: 'Rotacion_de_activos_totales',
    data: dataRotacionEspOBJ.rotacion_de_activos_totales,
    fill: false,
    borderColor: backgroundColor_dinamico[3],
    tension: 0.1
  }]
};

let linea_rotacion_de_activos_totales_OBJ = new Chart(linea_rotacion_de_activos_totales, {
  type: 'line',
  data: data_linea_rotacion_de_activos_totales,
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

//Linea rotacion_de_activos_fijos
const linea_rotacion_de_cuentas_por_cobrar = document.getElementById("linea_rotacion_de_cuentas_por_cobrar");

const data_linea_rotacion_de_cuentas_por_cobrar = {
  labels: labels,
  datasets: [{
    label: 'rotacion_de_cuentas_por_cobrar',
    data: dataRotacionEspOBJ.rotacion_de_cuentas_por_cobrar,
    fill: false,
    borderColor: backgroundColor_dinamico[3],
    tension: 0.1
  }]
};

let linea_rotacion_de_cuentas_por_cobrar_OBJ = new Chart(linea_rotacion_de_cuentas_por_cobrar, {
  type: 'line',
  data: data_linea_rotacion_de_cuentas_por_cobrar,
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

//Linea rotacion_de_activos_fijos
const linea_rotacion_de_inventarios = document.getElementById("linea_rotacion_de_inventarios");

const data_linea_rotacion_de_inventarios = {
  labels: labels,
  datasets: [{
    label: 'rotacion_de_inventarios',
    data: dataRotacionEspOBJ.rotacion_de_inventarios,
    fill: false,
    borderColor: backgroundColor_dinamico[3],
    tension: 0.1
  }]
};

let linea_rotacion_de_inventarios_OBJ = new Chart(linea_rotacion_de_inventarios, {
  type: 'line',
  data: data_linea_rotacion_de_inventarios,
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