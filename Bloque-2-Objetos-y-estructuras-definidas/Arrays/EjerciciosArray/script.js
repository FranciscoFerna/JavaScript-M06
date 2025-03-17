// Ejercicios Array:

/*
Problema 1:
Dada una lista de números, escribe una función en JavaScript que devuelva la suma de todos los números pares en la lista. La función deberá iterar sobre cada número en la lista, comprobar si el número es par y, si es así, añadirlo a la suma total.
sumarPares([2,4,5,6,7,8,3,1,10,4])
*/
function sumaPares(arr) {
  let sumaTotal = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      sumaTotal += num;
    }
  }
  console.log("La suma del total del arreglo es: " + sumaTotal);
}

sumaPares([2, 4, 5, 6, 7, 8, 3, 1, 10, 4]);
/*
Problema 2:
Recibimos un array con los datos del alumno, pero debemos ordenarlo. En lugar de tener al final el nombre del alumno lo queremos al principio, antes del apellido y queremos añadir al final la nota media. De tal manera que:
ordenDatos(["Rodriguez", "8", 9, '5',4, 'Clara']) → Clara,Rodriguez,8,9,5,4,6.5
*/
function ordenDatos(arr) {
  // Extraer el nombre (ultimo elemento) y ponerlo al principio
  const nombre = arr.pop();
  arr.unshift(nombre);

  // Convertir las notas a numeros
  const notas = arr.slice(2).map(Number);

  // Calcular la media
  const media = notas.reduce((a, b) => a + b) / notas.length;

  // Añadir la media al final
  arr.push(media);

  console.log(arr.join(","));
  return arr;
}

ordenDatos(["Rodriguez", "8", 9, "5", 4, "Clara"]);

/*
Problema 3:
Partiendo de un array con palabras aleatorias, pero nuestro programa no acepta palabras que empiezan por “Z”. Elimina estas palabras del array y devuelve el nuevo sin estas palabras.
filterWords(["Bob", "Alex", "Zoello"]);
filterWords(["León", "Zebra", "Gacela"]);
filterWords(["Mercedes", "Bmw", "Audi", "Porche"]);
*/

function filterWords(arr) {
  let nuevoArray = arr;
  for (let i = 0; i < nuevoArray.length; i++) {
    if (nuevoArray[i].toLowerCase().startsWith("z")) {
      nuevoArray.splice(i, 1);
    }
  }
  return nuevoArray;
}

console.log(filterWords(["Bob", "Alex", "Zoello"]));

function filterWordsForOF(array) {
  let nuevaArray = [];
  for (elemento of array) {
    if (!elemento.startsWith("z") && !elemento.startsWith("Z")) {
      nuevaArray.push(elemento);
    }
  }

  return nuevaArray;
}

console.log(filterWords(["Bob", "Alex", "Zoello"]));

/*
Problema 4:
Programar la función splice, ten en cuenta que puede o no tener un nuevo elemento.
*/
function miSplice(arr, start, deleteCount, ...items) {
  const removed = arr.slice(start, start + deleteCount);
  const leftPart = arr.slice(0, start);
  const rightPart = arr.slice(start + deleteCount);

  arr.length = 0;
  arr.push(...leftPart, ...items, ...rightPart);

  return removed;
}

/*
Problema 5:
Haz el problema 3 usando tu función splice o en su defecto el método de la clase.
*/
function filterWordsWithSplice(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase().startsWith('z')) {
      miSplice(arr, i, 1);
      i--; // Ajustamos el índice ya que el array se ha modificado
    }
  }
  return arr;
}

// Pruebas
const testArray = ["Bob", "Alex", "Zoello"];
console.log(filterWordsWithSplice(testArray));
