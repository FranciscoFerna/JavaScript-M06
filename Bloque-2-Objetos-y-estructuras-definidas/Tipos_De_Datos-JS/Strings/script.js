// Haz una funcion para cada uno de los problemas pospuestos

/*
Comprueba si un string contiene el substring 'As' al principio. Si lo contiene, devuelve el string original. Sino, devuelve el string con 'As' concatenado al principio de este.
*/

function comprobarSubstring(cadenaTexto) {
  cadenaTexto.toLowerCase()
  if (cadenaTexto.startsWith("As")) {
    return cadenaTexto
  } else {
    return 'As' + cadenaTexto
  }
}

console.log(comprobarSubstring("Asterisco"))

/*
Introduce un string y un número, comprueba que es menor que la longitud del string en una función. La función debe devolver el string sin el carácter en esa posición.
*/

function eliminarCaracterPosicion(cadenaTexto, numero) {
  if (numero < cadenaTexto.length) {
    return cadenaTexto.slice(0, numero) + cadenaTexto.slice(numero + 1);
  }
  return cadenaTexto;
}

console.log(eliminarCaracterPosicion("murcielago", 3));


/*
Dado un string intercambia la posición del primer y último carácter del string. Tienes que comprobar que el string tiene longitud mayor que 0.
*/

function intercambiarCaracteres(cadenaTexto) {
  if (cadenaTexto.length <= 1) {
    return cadenaTexto;
  }

  const primerCaracter = cadenaTexto[0];
  const ultimoCaracter = cadenaTexto[cadenaTexto.length - 1];
  const medio = cadenaTexto.slice(1, -1);

  return ultimoCaracter + medio + primerCaracter;
}

console.log(intercambiarCaracteres("hola"));


/*
Programa la función separarVocalesDeConsonantes() que partiendo de una cadena de entrada, la trabaje y retorne una cadena que tenga todas las vocales y luego las constantes (en el mismo orden en el que aparecen).

Plan:
1. Crear dos strings vacíos: uno para vocales y otro para consonantes
2. Recorrer la cadena original y separar cada carácter
3. Si es vocal, añadir al string de vocales
4. Si es consonante, añadir al string de consonantes
5. Concatenar vocales + consonantes al final

Pruebas esperadas:
"HoLa" -> "oaHL"
"murcielago" -> "uieaomlrcg"
*/

function separarVocalesDeConsonantes(cadenaTexto) {
  let vocales = "";
  let consonantes = "";
  const esVocal = /[aeiouáéíóúAEIOUÁÉÍÓÚ]/;

  for (let char of cadenaTexto) {
    if (esVocal.test(char)) {
      vocales += char;
    } else {
      consonantes += char;
    }
  }

  return vocales + consonantes;
}

console.log(separarVocalesDeConsonantes("HoLa"));


/*
Obtén la fecha de hoy y sacala por pantalla.
Según el día de la semana y la hora actual, informa por pantalla si estás o no en clase de M04.
Desde hoy calcula cuánto tiempo falta para tu cumpleaños.
En segundos
En minutos
En horas
En días
*/

// Fecha actual
const hoy = new Date();
console.log("Fecha actual:", hoy.toLocaleDateString());

// Comprobar si estamos en clase de M04 (asumiendo que es lunes y miércoles de 15:00 a 17:00)
function enClaseM04() {
  const dia = hoy.getDay();
  const hora = hoy.getHours();
  return (dia === 1 || dia === 3) && (hora >= 15 && hora < 17);
}
console.log("¿Estás en clase de M04?:", enClaseM04());

// Calcular tiempo hasta cumpleaños (ejemplo con fecha 2024-06-15)
function tiempoHastaCumple(fechaCumple) {
  const cumple = new Date(fechaCumple);
  const diferencia = cumple - hoy;

  const segundos = Math.floor(diferencia / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);

  console.log(`Faltan:
  ${segundos} segundos
  ${minutos} minutos
  ${horas} horas
  ${dias} días`);
}
tiempoHastaCumple('2005-12-29');

// Comprobar Sant Jordi hasta 2060
function comprobarSantJordi() {
  for (let año = hoy.getFullYear(); año <= 2060; año++) {
    const santJordi = new Date(año, 3, 23); // mes 3 = abril
    const dia = santJordi.getDay();
    if (dia !== 0 && dia !== 6) {
      console.log(`${año} - ${['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'][dia]}`);
    }
  }
}
comprobarSantJordi();

// Comparar fechas de nacimiento
function compararEdades(fecha1, fecha2) {
  const nacimiento1 = new Date(fecha1);
  const nacimiento2 = new Date(fecha2);
  const diferencia = Math.abs(nacimiento1 - nacimiento2);

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const meses = Math.floor(dias / 30.44);
  const años = Math.floor(meses / 12);

  console.log(`La diferencia es de ${años} años, ${meses % 12} meses y ${Math.floor(dias % 30.44)} días`);
  console.log(`Es mayor quien nació el ${nacimiento1 < nacimiento2 ? fecha1 : fecha2}`);
}
compararEdades('1990-05-15', '1992-03-20');
