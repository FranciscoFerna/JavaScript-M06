// number
let numero = 10;
let decimal = 10.5;

// string comillas simples o dobles
let nombre = "Juan";
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

// String
// Las cadenas de texto van entre comillas simples o dobles, es indiferente. Para forzar la conversion a cadena se usa la function String(valor)
// Algunos metodos y propiedades de las cadenas son:
/*
.length: devuelve la longitud de una cadena.
.charAt(posición): devuelve el carácter en esa posición
.indexOf(carácter): devuelve el número de la posición o -1 si no lo encuentra
.lastIndexOf(carácter): devuelve la posición del último carácter.
.substring(desde, hasta): devuelve una subcadena
.substr(desde, num caracteres):devuelve una subcadena
.replace(busco, reemplaza): Devuelve el string con el replace hecho.
.toLowerCase(): devuelve string en minúsculas.
.toUpperCase(): devuelve string en mayúsculas.
.localeCompare(cadena): devuelve -1 si la cadena a que se aplica el método es anterior alfabéticamente a ‘cadena’, 1 si es posterior y 0 si ambas son iguales. Tiene en cuenta caracteres locales como acentos ñ, ç, etc.
.trim(cadena): quita el exceso de espacios
.startsWith(cadena): devuelve true si el string empieza con la cadena.
.endsWith(cadena): devuelve true si el string acaba con la cadena.
.includes(cadena): devuelve true si el string contiene con la cadena.
.repeat(veces): devuelve una cadena con el string repetido N veces..
.split(separador): devuelve un array de cadenas/caracteres según separador.
.slice
*/

let nombreReal = "Francisco Fernandez";
let segundoApellido = "Navarro";
let profesion = "Trabajador en supermercado a tiempo parcial";
let nya = nombreReal + " " + apellido + "/n" + profesion;
console.log(nya);

let plantilla = `
  Template:
  Hola soy ${nombreReal} ${segundoApellido}
  y soy ${profesion}`;
console.log(plantilla);

/* Podemos usar el FOR.. OF cogiendo directamente el elemento que haya dentro de la cadena por ejemplo. */
function recorrerCadena(cadena) {
  let salida = "";
  for (const letra of cadena) {
    salida += letra + " , ";
  }
  return salida;
}
console.log(recorrerCadena("MeGustaMuchoJavaScript"));

/*
Los valores booleanos son true y false. Para convertir algo a booleano se puede usar Boolean(valor) aunque también puede hacerse con la doble negación (!!). Cualquier valor se evaluará a true excepto 0, NaN, null, undefined o una cadena vacía (‘’) que se evaluarán a false.

Los operadores lógicos son ! (negación), && (and), || (or). También tenemos 2 operadores de diferente: != y !== que se comportan como hemos dicho antes.

'3' == 3 --> true
3 == 3.0 --> true
0 == false --> true
'' == false --> true
' ' == false --> true
[] == false --> true
null == false --> false
undefined == false --> false
undefined == null --> true
undefined === null --> false
*/

/*
El tipo de dato Date nos permite manipular fechas, pero hemos de conocerlo bien sino es fácil equivocarse.
*/

// Obtenemos la fecha actual y la guardamos en la variable fecha
let fecha = new Date();

// Obtenemos la fecha 22 de Febrero de 2022, a las 22h20min22s
fecha = new Date("2022/02/22 22:20:22");

// Creamos una fecha pasando cada uno de sus componentes numéricos
// y, m son obligatorios, el resto no.
//new Date(y, m, d, h, min, s, ms);
fecha = new Date(2022, 3, 15);

/*
Una vez hemos creado una fecha y tenemos el objeto , podemos obtener todas sus variables a través de sus métodos. Los getters son:

getDay() Devuelve el día de la semana (0 Domingo, 6 Sábado).
getFullYear() Devuelve el año con 4 cifras.
getMonth() Devuelve la representación interna del mes (0 Enero - 11 Diciembre).
getDate() Devuelve el día del mes.
getHours() Devuelve la hora (en 24h)
getMinutes() Devuelve los minutos.
getSeconds() Devuelve los segundos.
getMilliseconds() Devuelve los milisegundos.

Y lo mismo con los setters:

setFullYear(year)
setMonth(month)
setDate(day)
setHour(hour)
setMinutes(min)
setSeconds(sec)
setMilliseconds(ms)


El timestamp, es un formato numérico utilizado para calcular una fecha en UNIX. Es una forma poco práctica y legible para humanos, pero muy eficiente en términos informáticos. Se trata de un número que representa la cantidad de segundos transcurridos desde la fecha 1/1/1970, a las 00:00:00.

Así pues, siendo números, resulta muy fácil trabajar y operar con ellos. Una fecha A y una fecha posterior B, si hacemos B - A nos devuelve el número de segundos transcurridos entre ambas fechas, con lo que se podría sacar la diferencia de tiempo.

*/

A = new Date(2001, 5, 4);
B = new Date(2022, 3, 15);
let edadS = B.getTime() - A.getTime();
console.log(edadS);
