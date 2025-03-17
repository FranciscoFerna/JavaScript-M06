/*
Dado un array con los días de la semana
Obtén el primer día que empieza por ‘M’.
Obtén la posición del día que empieza por ‘V’.
Indica si algún día empieza por ‘S’.
Indica si todos los días acaban por ‘s’.
*/

// Array con los días de la semana
const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

// Obtener el primer día que empieza por 'M'
const diaConM = diasSemana.find(dia => dia.startsWith('M'));
console.log('Primer día que empieza por M:', diaConM);

// Obtener la posición del día que empieza por 'V'
const posicionV = diasSemana.findIndex(dia => dia.startsWith('V'));
console.log('Posición del día que empieza por V:', posicionV);

// Indicar si algún día empieza por 'S'
const hayDiaConS = diasSemana.some(dia => dia.startsWith('S'));
console.log('¿Hay algún día que empieza por S?:', hayDiaConS);

// Indicar si todos los días acaban por 's'
const todosDiasTerminanEnS = diasSemana.every(dia => dia.endsWith('s'));
console.log('¿Todos los días terminan en s?:', todosDiasTerminanEnS);
