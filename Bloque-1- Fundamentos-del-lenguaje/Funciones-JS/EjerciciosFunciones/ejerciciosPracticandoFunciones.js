// 1️⃣ Nivel intermedio-alto: Calculadora de gastos
// 📝 Descripción:
// Crea una función llamada calcularGastos que reciba un número indefinido de gastos y calcule cuánto has gastado en total.
// Si no se pasa ningún gasto, debe devolver un mensaje indicando que no se han registrado gastos.

// 📌 Lo que practicas:

// Funciones con múltiples argumentos.
// Uso de arguments para manejar un número variable de parámetros.
// Control de errores (¿qué pasa si alguien pasa un valor que no es número?).
// Ejemplo de ejecución:
// calcularGastos(10, 20, 30, 5); // Salida: "Has gastado un total de 65€."
// calcularGastos(); // Salida: "No se han registrado gastos."
// calcularGastos(50, "Hola", 25); // Salida: "Error: Solo se permiten números."

function calcularGastos() {
  if (arguments.length === 0) {
    return console.log("No se han registrado gastos.");
  }

  let resultadoGastos = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== 'number') {
      return console.log("Error: Solo se permiten números.");
    }
    resultadoGastos += arguments[i];
  }
  console.log("Has gastado un total de " + resultadoGastos + "€.");
};

calcularGastos(10, 20, 30, 5); // Salida: "Has gastado un total de 65€."
calcularGastos(); // Salida: "No se han registrado gastos."
calcularGastos(50, "Hola", 25); // Salida: "Error: Solo se permiten números."

