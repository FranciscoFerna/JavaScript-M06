/*
Ejercicio 1: Set
*/

/*
Eliminar duplicados de un array utilizando un Set
Crea una función que reciba un array como entrada y devuelva un nuevo array con los elementos únicos del array original, es decir, eliminando los elementos duplicados.

const numeros = [1, 2, 3, 4, 4, 5, 6, 6, 7];
const numerosUnicos = eliminarDuplicados(numeros);
console.log(numerosUnicos); // Output: [1, 2, 3, 4, 5, 6, 7]
*/

/*
Comprobar si dos arrays tienen elementos en común utilizando un Set
Crea una función que tome dos arrays como entrada y devuelva true si tienen al menos un elemento en común, y false en caso contrario.

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
console.log(tienenElementosEnComun(array1, array2)); // Output: true

*/

// Función para eliminar duplicados
function eliminarDuplicados(array) {
  return [...new Set(array)];
}

// Función para comprobar elementos en común
function tienenElementosEnComun(array1, array2) {
  const set1 = new Set(array1);
  for (let elemento of array2) {
    if (set1.has(elemento)) {
      return true;
    }
  }
  return false;
}

// Pruebas
const numeros = [1, 2, 3, 4, 4, 5, 6, 6, 7];
const numerosUnicos = eliminarDuplicados(numeros);
console.log(numerosUnicos); // [1, 2, 3, 4, 5, 6, 7]

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
console.log(tienenElementosEnComun(array1, array2)); // true
