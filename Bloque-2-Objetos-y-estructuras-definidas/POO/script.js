/*
La Programación Orientada a Objetos (POO, o en inglés OOP) es un estilo de programación muy utilizado, donde creas y utilizas estructuras de datos de una forma muy similar a la “vida real”.

En este paradigma de la programación la dificultad radica en definir las diferentes estructuras:
Propiedades → Características de esa estructura.
Métodos → Comportamiento, que puede o no hacer.

A esta estructura la llamaremos CLASE. Este es un concepto abstracto, un molde. Pero será gracias a esta definición de esta clase que podremos crear tantos objetos como queramos, siendo cada uno de ellos diferentes.

La clase es la abstracción el objeto es la concreción
*/

/*
CLASE

Definir una clase implica un nivel de abstracción puesto que buscamos representar la realidad.

Definiremos una clase usando la palabra class seguido del nombre de la clase.

Las propiedades nos permiten guardar el estado del objeto y los métodos son los que definen el comportamiento de todos los objetos de ese tipo.

El constructor crea un objeto del tipo de la clase usada y lo deja en un estado válido (con las propiedades que sean necesarias inicializadas). Ya sea con los parámetros recibidos o con los valores por defecto. Las propiedades que se encuentren inicializadas en el constructor no hace falta que estén indicadas como propiedades.

En JS solo existe un constructor.

class Coche{
   constructor(matricula, potencia) {
//Estas son las propiedades del coche
       this.marca = "Seat";
       this.modelo = "Ibiza";
       this.color = "blanco";
       this.precio = 21000;
 this.matricula = matricula;
 this.potencia = potencia;
     }
   //Métodos
   informa(){}
   arranca(){}
   para(){}
   acelera(){}
   frena(){}
}

*/
class Coche {
  //Propiedades privadas
  #matricula;
  //Y las que quiera públicas que no esten en el constructor
  precio;
  constructor(marca, modelo, color, potencia) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.potencia = potencia;
    this.#matricula = "1234 ABC";
    this.informa = function () {
      console.log("Coche nuevo: " + this.modelo);
    };
  }
  //Métodos que definen el comportamiento
  arranca() {}
  para() {}
  acelera() {}
  frena() {}
  calculaPrecio() {
    return this.precio * 219;
  }
  //getters y setters
  get matricula() {
    return this.#matricula;
  }
  get informacion() {
    return this.modelo + " " + this.marca;
  }
  set informacion(nc) {
    this.modelo = nc.split(",")[1];
    this.marca = nc.split(",")[0];
  }
  set matricula(matricula) {
    this.#matricula = matricula;
  }
} //Fin coche

/*
Constructor

Si lo que realmente queremos es instanciar un objeto de una clase, usaremos el constructor, que no es más que una función que se llama automáticamente al llamar a new y que “inicializa” las propiedades a unos valores por defecto o a los valores que le pasemos por parámetro.
En el constructor también podemos definir métodos y guardarlos en una variable.

Dentro del constructor usaremos this. Para hacer referencia a las propiedades de esta instancia concreta.
*/
let miCoche2 = new Coche("Volkswagen", "Polo", "azul", 90);
miCoche2.informa();

/*
Propiedades Public o Private

Cuando definimos cuáles son los atributos públicos o privados, así como los métodos que acceden a ellos, estamos haciendo una encapsulación.

Una propiedad pública es la que se pueda acceder desde dentro y desde fuera de la clase.

Un propiedad privada SÓLO podemos acceder desde dentro de la clase. Si queremos modificarla u obtenerla deberemos crear un método específico para ella; normalmente un getter/setter. De esta manera nos aseguramos que si hay alguna regla de negocio que no obliga  a hacer ciertas comprobaciones antes de modificar, esto se cumpla.
*/
const miCoche = new Coche("seat", "ibiza", "blanco", "110cv");
miCoche.precio = 100;
console.log(
  `Mi coche es un ${miCoche.modelo} con matricula ${
    miCoche.matricula
  } con precio ${miCoche.calculaPrecio()}`
);

