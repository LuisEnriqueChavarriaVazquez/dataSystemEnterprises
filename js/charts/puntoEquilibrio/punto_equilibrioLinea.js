let calcularPuntoEquilibrioLinea = function calcularPuntoEquilibrioLinea() {
    // Linea razon_de_liquidez
    const linea_punto_equilibrio = document.getElementById("puntoEquilibrioLine");

    const data_linea_punto_equilibrio = {
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
        datasets: [
            {
                label: 'Ingresos totales',
                data: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900],
                borderColor: backgroundColor_dinamico[3],
            },
            {
                label: 'Costos totales',
                data: [4050, 3950, 3850, 3750, 3650, 3550, 3450, 3350, 3250, 3150, 3050, 2950, 2850, 2750, 2650, 2550, 2450, 2350, 2250, 2150],
                borderColor: backgroundColor_dinamico[6],
            }
        ]
    };

    let linea_punto_equilibrio_OBJ = new Chart(linea_punto_equilibrio, {
        type: 'line',
        data: data_linea_punto_equilibrio,
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
}

calcularPuntoEquilibrioLinea();
