// Declaracion de la funcion y paso de parametros
function nombreDeLaFuncion(parametro1, parametro2) {
  // Codigo de la funcion
  return parametro1 + parametro2;
}

// Llamado de la funcion
var resultado = console.log(nombreDeLaFuncion(1, 2));

// A las funciones se les pueden pasar o no párametros, que no son mas que variables que se pasan a la función para que esta las utilice en su código.

// Declaracion de la funcion y paso de parametros
function tablaMultiplicar(tabla, hasta) {
  for (i = 0; i <= hasta; i++) console.log(tabla + ' x ' + i + ' = ' + tabla * i);
}

// Ejecucion de la funcion
tablaMultiplicar(5, 10);
tablaMultiplicar(2, 10);


// La palabra reservada return se utiliza para devolver un valor de la función.
// Si es una variable global no hace falta pasarla, pero hay que saber que se vera afecyada por lo que le hagamos en la funcion, esto es una practica no recomendada.


// Variable global
var resultado = 0;

function multiplica(a,b) {
  resultado = a * b;
}

// Fuera de la funcion
multiplica(2,3);
console.log(resultado); // 6


// Fuera de la funcion
function suma (a,b) {
  return a + b;
}
resultado = suma(2,3);
console.log("Return: El resultado de esta suma es: " + resultado); // 5

// Funciones procedimientos y métodos
// Una funcion recibe o no parametros y devuelve o no un valor, si no devuelve nada se le llama procedimiento.
// En la POO los metodos son aquellas funciones que pertenecen a una clase.

// Parametros

// Si se llama una funcion con menos parametros de los declarados, el valor de los parametros no pasados sera undefined.
function potencia(base, exponente) {
  console.log(base);
  console.log(exponente);
  let valor = 1;
  for (let i = 1; i <=exponente; i++) {
    valor = valor * base;
  }
  return valor;
}
potencia(4); // No se puede ejecutar el for porque no se paso el segundo parametro.


// Podemos dar un valor por defecto a los parametros, por si no los pasan asignarles un valor por defecto.
function potenciaVDos(base, exponente = 2) {
  console.log(base);
  console.log(exponente);
  let valor = 1;
  for (let i = 1; i <=exponente; i++) {
    valor = valor * base;
  }
  return valor;
}
console.log(potenciaVDos(4)); // 16

// Regla de los parametros
// No especificamos el tipo de dato
// No se verifican los tipos de argumentos
// No se comprueba el numero de argumentos
// Si faltan y se necesitan saltara una excepcion, o devolvera null o undefined. El programador debe controlar esto
// Si hay excesso de argumentos todos pasaran al objeto arguments que esta en todas las funciones y es un array con todos los argumentos pasados a la funcion.

// FALTA DE PARAMETROS
function suma(a,b) {
  // if (b === undefined) {b = 0;}
  return a + b;
}

var suma = suma(2);
console.log(suma); // 2


//  EXCESO DE PARAMETROS
function valores() {
  console.log(arguments.length); // 9
  for (let x of arguments) {
    console.log(typeof(x), x); // number 2 number 4 ...
  }
}
valores(2,3,6,8,'nueve', '29/02/2024', [2,3,4]);


// Funcion anonima
// Las funcio nes anonimas son funciones que no tienen nombre y se asignan a una variable o se pasan como argumento a otra funcion.
// Las funciones anonimas se crean mediante la asignacion de una funcion a una variable o pasandole como argumento otra funcion.

var multiply = function(x, y) {
  return x * y;
}

document.form1.colorButton.onclick = function(event) {
  setBGColor();
}

my_element.addEventListener("click", function(event) {
  console.log(this.className);
  console.log(e.currentTarget === this);
});


// Hay varias razones por las que las funciones anónimas son interesantes y útiles en JavaScript:

// Encapsulamiento de funcionalidad: Las funciones anónimas permiten encapsular un fragmento de código sin tener que asignarle un nombre específico. Esto es útil cuando la funcionalidad es específica de un contexto y no necesita ser utilizada en otros lugares de nuestro código.

// Declaraciones de funciones en línea: Cuando necesitamos una función para un propósito muy específico y no queremos contaminar el espacio de nombres global con una declaración de función separada, las funciones anónimas son ideales. Podemos definirlas justo donde las necesitamos, lo que hace que el código sea más claro y conciso.

// Expresiones de función: Las funciones anónimas son una forma de expresar funciones en JavaScript. Esto significa que podemos asignar una función a una variable y luego usar esa variable para llamar a la función. Esto puede hacer que nuestro código sea más dinámico y flexible.

// Callbacks y funciones de orden superior: Las funciones anónimas son comúnmente utilizadas como callbacks* o funciones de orden superior en JavaScript. Esto significa que pueden ser pasadas como argumentos a otras funciones para ser ejecutadas más tarde, lo que es esencial para implementar el estilo de programación asincrónica y la programación funcional en JavaScript.