/*
Propiedades Computadas: Getters y Setters

Computed property. Además de la versión que ya hemos comentado de los getters y setters, JS nos ofrece una más interesante. Se trata de “crear propiedades” (en realidad funciones) que son la concatenación de varias, pero de cara al usuario no habrá diferencia.

La llamada será una llamada como si fuera una propiedad y no una función. De esta manera nadie sabe que la propiedad es privada
*/

/*
Métodos
Un método es el nombre que recibe una función que existe dentro de una clase. Se utilizan para englobar comportamientos o funcionalidades relacionadas en conjunto con la clase y mediante las cuales podemos segmentar y separar en bloques de código.

Desde un método de la clase podemos acceder a todas las propiedades, ya sean públicas o privadas, pero siempre usando this.
*/

/*
Herencia y polimorfismo

CLASE

Habíamos definido la clase Coche anteriormente, con una serie de propiedades y de métodos.

Si nos paramos a pensar, algunos vehículos tienen otras o más propiedades y también pueden tener más comportamientos (métodos). ¿Cómo lo hacemos?
*/

/*
Herencia

Una clase puede heredar de otra utilizando la palabra reservada extends y heredará todas sus propiedades y métodos.
Dentro del nuevo constructor debemos llamar al constructor de la clase padre usando super().
Las propiedades privadas no se heredan.
*/
class Autocaravana extends Coche {
  camas;
  constructor(marca, modelo, color, potencia, camas) {
    super(marca, modelo, color, potencia);
    this.camas = camas;
  }
  getMatricula() {
    return this.matricula;
  }
  nivelar() {}
}

let miAutocaravana = new Autocaravana("Volkswagen", "Caravelle", "azul", 90, 4);
miAutocaravana.matricula = "9876 ZAS"; // No va, es privada. Estamos creando un nuevo atributo para esta instancia.
console.log(
  `Mi autocaravana es un ${
    miAutocaravana.modelo
  } con matricula ${miAutocaravana.getMatricula()}`
);

/*
Polimorfismo por Sobreescritura (Override)

Cuando heredamos podemos sobreescribir (sobrecargar) los métodos. Eso quiere decir que los métodos que existen en la clase padre pueden volver a ser definidos en la clase hija.
Dentro de la clase sobrecargada podemos llamar a la clase padre.
No es necesario sobreescribir todos los métodos, se llamarán a los de la clase padre por defecto.
OJO: JavaScript no soporta sobrecarga de métodos, pero podemos simularlo con parámetros opcionales o condicionales.

class Autocaravana extends Coche{
   arranca(){
       return "Brum brum";
   }
   para(){
       return super.para() + " Acuerdate de nivelar";
   }
}
console.log(miAutocaravana.arranca());
console.log(miAutocaravana.frena()); // Llama al método de coche directamente.
console.log(miAutocaravana.para());

*/

/*
Herencia de Object

Trabajando con objetos, a veces, queremos printarlos, compararlos, ordenarlos…etc. Para ello JS tratará de transformar el objeto a un tipo de datos primitivo (string, number,etc) y es cuando buscará los métodos .toString(); y .valueOf();

Todos los objetos, sean de la clase que sean o del tipo que sean tienen estos métodos, pero seremos nosotros los que decidamos sobreescribirlos o no.

El método toString devuelve un string "[object Object]".
El método valueOf devuelve el objeto en sí.

Cuando se necesita un “string”: JS llamará a toString primero; pero si no existe, o si devuelve un objeto en lugar de un valor primitivo, llama a valueOf (así, toString tiene prioridad en conversiones string).
Ej: sort()

Para otras sugerencias: trata de llamar a valueOf primero; y si no existe, o si devuelve un objeto en lugar de un valor primitivo, llama a toString (así, valueOf tiene prioridad para matemáticas).
Ej. operadores de comparación (==,!=;<=,etc)
*/

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  toString() {
    //Segundo
    return this.nombre;
  }
  valueOf() {
    //Primero
    return this.edad;
  }
}

let p1 = new Persona("Alicia", 45);
let p2 = new Persona("Zoilo", 15);

console.log("p1>p2?");
console.log(p1 > p2);

