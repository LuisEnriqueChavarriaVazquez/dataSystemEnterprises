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

    var dataEndeudamientoEsp = localStorage.getItem('indicesSeparadosEndeudamiento');
    var dataEndeudamientoEspOBJ = JSON.parse(dataEndeudamientoEsp);
    var labels = localStorage.getItem('nombreEmpresaGraph').split(",");

//Linea razon_de_cobertura_de_interes
const linea_razon_de_cobertura_de_interes = document.getElementById("linea_razon_de_cobertura_de_interes");

const data_linea_razon_de_cobertura_de_interes = {
  labels: labels,
  datasets: [{
    label: 'razon_de_cobertura_de_interes',
    data: dataEndeudamientoEspOBJ.razon_de_cobertura_de_interes,
    fill: false,
    borderColor: backgroundColor_dinamico[3],
    tension: 0.1
  }]
};

let linea_razon_de_cobertura_de_interes_OBJ = new Chart(linea_razon_de_cobertura_de_interes, {
  type: 'line',
  data: data_linea_razon_de_cobertura_de_interes,
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

//Linea apalancamiento_sobre_activo_total
const linea_apalancamiento_sobre_activo_total = document.getElementById("linea_apalancamiento_sobre_activo_total");

const data_linea_apalancamiento_sobre_activo_total = {
  labels: labels,
  datasets: [{
    label: 'apalancamiento_sobre_activo_total',
    data: dataEndeudamientoEspOBJ.apalancamiento_sobre_activo_total,
    fill: false,
    borderColor: backgroundColor_dinamico[3],
    tension: 0.1
  }]
};

let linea_apalancamiento_sobre_activo_total_OBJ = new Chart(linea_apalancamiento_sobre_activo_total, {
  type: 'line',
  data: data_linea_apalancamiento_sobre_activo_total,
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