// En resumen, las funciones anónimas son una característica poderosa de JavaScript que nos permite escribir código más modular, limpio y flexible. Nos permiten encapsular funcionalidad, trabajar con callbacks y funciones de orden superior, y expresar funciones de manera más concisa.


// Funcion anonima: Encapsulamiento de funcionalidad
// Las funciones anonimas permiten encapsular un fragmento de codigo sin tener que asignarle un nombre especifico. Esto es util cuando la funcionalidad es especifica de un contexto y no necesita ser utilizada en otros lugares de nuestro codigo.

// (function (<parametros>) {
//   <instrucciones>
// }) (<argumentos>);

(function () {
  console.log("Ejecutando una funcion anonima");
  return "Genial!";
})();


// Asi seria un ejemplo con un parametro:
(function (edad) {
  console.log("Ejecutando una funcion anonima");
  return "Genial!. Tu edad es: " + edad;
}) (30);


// La funcion anonima: Asignar a una variable

let producto = function(a,b) {return a * b;};
let resultado = producto(2,3); // Para ejecutarla llamamos al nombre de la variable quer la almacena
console.log(resultado); // 6

// Funcion anonima usando constructor
let producto2 = new Function("a", "b", "return a * b;");
console.log(producto2(2,3)); // 6


// Funcion anonima: Callbacks y funciones de orden superior

// Una "callback" en JavaScript es una función que se pasa como argumento a otra función y se ejecuta después de que algún evento haya ocurrido o una operación asíncrona se haya completado. En otras palabras, es una función que se llama de vuelta ("call back") en algún momento futuro, generalmente después de que se haya completado una tarea.

// Cuando definimos eventos en JavaScript, estamos utilizando callbacks.

// Cuando asignas un manejador de eventos a un elemento HTML, como un botón, mediante JavaScript, típicamente pasas una función (callback) que se ejecutará cuando ocurra el evento especificado. Esta función se llamará de vuelta ("callback") en respuesta al evento.

// Por ejemplo, en el siguiente código, se asigna un manejador de eventos de clic a un botón usando la función addEventListener. La función pasada (miCallback) es la callback que se ejecutará cuando el botón sea clicado:


const boton = document.getElementById("miBoton");
function myCallback() {
  console.log("El botón fue clicado");
}
boton.addEventListener("click", myCallback);
// En este ejemplo, myCallback es la callback que se ejecutará cuando el botón sea clicado.

// Funcion Flecha
// Las funciones de flecha son una característica introducida en ECMAScript 6 que proporciona una forma más concisa de escribir funciones en JavaScript. Son una forma alternativa de definir funciones en JavaScript que ofrecen algunas ventajas sobre las funciones tradicionales.

// Las funciones de flecha se definen utilizando una sintaxis más corta y limpia que las funciones tradicionales. En lugar de la palabra clave function, se utiliza una flecha (=>) para definir la función. Esto hace que el código sea más legible y fácil de entender.

// Las funciones de flecha también tienen un comportamiento especial en cuanto al ámbito de las variables (this). En las funciones tradicionales, el valor de this depende de cómo se llama la función. En las funciones de flecha, el valor de this se hereda del ámbito en el que se define la función. Esto significa que las funciones de flecha son ideales para trabajar con métodos de objetos y callbacks.

// Las funciones de flecha son especialmente útiles cuando se trabaja con funciones de orden superior, como map, filter y reduce, que toman funciones como argumentos. Al utilizar funciones de flecha en lugar de funciones tradicionales, se puede escribir un código más conciso y legible.

// En resumen, las funciones de flecha son una característica poderosa de JavaScript que proporciona una forma más concisa y legible de definir funciones. Son ideales para trabajar con métodos de objetos y callbacks, y ofrecen algunas ventajas sobre las funciones tradicionales en términos de legibilidad y comportamiento del ámbito de las variables.

// Funcion normal
function pulgadaACm(pulgadas) {
  return pulgadas * 2.54;
}
// Funcion flecha
const pulgadaACm2 = (pulgadas) => pulgadas * 2.54;


// Paso a paso como transformar una declaraion de funcion clasica o normal a una Arrow Function

// Tenemos una funcion clasica o normal
function pulgadaACm(pulgadas) {
  return pulgadas * 2.54;
}
// La transformamos a anonima como expresion
const pulgadaACm = function (pulgadas) {
  return pulgadas * 2.54;
}
// Le quitamos la palabra reservada function y le agregamos la flecha
const pulgadaACm = (pulgadas) =>  {
  return pulgadas * 2.54;
}
// Ahora transformamos el return en un implicito
const pulgadaACm = (pulgadas) => pulgadas * 2.54;
// Si solo tiene un parametro se pueden quitar los parentesis
const pulgadaACm = pulgadas => pulgadas * 2.54;
