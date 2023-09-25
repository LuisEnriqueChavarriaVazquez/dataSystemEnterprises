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
    const tipoGrafico = dataRotacionEsp.length > 7 ? 'bar' : 'bar';

//BARRAS margen_de_utilidad
const rotacion_de_activos_fijos = document.getElementById("barras_rotacion_de_activos_fijos");

const data_rotacion_de_activos_fijos = {
  labels: labels,
  datasets: [{
    axis: tipoGrafico === 'line' ? 'x' : 'y',
    label: 'Rotación de activos fijos',
    data: dataRotacionEspOBJ.rotacion_de_activos_fijos,
    fill: true,
    backgroundColor: backgroundColor_dinamico,
    borderColor: borderColor_dinamico,
    borderWidth: 1
  }]
};

let rotacion_de_activos_fijos_OBJ = new Chart(rotacion_de_activos_fijos, {
  type: tipoGrafico,
  data: data_rotacion_de_activos_fijos,
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
const rotacion_de_activos_totales = document.getElementById("barras_rotacion_de_activos_totales");

const data_rotacion_de_activos_totales = {
  labels: labels,
  datasets: [{
    axis: tipoGrafico === 'line' ? 'x' : 'y',
    label: 'Rotación de activos totales',
    data: dataRotacionEspOBJ.rotacion_de_activos_totales,
    fill: true,
    backgroundColor: backgroundColor_dinamico,
    borderColor: borderColor_dinamico,
    borderWidth: 1
  }]
};

let rotacion_de_activos_totales_OBJ = new Chart(rotacion_de_activos_totales, {
  type: tipoGrafico,
  data: data_rotacion_de_activos_totales,
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
const rotacion_de_cuentas_por_cobrar = document.getElementById("barras_rotacion_de_cuentas_por_cobrar");

const data_rotacion_de_cuentas_por_cobrar = {
  labels: labels,
  datasets: [{
    axis: tipoGrafico === 'line' ? 'x' : 'y',
    label: 'Rotación de cuentas por cobrar',
    data: dataRotacionEspOBJ.rotacion_de_cuentas_por_cobrar,
    fill: true,
    backgroundColor: backgroundColor_dinamico,
    borderColor: borderColor_dinamico,
    borderWidth: 1
  }]
};

let rotacion_de_cuentas_por_cobrar_OBJ = new Chart(rotacion_de_cuentas_por_cobrar, {
  type: tipoGrafico,
  data: data_rotacion_de_cuentas_por_cobrar,
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
const rotacion_de_inventarios = document.getElementById("barras_rotacion_de_inventarios");

const data_rotacion_de_inventarios = {
  labels: labels,
  datasets: [{
    axis: tipoGrafico === 'line' ? 'x' : 'y',
    label: 'Rotación de inventarios',
    data: dataRotacionEspOBJ.rotacion_de_inventarios,
    fill: true,
    backgroundColor: backgroundColor_dinamico,
    borderColor: borderColor_dinamico,
    borderWidth: 1
  }]
};

let rotacion_de_inventarios_OBJ = new Chart(rotacion_de_inventarios, {
  type: tipoGrafico,
  data: data_rotacion_de_inventarios,
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

