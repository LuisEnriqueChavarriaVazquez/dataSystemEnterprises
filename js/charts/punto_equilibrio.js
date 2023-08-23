function calcularPuntoEquilibrio() {
    const cft = parseFloat(document.getElementById("costos_fijos").value);
    const cvt = parseFloat(document.getElementById("costo_venta").value);
    const pvu = parseFloat(document.getElementById("precio_venta").value);
    const unidadesVendidas = parseFloat(document.getElementById("unidades_vendidas").value);

    const puntoEquilibrio = cft / (pvu - cvt);
    const ingresos = unidadesVendidas * pvu;
    const costos = cft + unidadesVendidas * cvt;
    const gananciaPerdida = ingresos - costos;

    document.getElementById("resultado").textContent = puntoEquilibrio.toFixed(2) + " unidades";
    document.getElementById("unidadesVendidas").textContent = unidadesVendidas;
    document.getElementById("gananciaPerdida").textContent = gananciaPerdida.toFixed(2);

    // Crear la gráfica
    const ctx = document.getElementById('puntoEquilibrioChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Ganancia/perdida', 'Ingresos Totales', 'Costos variables totales'],
            datasets: [{
                label: 'Valores',
                data: [gananciaPerdida, ingresos, costos],
                borderWidth: 1,
                backgroundColor: backgroundColor_dinamico,
                borderColor: borderColor_dinamico,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}