// El Array es un objeto por definición, está compuesta por una lista de elementos. Accedemos a la lista mediante un índice, empezando en 0.

// Array (object)
let paises = ["España", "Mexico", "Colombia", "Argentina"];
console.log(typeof paises, paises[0], typeof paises[0]);
let empty = []; // Array vacio
console.log(empty.length);

let mixto = ["a", 5, true];

// Herencia de otros lenguajes
const arregloOther = new Array("a", "b", "c"); // Array 3 elementos
const arregloVacio = []; // Array vacio
const arregloMixto = ["a", 5, true]; // Array mixto

//const arreglo = new Array(3); no confundir con const arreglo = [3]; que en este caso es un array de un elemento con valor 3.

// Para acceder a los elementos de un array podemos hacerlo de varias maneras

//  Al ser una agrupación de elementos SIEMPRE necesitaremos un bucle si queremos recorrerlo.

const arreglo = ["a", "b", "c"];
console.log(arreglo.length); // 3
console.log(arreglo[0]); // 'a'
console.log(arreglo[2]); // 'c'
console.log(arreglo[5]); // undefined

const arregloNew = ["a", "b", "c"];
arregloNew[1] = "Z"; // Devuelve "Z" y modifica arreglo a ["a", "Z", "c"]
arregloNew[3] = "D"; // Devuelve "D" y modifica arreglo a ["a", "Z", "c", "D"]
arregloNew[5] = "A"; // Devuelve "A" y modifica arreglo a ["a", "Z", "c", "D", undefined, "A"]

const arregloWith = ["a", "b", "c"];
console.log(arregloWith.with(1, "Z")); // Devuelve ["a", "Z", "c"]
// arregloWith.with(4, "D");   // No se puede hacer porque la posición 4 no existe

// Array añadir/eliminar

const array = ["a", "b", "c"]; // Array inicial

array.push("d"); // Devuelve 4. Ahora array = ['a', 'b', 'c', 'd']
array.pop(); // Devuelve 'd'. Ahora array = ['a', 'b', 'c']

array.unshift("Z"); // Devuelve 4. Ahora array = ['Z', 'a', 'b', 'c']
array.shift(); // Devuelve 'Z'. Ahora array = ['a', 'b', 'c']

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];
const children = arr1.concat(arr2, arr3); // Devuelve ["Cecilie", "Lone", "Emil", "Tobias", "Linus", "Robin"]

// JOIN
function printArrayOf(array, text) {
  for (let x of array) {
    text += x + ",";
  }
  console.log("FOR OF: " + text);
}

printArrayOf(array);

// JOIN
function printArrayIn(array, text) {
  for (let i in array) {
    text += array[i] + ",";
  }
  console.log("FOR IN: " + text);
}

printArrayIn(array);

// Convertir a ARRAY, unir a String
// Podemos pasar de String o NodeList a un Array y de un Array a un String. Estas funcionalidades son muy interesantes para hacer según qué manipulaciones, puesto que los métodos que ofrece la clase array son más completos.

/*
Métodos estático
Descripción
Array.from(String o NodeList del DOM , tipo de Dato)
Devuelve, si es posible, un array con los elementos separados. En caso contrario nos devolverá un error.
[...String]
[...NodeList]
string.split(separador)
Devuelve un array, con el número de elementos que salga según el separador indicado.
arreglo.join(separador);
Devuelve un string con todos los elementos del array separados por el separador.
*/

const newText = "12345"; // es un String
const arregloForTheNewText = Array.from(text); // ["1", "2", "3", "4", "5"]
const arregloNew = [...text]; // ["1", "2", "3", "4", "5"] son equivalentes.

const divs = document.querySelectorAll("div"); // son NodeList del DOM
const elementos = Array.from(divs); // [div, div, div]
const elementosNuevos = [...divs]; // [div, div, div] son equivalentes.

const text = "12345";
const numbers = Array.from(text, Number); // [1, 2, 3, 4, 5]

const arregloNew = ["a", "b", "c"];
// Une elementos del array por el separador indicado
arreglo.join("->"); // Devuelve string 'a->b->c'
arreglo.join("."); // Devuelve string 'a.b.c'

// Separa elementos del string por el separador indicado
"a.b.c".split("."); // Devuelve ['a', 'b', 'c']
"5-4-3-2-1".split("-"); // Devuelve ['5', '4', '3', '2', '1']

// Array metodos
// El Array tiene sus propios métodos que nos permite manipularlo.

/*
sort()
Ordena alfabéticamente el Array [0..9 →A..Z→a..z].
reverse()
Ordena al revés, [z..a→Z..A → 0..9]
*/

const fruits = ["Banana", "1Orange", "Apple", "mango"];
//Ordenamos
fruits.sort();
printArray(fruits, "Ordenado: ");

// Orden al revés
fruits.reverse();
printArray(fruits, "Al revés: ");


// ARRAY añadir/eliminar en una posición concreta
// Existe método modifica el array directamente y es propio de la clase Array.

/*
elementos = arreglo.splice(pos, numElementosEliminar)
Elimina los numElementosEliminar elementos del array, a partir de la último pos. Devuelve los elementos eliminados.
elementos = arreglo.splice(pos, numElementosEliminar, newElement)
Elimina los numElementosEliminar elementos del array, a partir de la último pos y añade en dicha pos  el elementos newElement. Devuelve los elementos eliminados, si los hay.
*/
