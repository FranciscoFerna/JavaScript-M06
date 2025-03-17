// ARRAY

/*
Hemos visto métodos básicos de un Array para poder manipularlo.
array.push()
array.pop(),
array.shift(),
array.unshift()
array.reverse()
array.sort()
array.concat()
array.join()
array.at()
array.with()

Veamos algunos más.

*/

/*
.forEach()

El método forEach en JavaScript permite recorrer un array y aplicar en cada uno de sus elementos una acción en particular a través de una función.

array.forEach(function(elementoActual, indice, array));
//elementoActual: es el valor del elemento actual del array.
//índice: es el índice del elemento actual del array (opcional).
//array: es el array que se está recorriendo (opcional).

No necesitamos pasarle el arrays, puesto que es un MÉTODO de la clase ARRAY
*/
const vocales = ["a", "e", "i", "o", "u"];

vocales.forEach(function (vocal, indice, arr) {
console.log(`El valor del elemento en la posición ${indice} es ${vocal} del array que estamos recorriendo que es ${arr}`);
});

//Funciones anónimas
let numeros = [10, 20, 30, 40, 50];
numeros.forEach(function(numero) {
    console.log(numero);
});

// Array de precios
const precios = [25,150,80,30,200];

// Array auxiliar para almacenar los precios filtrados
const preciosFiltrados = [];

// Filtrar precios con precio mayor a 100 utilizando forEach
precios.forEach((precio) => {
  if (precio > 100) {
    preciosFiltrados.push(precio);
  }
});

// Imprimir los precios filtrados por consola
console.log(preciosFiltrados);
/*
[150,200]
*/

/*
.every() //.some()

Como su nombre indica, .every() devuelve true si todos los elementos del array cumplen la condición, false en caso contrario.

.some(), devuelve true si alguno de los elementos cumple la condición y false si ninguno la cumple.
*/
let arrayNotas = [5.2, 3.9, 6, 9.75, 7.5, 3]
let todosAprobados = arrayNotas.every(nota  => nota >=  5)   // false
let algunAprobado = arrayNotas.some(nota  => nota >=  5)     // true


console.log(todosAprobados)
console.log(algunAprobado)

/*
.find()

Retorna el primer elemento que cumpla, en caso contrario retorna undefined.

.findIndex()
Retorna la posición del primer elemento que cumpla, en caso contrario retorna -1. Tiene más sentido en el trabajo por objetos.
*/
let arrayNotasNuevas = [5.2, 3.9, 6, 9.75, 7.5, 3]
let primerAprobado = arrayNotasNuevas.find(nota  => nota >=  5)    // primerAprobado = 5.2

//Veremos más adelante objetos, pero si imaginemos la clase alumno con propiedades como:
//nombre, apellido, dni, dirección
//Sería ideal poder buscar un alumno con un DNI concreto:
// let alumnoBuscada = alumnos.find(alumno  => alumno.dni === '21345678Z')    // devolverá el objeto completo

/*
.map() //.reduce()

.map() es un método bastante empleado. Permite aplicar un mismo cambio a todos los elementos de una array creando un array nuevo con los cambios incorporados.

.reduce() permite obtener un valor calculado que se aplica a todos los elementos del array. Al ser un cálculo opcionalmente le podemos pasar el valor inicial, en caso contrario tomará el primer elemento.
*/
let arrayNotasNew = [5.2, 3.9, 6, 9.75, 7.5, 3]
let arrayNotasSubidas = arrayNotasNew.map(nota  => nota + nota * 0.10)

let arrayNotasReduce = [5.2, 3.9, 6, 9.75, 7.5, 3]
let sumaNotasReduce = arrayNotasReduce.reduce((total,nota)  => total+nota, 0)    // total = 35.35
// podríamos haber omitido el valor inicial 0 para total
let sumaNotas = arrayNotasReduce.reduce((total,nota)  => total+nota)    // total = 35.35

//Pero también pudo querer obtener la nota más alta
let maxNota = arrayNotasReduce.reduce((max,nota)  => nota > max ? nota : max)    // max = 9.75


/*
FUNCIÓN Array.from()

Devuelve un nuevo array a partir de otro al que se le puede aplicar una función de transformación (es similar a map, no requiere el objeto instanciado para ser llamado).

Al ser una función le tenemos que pasar como parámetro el array original.
*/
let arrayNotasFrom = [5.2, 3.9, 6, 9.75, 7.5, 3]
let arrayNotasSubidasFrom = Array.from(arrayNotasFrom, nota  => nota + nota * 0.10)

/*
SET

Es una colección de elementos que no pueden estar repetidos. La clase SET es muy parecida a la de ARRAY, pero tiene sus propias propiedades y métodos, es decir otro comportamiento.

Estas son algunas de las propiedades y métodos de la estructura de tipo SET

Es posible crear un Set a partir de un Array, pero debemos saber que si hay elementos repetidos en el array, en el set solo habrá uno.

*/
//creación
let gadgets = new Set(['movil','tablet','portatil']);
console.log(gadgets);

//NO EXISTE!! console.log(gadgets.length);
console.log("Medida: "+gadgets.size);

//Añado elementos
gadgets.add("reloj");
gadgets.add("tv");
gadgets.add("tv"); //No lo agrega, ya existe.
gadgets.add("tv"); //No lo agrega, ya existe.

//recorrer y muestro
for(let item of gadgets){
    console.log("Item: "+item);
}

console.log("Elimino reloj ");
//eliminamos un elemento.
gadgets.delete("reloj");

console.log("Reloj?"+ gadgets.has("reloj"));

//Ordenado en el mismo
gadgets.forEach(item => console.log(item));

//Limpio todo el set, lo vacio.
console.log("VACIO SET");
gadgets.clear();
gadgets.forEach(item => console.log(item));

let nombres = ['jose', 'maria', 'lola', 'jose', 'david', 'lola'];
let nombresUnicosSet = new Set(nombres)
console.log(nombresUnicosSet);// Expected output: Set(4) {'jose', 'maria', 'lola', 'david'}
//si lo queremos en un array:
let nombresUnicosArray = Array.from(nombresUnicosSet);
console.log(nombresUnicosArray);// Expected output:  (4) ['jose', 'maria', 'lola', 'david']


/*
MAP

Los Map en Javascript son estructuras de datos nativas que permiten implementar una estructura de tipo mapa, es decir, una estructuras donde tiene valores guardados a través de una clave para identificarlos. Comúnmente, esto se denomina pares clave-valor.

Estas son algunas de las propiedades y métodos de la estructura de tipo MAP

Existen dos métodos muy interesantes: .keys() y .values(), ambos devuelven un objeto de tipo iterator, sin embargo usando la función Array.from(), podemos covertilo en arrays.

*/
const map1 = new Map(); // Mapa Vacio
map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a')); // Expected output: 1

map1.set('a', 97); //Cómo ya existe se actualiza el valor.
console.log(map1.get('a')); // Expected output: 97

console.log(map1.size); // Expected output: 3
map1.delete('b');
console.log(map1.size); // Expected output: 2
console.log(map1.keys()); // Expected output: a,c

let array = Array.from(map1.keys());
console.log(array) // Expected output: [a,c]
array.push('z')
array.push('a')
console.log(array) //Expected output: ['a', 'c', 'z', 'a']

/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
