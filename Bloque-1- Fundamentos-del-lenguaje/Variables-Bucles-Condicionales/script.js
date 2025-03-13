// Variables
const maxLines = 5;
let output = '';

// Bucles: Crear un triángulo
for (let i = 1; i <= maxLines; i++) {
    output += '* '.repeat(i) + '\n';
}

// Mostrar el triángulo en la consola
console.log('Triángulo generado:');
console.log(output);

// Número aleatorio y control condicional
const number = Math.floor(Math.random() * 100);
if (number % 2 === 0) {
    console.log(`El número ${number} es par.`);
} else {
    console.log(`El número ${number} es impar.`);
}
