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
    const tipoGrafico = dataEndeudamientoEsp.length > 7 ? 'bar' : 'bar';

//BARRAS margen_de_utilidad
const razon_de_cobertura_de_interes = document.getElementById("barras_razon_de_cobertura_de_interes");

const data_razon_de_cobertura_de_interes = {
  labels: labels,
  datasets: [{
    axis: tipoGrafico === 'line' ? 'x' : 'y',
    label: 'razon_de_cobertura_de_interes',
    data: dataEndeudamientoEspOBJ.razon_de_cobertura_de_interes,
    fill: true,
    backgroundColor: backgroundColor_dinamico,
    borderColor: borderColor_dinamico,
    borderWidth: 1
  }]
};

let razon_de_cobertura_de_interes_OBJ = new Chart(razon_de_cobertura_de_interes, {
  type: tipoGrafico,
  data: data_razon_de_cobertura_de_interes,
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
const apalancamiento_sobre_activo_total = document.getElementById("barras_apalancamiento_sobre_activo_total");

const data_apalancamiento_sobre_activo_total = {
  labels: labels,
  datasets: [{
    axis: tipoGrafico === 'line' ? 'x' : 'y',
    label: 'apalancamiento_sobre_activo_total',
    data: dataEndeudamientoEspOBJ.apalancamiento_sobre_activo_total,
    fill: true,
    backgroundColor: backgroundColor_dinamico,
    borderColor: borderColor_dinamico,
    borderWidth: 1
  }]
};

let apalancamiento_sobre_activo_total_OBJ = new Chart(apalancamiento_sobre_activo_total, {
  type: tipoGrafico,
  data: data_apalancamiento_sobre_activo_total,
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