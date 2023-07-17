//El framework es sweet alert https://sweetalert2.github.io/v9.html#examples

/**
 * Rotacion
 */

let buttonSectionOne = document.getElementById("buttonModalOne-rotacion");
if (buttonSectionOne) {
  buttonSectionOne.addEventListener("click", () => {
    Swal.mixin({
      input: "text",
      confirmButtonText: "Siguiente →",
      showCancelButton: true,
      progressSteps: ["1", "2", "3", "4"],
    })
      .queue([
        {
          title: "Cuentas por cobrar al inicio",
          text: "Ingrese los valores en el input",
        },
        {
          title: "Cuentas por cobrar al final",
          text: "Ingrese los valores en el input",
        },
        {
          title: "Ventas netas",
          text: "Ingrese los valores en el input",
        },
        {
          title: "Duración del periodo",
          text: "Ingrese los valores en el input",
        },
      ])
      .then((result) => {
        if (result.value) {
          const answers = result.value;
          Swal.fire({
            title: "Resultado",
            html: `
            Rotación de cuentas por cobrar:
            ${
              (parseInt(answers[0]) + parseInt(answers[1])) /
              2 /
              (parseInt(answers[2]) / parseInt(answers[3]))
            } días.
            `,
            confirmButtonText: "Cerrar",
          });
        }
      });
  });
}

let buttonSectionTwo = document.getElementById("buttonModalTwo-rotacion");
if (buttonSectionTwo) {
  buttonSectionTwo.addEventListener("click", () => {
    Swal.mixin({
      input: "text",
      confirmButtonText: "Siguiente →",
      showCancelButton: true,
      progressSteps: ["1", "2", "3", "4"],
    })
      .queue([
        {
          title: "Inventario inicial",
          text: "Ingrese los valores en el input",
        },
        {
          title: "Inventario final",
          text: "Ingrese los valores en el input",
        },
        {
          title: "Costo de ventas",
          text: "Ingrese los valores en el input",
        },
        {
          title: "Duración del periodo en días",
          text: "Ingrese los valores en el input",
        },
      ])
      .then((result) => {
        if (result.value) {
          const answers = result.value;
          Swal.fire({
            title: "Resultado",
            html: `
                Rotación de inventarios:
                ${
                  (parseInt(answers[0]) + parseInt(answers[1])) /
                  2 /
                  (parseInt(answers[2]) / parseInt(answers[3]))
                } días.
                `,
            confirmButtonText: "Cerrar",
          });
        }
      });
  });
}

let buttonSectionThree = document.getElementById("buttonModalThree-rotacion");
if (buttonSectionThree) {
  buttonSectionThree.addEventListener("click", () => {
    Swal.mixin({
      input: "text",
      confirmButtonText: "Siguiente →",
      showCancelButton: true,
      progressSteps: ["1", "2"],
    })
      .queue([
        {
          title: "Ventas netas",
          text: "Ingrese los valores en el input",
        },
        {
          title: "Activos fijos promedio",
          text: "Ingrese los valores en el input",
        },
      ])
      .then((result) => {
        if (result.value) {
          const answers = result.value;
          Swal.fire({
            title: "Resultado",
            html: `
            Rotación de activos fijos:
            ${parseInt(answers[0]) / parseInt(answers[1])} veces.
            `,
            confirmButtonText: "Cerrar",
          });
        }
      });
  });
}

let buttonSectionFour = document.getElementById("buttonModalFour-rotacion");
if (buttonSectionFour) {
  buttonSectionFour.addEventListener("click", () => {
    Swal.mixin({
      input: "text",
      confirmButtonText: "Siguiente →",
      showCancelButton: true,
      progressSteps: ["1", "2"],
    })
      .queue([
        {
          title: "Ventas netas",
          text: "Ingrese los valores en el input",
        },
        {
          title: "Activo total",
          text: "Ingrese los valores en el input",
        },
      ])
      .then((result) => {
        if (result.value) {
          const answers = result.value;
          Swal.fire({
            title: "Resultado",
            html: `
            Rotación de activos totales:
                ${parseInt(answers[0]) / parseInt(answers[1])} veces.
            `,
            confirmButtonText: "Cerrar",
          });
        }
      });
  });
}

/**
 * Botones de rentabilidad
 */

