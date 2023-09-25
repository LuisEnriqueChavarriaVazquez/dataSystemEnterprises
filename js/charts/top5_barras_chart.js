var labels = localStorage.getItem('nombreEmpresaGraph').split(",");
var valores = localStorage.getItem('rentabilidadEmpresaGraph').split(",").map(Number);
const barras_rentabilidad = document.getElementById("top5_rentabilidad");


var combinado = labels.map(function(label, index) {
    return {
        label: label,
        valor: valores[index]
    };
});


combinado.sort(function(a, b) {
    return b.valor - a.valor;
});

// Tomar los primeros 5 objetos
var top5 = combinado.slice(0, 5);


var top5Labels = top5.map(function(obj) {
    return obj.label;
});
var top5Valores = top5.map(function(obj) {
    return obj.valor;
});


console.log(top5Labels)
console.log(top5Valores)


const data_barras_rentabilidad = {
    labels: top5Labels,
    datasets: [{
      axis: 'bar',
      label: 'índice de rentabilidad',
      data:top5Valores,
      fill: true,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  };
  
  new Chart(barras_rentabilidad, {
    type:'bar',
    data: data_barras_rentabilidad,
    options: {
      indexAxis:'y',
    }
  });