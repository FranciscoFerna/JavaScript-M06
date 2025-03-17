// Ejercicio 1: Encontrar el número mayor
var numbers = [3, 27, 95, 7, 25, 95, 81];
let maxNumber = numbers[0];

numbers.forEach(number => {
  if (number > maxNumber) {
    maxNumber = number;
  }
});
console.log('El número mayor es:', maxNumber);

// Ejercicio 2: Encontrar el string más largo
var myStrings = ['first', 'second', 'third', 'fourth', 'reallyLongString', 'sixth'];
let longestString = myStrings[0];

myStrings.forEach(str => {
  if (str.length > longestString.length) {
    longestString = str;
  }
});
console.log('El string más largo es:', longestString);

// Ejercicio 3: Encontrar días que empiezan por 'M'
const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const diasConM = [];

diasSemana.forEach(dia => {
  if (dia.startsWith('M')) {
    diasConM.push(dia);
  }
});
console.log('Días que empiezan por M:', diasConM);
