# **Mini Chuleta JavaScript - Métodos Claves**

## **1️⃣ Métodos de Arrays**

### 🔹 **forEach()** - Recorre el array (sin devolver nada)
```js
let numeros = [1, 2, 3, 4, 5];
numeros.forEach(num => console.log(num * 2));
// 2, 4, 6, 8, 10
```

### 🔹 **map()** - Transforma el array (devuelve un nuevo array)
```js
let dobles = numeros.map(num => num * 2);
console.log(dobles); // [2, 4, 6, 8, 10]
```

### 🔹 **filter()** - Filtra elementos que cumplan una condición
```js
let mayoresQue2 = numeros.filter(num => num > 2);
console.log(mayoresQue2); // [3, 4, 5]
```

### 🔹 **reduce()** - Reduce el array a un solo valor
```js
let suma = numeros.reduce((acc, num) => acc + num, 0);
console.log(suma); // 15
```

### 🔹 **find()** - Devuelve el **primer** elemento que cumpla una condición
```js
let encontrado = numeros.find(num => num > 2);
console.log(encontrado); // 3
```

### 🔹 **findIndex()** - Devuelve el **índice** del primer elemento que cumpla la condición
```js
let indice = numeros.findIndex(num => num > 2);
console.log(indice); // 2
```

### 🔹 **some()** - Devuelve `true` si **al menos un elemento** cumple la condición
```js
let hayMayoresDe4 = numeros.some(num => num > 4);
console.log(hayMayoresDe4); // true
```

### 🔹 **every()** - Devuelve `true` si **todos los elementos** cumplen la condición
```js
let todosPositivos = numeros.every(num => num > 0);
console.log(todosPositivos); // true
```

### 🔹 **includes()** - Verifica si un valor está en el array
```js
console.log(numeros.includes(3)); // true
console.log(numeros.includes(10)); // false
```

### 🔹 **indexOf()** - Devuelve el índice de un valor (o -1 si no está)
```js
console.log(numeros.indexOf(3)); // 2
console.log(numeros.indexOf(10)); // -1
```

### 🔹 **sort()** - Ordena el array
```js
let desordenado = [3, 1, 4, 2, 5];
desordenado.sort((a, b) => a - b);
console.log(desordenado); // [1, 2, 3, 4, 5]
```

### 🔹 **reverse()** - Invierte el array
```js
let alReves = numeros.slice().reverse();
console.log(alReves); // [5, 4, 3, 2, 1]
```

### 🔹 **slice()** - Extrae una parte del array (sin modificarlo)
```js
let parcial = numeros.slice(1, 4);
console.log(parcial); // [2, 3, 4]
```

### 🔹 **splice()** - Añade, reemplaza o elimina elementos
```js
let nombres = ["Ana", "Luis", "Carlos"];
nombres.splice(1, 1, "María");
console.log(nombres); // ["Ana", "María", "Carlos"]
```

---

## **2️⃣ Métodos de Objetos y JSON**

### 🔹 **Object.keys()** - Devuelve un array con las claves
```js
let persona = { nombre: "Juan", edad: 25, ciudad: "Madrid" };
console.log(Object.keys(persona)); // ["nombre", "edad", "ciudad"]
```

### 🔹 **Object.values()** - Devuelve un array con los valores
```js
console.log(Object.values(persona)); // ["Juan", 25, "Madrid"]
```

### 🔹 **Object.entries()** - Devuelve un array con pares `[clave, valor]`
```js
console.log(Object.entries(persona));
// [["nombre", "Juan"], ["edad", 25], ["ciudad", "Madrid"]]
```

### 🔹 **Object.assign()** - Clona o combina objetos
```js
let copia = Object.assign({}, persona);
console.log(copia); // { nombre: "Juan", edad: 25, ciudad: "Madrid" }
```

### 🔹 **JSON.stringify()** - Convierte un objeto a JSON
```js
let json = JSON.stringify(persona);
console.log(json); // '{"nombre":"Juan","edad":25,"ciudad":"Madrid"}'
```

### 🔹 **JSON.parse()** - Convierte JSON a objeto
```js
let obj = JSON.parse(json);
console.log(obj.nombre); // "Juan"
```

---

## **3️⃣ Programación Orientada a Objetos (POO)**

### 🔹 **Definir una clase con constructor**
```js
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
```

### 🔹 **Herencia en clases (`extends` y `super`)**
```js
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
```

### 🔹 **Getters y Setters**
```js
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
```
