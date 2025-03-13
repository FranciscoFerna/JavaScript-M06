// number
let numero = 10;
let decimal = 10.5;

// string comillas simples o dobles
let nombre = 'Juan';
let apellido = "Perez";

// boolean
let verdadero = true;
let falso = false;

// undefined
let sinDefinir;

// null
let vacio = null;
// typeof nos devuelve el tipo de dato
console.log(typeof numero);


// metodos utiles de los numeros
let numero1 = 10;
let numero2 = 20.533254;

// toFixed() redondea un numero a la cantidad de decimales que le pasemos
console.log(numero2.toFixed(2));
// toLocaleString() nos devuelve el numero con separador de miles
console.log(numero2.toLocaleString());
// isNaN() nos devuelve true si el valor no es un numero
console.log(isNaN(numero1));
// isFinite() nos devuelve true si el valor es finito
console.log(isFinite(numero1));
// parseInt() nos devuelve un numero entero
console.log(parseInt(numero2));
// parseFloat() nos devuelve un numero decimal
console.log(parseFloat(numero2));
