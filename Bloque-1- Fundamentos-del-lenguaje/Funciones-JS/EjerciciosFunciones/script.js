// Crea una funcion llamada saludar()
function saludar(nombre, saludo = 'Hola como estas ') {
  console.log(saludo + nombre);
}
saludar('Francisco');
saludar('Francisco', 'Buenos dias ');

// Crea una funcion llamada calcular
function calcular(a,b, operacion = suma(a, b)) {
  // Tienes que ser igual en tipo de dato y valor
  if (operacion === 'resta') {
    console.log(a-b)
  } else if (operacion === 'multiplicacion') {
    console.log(a*b)
  } else if (operacion === 'division') {
    console.log(a/b)
  }
};


function suma(a,b) {
  console.log(a+b);
};

calcular(4,5, 'resta');
calcular(2,2)
calcular(4,5, 'multiplicacion');


// Crea una funcion calcular promedio
function calcularPromedio() {
  let sumaArgumentos = 0;
  for (let i = 0; i < arguments.length; i++) {
    sumaArgumentos += arguments[i];
  }
  sumaArgumentos = sumaArgumentos / arguments.length;
  console.log(sumaArgumentos);
}

calcularPromedio(2,3,4,5,6,7,8,9,10);


// Crea una funcion llamada concatenarNombres
function concatenarNombres() {
  let frase = '';
  for (i = 0; i < arguments.length; i++) {
    // Evitar la coma final 
    if (i === arguments.length - 1) {
      frase += arguments[i];
    } else {
      frase += arguments[i] + ', ';
    }
  }
  console.log(frase);
}
concatenarNombres('Fran', 'Jose', 'Noriel', 'Lorena');
