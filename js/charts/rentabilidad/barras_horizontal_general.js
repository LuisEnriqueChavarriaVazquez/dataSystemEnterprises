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
    const tipoGrafico = dataRentabilidadEsp.length > 7 ? 'bar' : 'bar';

//BARRAS margen_de_utilidad
const margen_de_utilidad = document.getElementById("barras_margen_de_utilidad");

const data_margen_de_utilidad = {
  labels: labels,
  datasets: [{
    axis: tipoGrafico === 'line' ? 'x' : 'y',
    label: 'Margen de utilidad',
    data: dataRentabilidadEspOBJ.margen_de_utilidad,
    fill: true,
    backgroundColor: backgroundColor_dinamico,
    borderColor: borderColor_dinamico,
    borderWidth: 1
  }]
};

let margen_de_utilidad_OBJ = new Chart(margen_de_utilidad, {
  type: tipoGrafico,
  data: data_margen_de_utilidad,
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

//BARRAS rendimientos_sobre_activos_totales
const rendimientos_sobre_activos_totales = document.getElementById("barras_rendimientos_sobre_activos_totales");

const data_rendimientos_sobre_activos_totales = {
  labels: labels,
  datasets: [{
    axis:tipoGrafico === 'line' ? 'x' : 'y',
    label: 'Rendimientos sobre activos totales',
    data: dataRentabilidadEspOBJ.rendimientos_sobre_activos_totales,
    fill: true,
    backgroundColor: backgroundColor_dinamico,
    borderColor: borderColor_dinamico,
    borderWidth: 1
  }]
};

let rendimientos_sobre_activos_totales_OBJ = new Chart(rendimientos_sobre_activos_totales, {
  type: tipoGrafico,
  data: data_rendimientos_sobre_activos_totales,
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

//BARRAS rendimientos_sobre_capital_contable
const rendimientos_sobre_capital_contable = document.getElementById("barras_rendimientos_sobre_capital_contable");

const data_rendimientos_sobre_capital_contable = {
  labels: labels,
  datasets: [{
    axis:tipoGrafico === 'line' ? 'x' : 'y',
    label: 'Rendimiento sobre capital contable',
    data: dataRentabilidadEspOBJ.rendimientos_sobre_capital_contable,
    fill: true,
    backgroundColor: backgroundColor_dinamico,
    borderColor: borderColor_dinamico,
    borderWidth: 1
  }]
};

let rendimientos_sobre_capital_contable_OBJ = new Chart(rendimientos_sobre_capital_contable, {
  type:tipoGrafico,
  data: data_rendimientos_sobre_capital_contable,
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