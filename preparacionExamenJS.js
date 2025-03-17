/*
========================================
  📌 1️⃣ TIPOS DE DATOS Y OPERADORES
========================================
*/

// Tipos de datos primitivos en JS
let numero = 42; // number
let texto = "Hola"; // string
let booleano = true; // boolean
let nulo = null; // null
let indefinido; // undefined
let simbolo = Symbol(); // symbol (único e inmutable)

// Ver el tipo de una variable
console.log(typeof numero); // "number"
console.log(typeof texto); // "string"
console.log(typeof booleano); // "boolean"
console.log(typeof nulo); // "object" (error histórico de JS)
console.log(typeof indefinido); // "undefined"
console.log(typeof simbolo); // "symbol"

/*
========================================
  📌 2️⃣ MÉTODOS DE ARRAYS
========================================
*/

let numeros = [1, 2, 3, 4, 5];

// 🔹 forEach() -> Itera el array SIN devolver nada
numeros.forEach((num) => console.log(num * 2));
// 2, 4, 6, 8, 10

// 🔹 map() -> Transforma el array y devuelve uno nuevo
let dobles = numeros.map((num) => num * 2);
console.log(dobles); // [2, 4, 6, 8, 10]

// 🔹 filter() -> Filtra elementos que cumplan una condición
let mayoresQue2 = numeros.filter((num) => num > 2);
console.log(mayoresQue2); // [3, 4, 5]

// 🔹 reduce() -> Reduce el array a un solo valor
let suma = numeros.reduce((acc, num) => acc + num, 0);
console.log(suma); // 15

// 🔹 find() -> Devuelve el primer elemento que cumpla la condición
let encontrado = numeros.find((num) => num > 2);
console.log(encontrado); // 3

// 🔹 some() -> Devuelve true si al menos UN elemento cumple
console.log(numeros.some((num) => num > 4)); // true

// 🔹 every() -> Devuelve true si TODOS cumplen
console.log(numeros.every((num) => num > 0)); // true

// 🔹 includes() -> Verifica si un valor está en el array
console.log(numeros.includes(3)); // true

// 🔹 indexOf() -> Devuelve el índice de un valor
console.log(numeros.indexOf(3)); // 2

// 🔹 sort() -> Ordena el array
let desordenado = [3, 1, 4, 2, 5];
desordenado.sort((a, b) => a - b);
console.log(desordenado); // [1, 2, 3, 4, 5]

// 🔹 reverse() -> Invierte el array
console.log(numeros.slice().reverse()); // [5, 4, 3, 2, 1]

// 🔹 slice() -> Extrae una parte del array
console.log(numeros.slice(1, 4)); // [2, 3, 4]

// 🔹 splice() -> Modifica el array (elimina/reemplaza/agrega)
let nombres = ["Ana", "Luis", "Carlos"];
nombres.splice(1, 1, "María");
console.log(nombres); // ["Ana", "María", "Carlos"]

/*
========================================
  📌 3️⃣ OBJETOS Y JSON
========================================
*/

let persona = { nombre: "Juan", edad: 25, ciudad: "Madrid" };

// 🔹 Object.keys() -> Devuelve un array con las claves
console.log(Object.keys(persona)); // ["nombre", "edad", "ciudad"]

// 🔹 Object.values() -> Devuelve un array con los valores
console.log(Object.values(persona)); // ["Juan", 25, "Madrid"]

// 🔹 Object.entries() -> Devuelve pares clave-valor
console.log(Object.entries(persona));
// [["nombre", "Juan"], ["edad", 25], ["ciudad", "Madrid"]]

// 🔹 JSON.stringify() -> Convierte objeto a JSON
let json = JSON.stringify(persona);
console.log(json); // '{"nombre":"Juan","edad":25,"ciudad":"Madrid"}'

// 🔹 JSON.parse() -> Convierte JSON a objeto
let obj = JSON.parse(json);
console.log(obj.nombre); // "Juan"

/*
========================================
  📌 4️⃣ PROGRAMACIÓN ORIENTADA A OBJETOS (POO)
========================================
*/

// 🔹 Definir una clase con constructor
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}

let p1 = new Persona("Carlos", 30);
p1.saludar(); // "Hola, soy Carlos y tengo 30 años."

// 🔹 Herencia en clases
class Estudiante extends Persona {
  constructor(nombre, edad, curso) {
    super(nombre, edad);
    this.curso = curso;
  }

  info() {
    console.log(`${this.nombre} estudia ${this.curso}.`);
  }
}

let estudiante1 = new Estudiante("Ana", 20, "DAWe");
estudiante1.saludar(); // "Hola, soy Ana y tengo 20 años."
estudiante1.info(); // "Ana estudia DAWe."

// 🔹 Getters y Setters
class Coche {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  get descripcion() {
    return `${this.marca} ${this.modelo}`;
  }

  set cambiarModelo(nuevoModelo) {
    this.modelo = nuevoModelo;
  }
}

let miCoche = new Coche("Toyota", "Corolla");
console.log(miCoche.descripcion); // "Toyota Corolla"
miCoche.cambiarModelo = "Yaris";
console.log(miCoche.descripcion); // "Toyota Yaris"