console.log("p1 " + p1); //Busca el valueOf
console.log(`p1  ${p1}`); //Busca el toString
console.log(p1);

/*
Interfaces y clases abstractas

JavaScript no tiene clases abstractas, pero podemos simularlas usando validaciones en el constructor y métodos que lanzan errores, obligando a ser sobreescritos en clases que hereden..

JavaScript no tiene interfaces como TypeScript o Java, pero podemos simularlas con mixins.
*/

/*
NOTA: Buenas prácticas

Para ordenar nuestro código y hacerlo amigable y escalable, acordaremos hacer un fichero JavaScript para cada clase. Será importante tener un fichero de main quien deberá importar todas las clases

// Personaje.js
// Clase base Personaje
export class Personaje {...}

// Guerrero.js
import { Personaje } from "./Personaje.js";
// Subclase Guerrero
export class Guerrero extends Personaje {...}

// Mago.js
import { Personaje } from "./Personaje.js";
// Subclase Mago
export class Mago extends Personaje {...}

// Eje3_POO.js (main)
import { Guerrero } from "./Guerrero.js";
import { Mago } from "./Mago.js";

// Eje3_POO.html
<script type="module" src="Eje3_POO.js" defer></script>
*/

/*
Inyección de dependencias

La inyección de dependencias (DI) es un patrón que permite desacoplar clases al pasarles las dependencias desde el exterior en lugar de instanciarlas dentro de la clase.

Las instanciamos fuera y luego las asignamos a una variable de dentro de la clase.

La inyección de dependencias permite un acoplamiento débil, no hay interdependencias entre las clases y fácilmente podemos cambiar una por otra. En este caso un motor por otro.

class Motor {
   encender() {
     return "El motor encendido.";
   }
 }
  class Coche {
   constructor() {
     this.motor = new Motor();
   }
    arrancar() {
     return this.motor.encender();
   }
 }
// Crear instancia de Coche
 const coche = new Coche();
 console.log(coche.arrancar());

 class Motor {
   encender() {
       return "El motor encendido.";
   }
}
class Coche {
   constructor(motor) {
       this.motor = motor;
   }
   arrancar() {
       return this.motor.encender();
   }
}
// Inyección de dependencias
const motor = new Motor();
const coche = new Coche(motor);
console.log(auto.arrancar());

*/

/*
Buenas prácticas

Algunas buenas prácticas para escribir código limpio y escalable en POO con JavaScript:

Usar clases y encapsulación: Definir propiedades privadas (#) y exponer solo lo necesario con get y set.
Aplicar el principio de responsabilidad única: Cada clase debe tener una sola responsabilidad clara (Single responsability).
Evitar acoplamiento: Usar inyección de dependencias para mejorar la modularidad.
Herencia con moderación: Prefiere la composición sobre la herencia excesiva.
Aplicar SOLID: Seguir los principios SOLID para
mejorar la mantenibilidad.

*/

/*
Static

Un método estático en JavaScript se define con la palabra clave static dentro de una clase.
Un método static:
Pertenecen a la clase, no a las instancias. → Math.random(), JSON.parse().
Se llaman con Clase.metodo(), no con this y, por lo tanto, no puede acceder a los atributos de la clase con this al no existir la instancia.

Las variables estáticas dentro de una clase es una variable compartida para TODAS las instancias y el valor será el mismo sea la instancia que sea.
Es una propiedad de clase, no de instancia.
Se comparte entre todas las instancias de la clase.
Se accede con Clase.propiedad, no con this.
*/

class Alumno {
  static contador = 0; // Variable estática
  constructor(nombre) {
    this.nombre = nombre;
    Alumno.contador++; // Incrementa la variable estática
  }
  static totalAlumnos() {
    return `Total de Alumnos: ${Alumno.contador}`;
  }
}

const alum1 = new Alumno("Juan");
const alum2 = new Alumno("Ana");

console.log(Alumno.contador); // 2

console.log(Alumno.totalAlumnos()); // Usamos un método "Total de Alumnos: 2"

console.log(alum1.contador); // Error: no es accesible desde la instancia
