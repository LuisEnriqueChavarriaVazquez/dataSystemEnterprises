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

    var dataRentabilidadEsp = localStorage.getItem('indicesSeparadosRentabilidad');
    var dataRentabilidadEspOBJ = JSON.parse(dataRentabilidadEsp);
    var labels = localStorage.getItem('nombreEmpresaGraph').split(",");

//Linea margen_de_utilidad
const linea_margen_de_utilidad = document.getElementById("linea_margen_de_utilidad");

const data_linea_margen_de_utilidad = {
  labels: labels,
  datasets: [{
    label: 'Margen de utilidad',
    data: dataRentabilidadEspOBJ.margen_de_utilidad,
    fill: false,
    borderColor: backgroundColor_dinamico[3],
    tension: 0.1
  }]
};

let linea_margen_de_utilidad_OBJ = new Chart(linea_margen_de_utilidad, {
  type: 'line',
  data: data_linea_margen_de_utilidad,
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

//Linea margen_de_utilidad
const linea_rendimientos_sobre_activos_totales = document.getElementById("linea_rendimientos_sobre_activos_totales");

const data_linea_rendimientos_sobre_activos_totales = {
  labels: labels,
  datasets: [{
    label: 'Rendimientos_sobre_activos_totales',
    data: dataRentabilidadEspOBJ.rendimientos_sobre_activos_totales,
    fill: false,
    borderColor: backgroundColor_dinamico[3],
    tension: 0.1
  }]
};

let linea_rendimientos_sobre_activos_totales_OBJ = new Chart(linea_rendimientos_sobre_activos_totales, {
  type: 'line',
  data: data_linea_rendimientos_sobre_activos_totales,
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

//Linea margen_de_utilidad
const linea_rendimientos_sobre_capital_contable = document.getElementById("linea_rendimientos_sobre_capital_contable");

const data_linea_rendimientos_sobre_capital_contable = {
  labels: labels,
  datasets: [{
    label: 'Rendimientos sobre capital contable',
    data: dataRentabilidadEspOBJ.rendimientos_sobre_capital_contable,
    fill: false,
    borderColor: backgroundColor_dinamico[3],
    tension: 0.1
  }]
};

let linea_rendimientos_sobre_capital_contable_OBJ = new Chart(linea_rendimientos_sobre_capital_contable, {
  type: 'line',
  data: data_linea_rendimientos_sobre_capital_contable,
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