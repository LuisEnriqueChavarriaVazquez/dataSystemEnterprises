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

//DONA Margen de utilidad
const dona_capital_de_trabajo = document.getElementById("dona_capital_de_trabajo");

const data_dona_capital_de_trabajo = {
  labels: labels,
  datasets: [{
    label: 'Capital_de_trabajo',
    data: dataLiquidezEspOBJ.capital_de_trabajo,
    backgroundColor: backgroundColor_dinamico,
    hoverOffset: 4
  }]
};

new Chart(dona_capital_de_trabajo, {
  type: 'doughnut',
  data: data_dona_capital_de_trabajo
});


//DONA Margen de utilidad
const dona_capital_operativo = document.getElementById("dona_capital_operativo");

const data_dona_capital_operativo = {
  labels: labels,
  datasets: [{
    label: 'Capital_operativo',
    data: dataLiquidezEspOBJ.capital_operativo,
    backgroundColor: backgroundColor_dinamico,
    hoverOffset: 4
  }]
};

new Chart(dona_capital_operativo, {
  type: 'doughnut',
  data: data_dona_capital_operativo
});


//DONA Margen de utilidad
const dona_prueba_del_acido = document.getElementById("dona_prueba_del_acido");

const data_dona_prueba_del_acido = {
  labels: labels,
  datasets: [{
    label: 'Prueba_del_acido',
    data: dataLiquidezEspOBJ.prueba_del_acido,
    backgroundColor: backgroundColor_dinamico,
    hoverOffset: 4
  }]
};

new Chart(dona_prueba_del_acido, {
  type: 'doughnut',
  data: data_dona_prueba_del_acido
});


//DONA Margen de utilidad
const dona_razon_de_liquidez = document.getElementById("dona_razon_de_liquidez");

const data_dona_razon_de_liquidez = {
  labels: labels,
  datasets: [{
    label: 'Razon_de_liquidez',
    data: dataLiquidezEspOBJ.razon_de_liquidez,
    backgroundColor: backgroundColor_dinamico,
    hoverOffset: 4
  }]
};

new Chart(dona_razon_de_liquidez, {
  type: 'doughnut',
  data: data_dona_razon_de_liquidez
});