let buttonSectionOneRentabilidad = document.getElementById(
  "buttonModalOne-rentabilidad"
);
if (buttonSectionOneRentabilidad) {
  buttonSectionOneRentabilidad.addEventListener("click", () => {
    Swal.mixin({
      input: "text",
      confirmButtonText: "Siguiente →",
      showCancelButton: true,
      progressSteps: ["1", "2"],
    })
      .queue([
        {
          title: "Utilidad neta",
          text: "Ingrese los valores en el input",
        },
        {
          title: "Ventas netas",
          text: "Ingrese los valores en el input",
        },
      ])
      .then((result) => {
        if (result.value) {
          const answers = result.value;
          Swal.fire({
            title: "Resultado",
            html: `
            Margen de utilidad:
          ${(parseInt(answers[0]) / parseInt(answers[1])) * 100} %.
          `,
            confirmButtonText: "Cerrar",
          });
        }
      });
  });
}

let buttonSectionTwoRentabilidad = document.getElementById(
  "buttonModalTwo-rentabilidad"
);
if (buttonSectionTwoRentabilidad) {
  buttonSectionTwoRentabilidad.addEventListener("click", () => {
    Swal.mixin({
      input: "text",
      confirmButtonText: "Siguiente →",
      showCancelButton: true,
      progressSteps: ["1", "2"],
    })
      .queue([
        {
          title: "Utilidad neta",
          text: "Ingrese los valores en el input",
        },
        {
          title: "Activo total",
          text: "Ingrese los valores en el input",
        },
      ])
      .then((result) => {
        if (result.value) {
          const answers = result.value;
          Swal.fire({
            title: "Resultado",
            html: `
            Rendimiento sobre activos totales (RAT):
            ${(parseInt(answers[0]) / parseInt(answers[1])) * 100} %.
            `,
            confirmButtonText: "Cerrar",
          });
        }
      });
  });
}

let buttonSectionThreeRentabilidad = document.getElementById(
  "buttonModalThree-rentabilidad"
);
if (buttonSectionThreeRentabilidad) {
  buttonSectionThreeRentabilidad.addEventListener("click", () => {
    Swal.mixin({
      input: "text",
      confirmButtonText: "Siguiente →",
      showCancelButton: true,
      progressSteps: ["1", "2"],
    })
      .queue([
        {
          title: "Utilidad neta",
          text: "Ingrese los valores en el input",
        },
        {
          title: "Capital contable",
          text: "Ingrese los valores en el input",
        },
      ])
      .then((result) => {
        if (result.value) {
          const answers = result.value;
          Swal.fire({
            title: "Resultado",
            html: `
            Rendimiento sobre el capital contable:
            ${(parseInt(answers[0]) / parseInt(answers[1])) * 100} %.
            `,
            confirmButtonText: "Cerrar",
          });
        }
      });
  });
}

/**
 * Botones de endeudamiento
 */

let buttonSectionOneEndeudamiento = document.getElementById(
  "buttonModalOne-endeudamiento"
);

if (buttonSectionOneEndeudamiento) {
  buttonSectionOneEndeudamiento.addEventListener("click", () => {
    Swal.mixin({
      input: "text",
      confirmButtonText: "Siguiente →",
      showCancelButton: true,
      progressSteps: ["1", "2"],
    })
      .queue([
        {
          title: "Pasivo total",
          text: "Ingrese los valores en el input",
        },
        {
          title: "Deuda total",
          text: "Ingrese los valores en el input",
        },
      ])
      .then((result) => {
        if (result.value) {
          const answers = result.value;
          Swal.fire({
            title: "Resultado",
            html: `
            Apalancamiento sobre activo total:
            ${(parseInt(answers[0]) / parseInt(answers[1])) * 100} %.
            `,
            confirmButtonText: "Cerrar",
          });
        }
      });
  });
}

let buttonSectionTwoEndeudamiento = document.getElementById(
  "buttonModalTwo-endeudamiento"
);

if (buttonSectionTwoEndeudamiento) {
  buttonSectionTwoEndeudamiento.addEventListener("click", () => {
    Swal.mixin({
      input: "text",
      confirmButtonText: "Siguiente →",
      showCancelButton: true,
      progressSteps: ["1", "2"],
    })
      .queue([
        {
          title: "Utilidad de operación",
          text: "Ingrese los valores en el input",
        },
        {
          title: "Intereses",
          text: "Ingrese los valores en el input",
        },
      ])
      .then((result) => {
        if (result.value) {
          const answers = result.value;
          Swal.fire({
            title: "Resultado",
            html: `
              Rozón de cobertura de intereses:
              ${parseInt(answers[0]) / parseInt(answers[1])} veces.
              `,
            confirmButtonText: "Cerrar",
          });
        }
      });
  });
}

