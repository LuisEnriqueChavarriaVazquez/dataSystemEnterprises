var labels = localStorage.getItem('nombreEmpresaGraph').split(",");
var valores = localStorage.getItem('endeudamientoEmpresaGraph').split(",").map(Number);
const top5_endeudamiento = document.getElementById("top5_endeudamiento");


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

const data_top5_endeudamiento = {
    labels: top5Labels,
    datasets: [{
      axis: 'bar',
      label: 'Top 5 índices de endeudamiento',
      data:top5Valores,
      fill: true,
      backgroundColor: backgroundColor_dinamico[5],
      borderColor: backgroundColor_dinamico[5],
      borderWidth: 1
    }]
  };
  
  new Chart(top5_endeudamiento, {
    type:'bar',
    data: data_top5_endeudamiento,
    options: {
      indexAxis:'y',
    }
  });