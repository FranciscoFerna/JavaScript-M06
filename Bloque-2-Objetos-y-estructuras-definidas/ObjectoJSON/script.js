// En Javascript, existe un tipo de dato llamado Object. No es más que una variable especial que puede contener más variables/propiedades en su interior. De esta forma, tenemos la posibilidad de organizar múltiples variables de la misma temática dentro de un objeto.

// En Javascript podemos definir cualquier variable como un objeto declarándola con new “construye el objeto”  o declarando literal object (usando notación JSON).

//Construcción con new
var alumno = new Object();
//TAMBIEN var alumno = {}
alumno.nombre = "Lucas";
alumno.apellidos = "Fernandez Martinez";
alumno.edad = 20;
alumno.curso = "DAWe1";

//Declaración con literal object
var alumno2 = {
  nombre: "Aina",
  apellidos: "Garcia López",
  edad: 21,
  curso: "DAMv1",
};

// Podemos acceder a las propiedades de un objeto directamente con un punto (.) o bien usando los corchetes [ ].

//ACCESO
console.log(alumno.nombre);
console.log(alumno.apellido);

console.log(alumno2["nombre"]);
console.log(alumno2["apellido"]);

//Añadimos más datos
alumno2.nota = 8;
console.log(alumno2); //Visualizamos todo el objeto.

/*
Pero hemos de tener en cuenta que:
Si intentamos acceder a propiedades que no existen no se produce un error, se devuelve undefined.
Sin embargo se genera un error si intentamos acceder a propiedades de algo que no es un objeto.
Para evitar ese error hay que comprobar que existan las propiedades previas usando el operador ?
*/

console.log(alumno.ciclo); // muestra undefined
// console.log(alumno.ciclo.descrip)     // se genera un ERROR
console.log(alumno.ciclo?.descrip); // muestra undefined o el valor si existiera

// Al ser un objeto un conjunto de propiedades podemos listarlas. En este caso el iterador no es un número, sino que corresponde al nombre de la propiedad del objeto.

// Nota mental: Piensa que hasta ahora cuando recorriamos un array, por ejemplo, el iterador era numérico y ya nos venía dado. Ahora es lo mismo, solo que le hemos dado un nombre al número.

function listaPropiedades(obj) {
  let result = ``;
  for (let p in obj) {
    result += `${p} = ${obj[p]}\n`;
  }
  return result;
}

console.log(alumno2);
console.log(listaPropiedades(alumno2));

// Una propiedad de un objeto puede ser una función.
alumno.getInfo = function () {
  return (
    "El alumno " +
    this.nombre +
    " " +
    this.apellidos +
    " tiene " +
    this.edad +
    " años"
  );
};
console.log(alumno.getInfo()); //El alumno Aina Garcia López tiene 21 años

// This. hace referencia al objeto que está instanciado y por lo tanto al que ejecuta ese método.

// Usando los [ ] podemos acceder a una propiedad a través de una variable. Esto nos permite ir creando propiedades del objeto dinámicamente. Además al usar los [ ] el nombre de las propiedades pueden tener el formato que queramos, espacio o ir creandolas iterativamente.

let propiedad = "nombre";
console.log(alumno[propiedad]); //Aina

propiedad = prompt("Qué propiedad quieres consultar", "apellidos");
console.log(alumno[propiedad]); //Garcia López

propiedad = prompt("Añade nueva propiedad", "curso");
let valor = prompt("Su valor", "1ero");
alumno[propiedad] = valor;
console.log(alumno); //{nombre: "Aina", apellidos: "Garcia López", edad: 21, ciclo: "DAMv1", curso: "1ero"}

for (let i = 1; i <= 3; i++) {
  alumno["telefono" + i] = prompt("Telefono" + i, 666555777);
}
console.log(alumno);

// Es posible querer comprobar si una propiedad existe o no dentro de un Objeto. Sabemos que si no existe directamente nos devuelve un undefined. Pero hay métodos más elegantes que nos devuelve un true/false si existe o no: hasOwnProperty() y in

console.log(alumno.notas); //undefined
console.log(alumno.notas?.m4); //undefined

console.log(alumno.hasOwnProperty("apellidos")); //true
console.log("edad" in alumno); //true
console.log("fecha nacimiento" in alumno); //false
let p = "telefono2";
console.log(p in alumno); //true

// Por el mero hecho de ser un Object, tiene métodos, puesto que no deja de ser una instancia de la clase Object.

// Mas metodos
const user = {
  name: "Manz",
  life: 99,
  power: 10,
  talk: function() {
    return "Hola!";
  }
};

Object.keys(user);// ["name", "life", "power", "talk"]
Object.values(user); // ["Manz", 99, 10, ƒ]
Object.entries(user);// [["name", "Manz"], ["life", 99], ["power", 10], ["talk", ƒ]]

// Obtener un objeto partiendo de dos arrays, uno de claves y otro de valores.
const keys = ["name", "life", "power", "talk"];
const values = ["Manz", 99, 10, function() { return "Hola" }];

const entries = [];
for (let i in keys) {
  const key = keys[i];
  const value = values[i];
  entries.push([key, value]);
}

const userNew = Object.fromEntries(entries);     // {name: 'Manz', life: 99, power: 10, talk: ƒ}
console.log(user);

// JSON.stringify() nos permite pasar objetos a un JSON (un string), serializar los datos para poder ser enviados.
// No serán pasados al string las propiedades de función (no está getInfo), ni las propiedades que su valor sea undefined

let jsonAlumno = JSON.stringify(alumno);
console.log(typeof(jsonAlumno) +" --> " + jsonAlumno); //string --> {"nombre":"Aina","apellidos":"Garcia López","edad":21,"ciclo":"DAMv1","telefono1":"666555777","telefono2":"666555777","telefono3":"666555777"}

// JSON.parse() es la función inversa, transforma un Json (string) en un objeto con todas sus propiedades. Deserializamos los objetos que nos llegan desde el servidor
