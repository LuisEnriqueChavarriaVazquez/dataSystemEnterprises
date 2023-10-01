// let calcularPuntoEquilibrioLinea = function calcularPuntoEquilibrioLinea() {
//     // Linea razon_de_liquidez
//     const linea_punto_equilibrio = document.getElementById("puntoEquilibrioLine");

//     const data_linea_punto_equilibrio = {
//         labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
//         datasets: [
//             {
//                 label: 'Ingresos totales',
//                 data: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900],
//                 borderColor: backgroundColor_dinamico[3],
//             },
//             {
//                 label: 'Costos totales',
//                 data: [4050, 3950, 3850, 3750, 3650, 3550, 3450, 3350, 3250, 3150, 3050, 2950, 2850, 2750, 2650, 2550, 2450, 2350, 2250, 2150],
//                 borderColor: backgroundColor_dinamico[6],
//             }
//         ]
//     };

//     let linea_punto_equilibrio_OBJ = new Chart(linea_punto_equilibrio, {
//         type: 'line',
//         data: data_linea_punto_equilibrio,
//         options: {
//             plugins: {
//                 zoom: {
//                     zoom: {
//                         wheel: {
//                             enabled: true,
//                         },
//                         pinch: {
//                             enabled: true
//                         },
//                         mode: 'xy',
//                     }
//                 }
//             }
//         }
//     });
// }

// calcularPuntoEquilibrioLinea();

function calcularPuntoEquilibrioLinea() {
    const cft = parseFloat(document.getElementById("costos_fijos").value);
    const cvt = parseFloat(document.getElementById("costo_venta").value);
    const pvu = parseFloat(document.getElementById("precio_venta").value);
    const unidadesVendidas = parseFloat(document.getElementById("unidades_vendidas").value);

    // Calcular los valores para cada punto en el gráfico
    const ingresos = [];
    const costos = [];
    for (let i = 0; i <= unidadesVendidas; i++) {
        ingresos.push(i * pvu);
        costos.push(cft + i * cvt);
    }

    // Encontrar el punto de intersección
    let puntoInterseccion = 0;
    for (let i = 0; i <= unidadesVendidas; i++) {
        if (ingresos[i] >= costos[i]) {
            puntoInterseccion = i;
            break;
        }
    }

    const ctxLine = document.getElementById('puntoEquilibrioLine').getContext('2d');
    const chart = new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: Array.from({ length: unidadesVendidas + 1 }, (_, i) => i),
            datasets: [
                {
                    label: 'Ingresos Totales',
                    data: ingresos,
                    borderColor: 'rgb(75, 192, 192)',
                    fill: false,
                    order: 2 
                },
                {
                    label: 'Costos Totales',
                    data: costos,
                    borderColor: 'rgb(255, 99, 132)',
                    fill: false,
                    order: 3 
                },
                {
                    label: 'Punto de Equilibrio',
                    data: [{x: puntoInterseccion, y: ingresos[puntoInterseccion]}],
                    borderColor: 'rgb(0, 0, 0)',
                    backgroundColor: 'rgb(0, 0, 0)',
                    pointRadius: 7,
                    pointHoverRadius: 9,
                    order: 1
                }
            ]
        },
        options: {
            scales: {
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Unidades Vendidas'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Dólares'
                    }
                }
            },
        }
    });

}
