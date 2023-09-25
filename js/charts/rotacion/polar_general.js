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

//Pastel rentabilidad
const polar_rotacion_de_activos_fijos = document.getElementById("polar_rotacion_de_activos_fijos");

const data_polar_rotacion_de_activos_fijos = {
  labels: labels,
  datasets: [{
    label: 'Rotacion_de_activos_fijos',
    data: dataRotacionEspOBJ.rotacion_de_activos_fijos,
    backgroundColor: backgroundColor_dinamico,
    hoverOffset: 4
  }]
};

new Chart(polar_rotacion_de_activos_fijos, {
  type: 'polarArea',
  data: data_polar_rotacion_de_activos_fijos
});

//Pastel rentabilidad
const polar_rotacion_de_activos_totales = document.getElementById("polar_rotacion_de_activos_totales");

const data_polar_rotacion_de_activos_totales = {
  labels: labels,
  datasets: [{
    label: 'rotacion_de_activos_totales',
    data: dataRotacionEspOBJ.rotacion_de_activos_totales,
    backgroundColor: backgroundColor_dinamico,
    hoverOffset: 4
  }]
};

new Chart(polar_rotacion_de_activos_totales, {
  type: 'polarArea',
  data: data_polar_rotacion_de_activos_totales
});

//Pastel rentabilidad
const polar_rotacion_de_cuentas_por_cobrar = document.getElementById("polar_rotacion_de_cuentas_por_cobrar");

const data_polar_rotacion_de_cuentas_por_cobrar = {
  labels: labels,
  datasets: [{
    label: 'Rotacion_de_cuentas_por_cobrar',
    data: dataRotacionEspOBJ.rotacion_de_cuentas_por_cobrar,
    backgroundColor: backgroundColor_dinamico,
    hoverOffset: 4
  }]
};

new Chart(polar_rotacion_de_cuentas_por_cobrar, {
  type: 'polarArea',
  data: data_polar_rotacion_de_cuentas_por_cobrar
});

//Pastel rentabilidad
const polar_rotacion_de_inventarios = document.getElementById("polar_rotacion_de_inventarios");

const data_polar_rotacion_de_inventarios = {
  labels: labels,
  datasets: [{
    label: 'Rotacion_de_inventarios',
    data: dataRotacionEspOBJ.rotacion_de_inventarios,
    backgroundColor: backgroundColor_dinamico,
    hoverOffset: 4
  }]
};

new Chart(polar_rotacion_de_inventarios, {
  type: 'polarArea',
  data: data_polar_rotacion_de_inventarios
});