/**
 * Buttons para la liquidez y sus modals
 */

let buttonSectionOneLiquidez = document.getElementById(
  "buttonModalOne-liquidez"
);

if (buttonSectionOneLiquidez) {
  buttonSectionOneLiquidez.addEventListener("click", () => {
    Swal.mixin({
      input: "text",
      confirmButtonText: "Siguiente →",
      showCancelButton: true,
      progressSteps: ["1", "2"],
    })
      .queue([
        {
          title: "Activo circulante",
          text: "Ingrese los valores en el input",
        },
        {
          title: "Pasivo circulante",
          text: "Ingrese los valores en el input",
        },
      ])
      .then((result) => {
        if (result.value) {
          const answers = result.value;
          Swal.fire({
            title: "Resultado",
            html: `
                Razón de liquidez:
                ${parseInt(answers[0]) / parseInt(answers[1])} veces.
                `,
            confirmButtonText: "Cerrar",
          });
        }
      });
  });
}

let buttonSectionTwoLiquidez = document.getElementById(
  "buttonModalTwo-liquidez"
);

if (buttonSectionTwoLiquidez) {
  buttonSectionTwoLiquidez.addEventListener("click", () => {
    Swal.mixin({
      input: "text",
      confirmButtonText: "Siguiente →",
      showCancelButton: true,
      progressSteps: ["1", "2", "3"],
    })
      .queue([
        {
          title: "Activo circulante",
          text: "Ingrese los valores en el input",
        },
        {
          title: "Inventario",
          text: "Ingrese los valores en el input",
        },
        {
          title: "Pasivo circulante",
          text: "Ingrese los valores en el input",
        },
      ])
      .then((result) => {
        if (result.value) {
          const answers = result.value;
          Swal.fire({
            title: "Resultado",
            html: `
                Prueba del ácido:
                ${
                  (parseInt(answers[0]) - parseInt(answers[1])) /
                  parseInt(answers[2])
                } veces.
                `,
            confirmButtonText: "Cerrar",
          });
        }
      });
  });
}

let buttonSectionThreeLiquidez = document.getElementById(
  "buttonModalThree-liquidez"
);

if (buttonSectionThreeLiquidez) {
  buttonSectionThreeLiquidez.addEventListener("click", () => {
    Swal.mixin({
      input: "text",
      confirmButtonText: "Siguiente →",
      showCancelButton: true,
      progressSteps: ["1", "2"],
    })
      .queue([
        {
          title: "Activo circulante",
          text: "Ingrese los valores en el input",
        },
        {
          title: "Pasivo circulante",
          text: "Ingrese los valores en el input",
        },
      ])
      .then((result) => {
        if (result.value) {
          const answers = result.value;
          Swal.fire({
            title: "Resultado",
            html: `
                Capital de trabajo:
                ${
                  parseInt(answers[0]) - parseInt(answers[1])
                } unidades monetarias.
                `,
            confirmButtonText: "Cerrar",
          });
        }
      });
  });
}

let buttonSectionFourLiquidez = document.getElementById(
  "buttonModalFour-liquidez"
);

if (buttonSectionFourLiquidez) {
  buttonSectionFourLiquidez.addEventListener("click", () => {
    Swal.mixin({
      input: "text",
      confirmButtonText: "Siguiente →",
      showCancelButton: true,
      progressSteps: ["1", "2"],
    })
      .queue([
        {
          title: "Rotación de inventarios",
          text: "Ingrese los valores en el input",
        },
        {
          title: "Rotación de cuentas por cobrar",
          text: "Ingrese los valores en el input",
        },
        {
          title: "Rotación de cuentas por pagar",
          text: "Ingrese los valores en el input",
        },
      ])
      .then((result) => {
        if (result.value) {
          const answers = result.value;
          Swal.fire({
            title: "Resultado",
            html: `
                Ciclo operativo:
                ${
                  parseInt(answers[0]) +
                  parseInt(answers[1]) -
                  parseInt(answers[2])
                } días.
                `,
            confirmButtonText: "Cerrar",
          });
        }
      });
  });
}
