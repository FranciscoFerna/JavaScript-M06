// Haz una función que de dos números pasados por parámetros indica (saca por consola) cúal de ellos es mayor.
function queNumeroEsMayor(a, b) {
  if (a < b) {
    console.log("El numero " + b + " es mas grande que el numero " + a);
  } else if (b < a) {
    console.log("El numero " + a + " es mas grande que el numero " + b);
  } else {
    console.log("Son iguales los dos numeros");
  }
};

queNumeroEsMayor(2,7);
queNumeroEsMayor(9,7);
queNumeroEsMayor(3,7);

// Haz una función que calcule (sin usar *) la multiplicación de dos números.
function calcularMultiplicacion(a , b) {
  let resultadoMultiplicacion = 0;
  for (i = 0; i < a; i++) {
    resultadoMultiplicacion += b
  }
  console.log("El resultado de la multiplicacion es: " + resultadoMultiplicacion);
}

calcularMultiplicacion(3, 3)

// Utilizando la función anterior haz una función que calcule la multiplicación de 3 números.
function calcularMultiplicacionTres(a, b, c) {
  let resultadoMultiplicacion = 0;
  for (i = 0; i < a; i++) {
    resultadoMultiplicacion += b * c
  }
  console.log("El resultado de la multiplicacion es: " + resultadoMultiplicacion);
}

calcularMultiplicacionTres(3, 3, 5)

// Crea una función que permita calcular la nota media de 3 notas para que devuelva la media con 1 decimal.
function calcularMediaNota(a,b,c) {
  let resultado = (a+b+c) / 3
  console.log("El resultado de la media es: " + resultado.toFixed(1));
}

calcularMediaNota(1,2,3);
calcularMediaNota(9,8,2);
calcularMediaNota(4,1,7);

// Encuentra entre los primeros 10.000 números naturales los números que completan la siguiente propiedad: La suma del cubo de cada una de sus cifras y que dé el mismo número:
function sumaCubo() {
  for (let i = 1; i < 10000; i++) {
    let num = i;
    let sum = 0;

    while (num > 0) {
      let digit = num % 10;
      sum += digit * digit * digit;
      num = Math.floor(num / 10);
    }

    if (sum === i) {
      console.log(i);
    }
  }
}

sumaCubo();
// → por ejemplo 153: 1*1*1+5*5*5+3*3*3= 1³+5³+3³=153.

// (optativo) Crea una función que devuelva el cubo (numero^3) de un número pero que compruebe si el parámetro pasado es un número entero. Si no es un entero o no es un número mostrará un alert indicando cuál es el problema y devolverá false.

function cuboNumero(num) {
  if (Number.isInteger(num)) {
    return console.log(num ** 3);
  } else {
    console.log("El numero no es entero");
    return false;
  }
}
cuboNumero(3);
cuboNumero(3.5);
