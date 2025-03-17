// Array de notas
const notas = [3.4, 7.9, 8.0, 2.5, 5.6, 5.4, 9.0];

// 1. Calcular la nota media
const notaMedia = notas.reduce((sum, nota) => sum + nota, 0) / notas.length;
console.log("Nota media:", notaMedia.toFixed(2));

// 2. Obtener la primera nota superior a 5
const primerNotaAprobada = notas.find((nota) => nota > 5);
console.log("Primera nota superior a 5:", primerNotaAprobada);

// 3. Cambiar notas de base 10 a base 20
const notasSobre20 = notas.map((nota) => nota * 2);
console.log("Notas sobre 20:", notasSobre20);

// 4. every() - Verificar si todas las notas son aprobadas (>5)
const todasAprobadas = notas.every(nota => nota >= 5);
console.log("¿Todas las notas están aprobadas?:", todasAprobadas);

// 5. some() - Verificar si hay alguna nota excelente (>9)
const hayExcelentes = notas.some(nota => nota > 9);
console.log("¿Hay alguna nota excelente?:", hayExcelentes);

// 6. filter() - Obtener solo las notas aprobadas
const notasAprobadas = notas.filter(nota => nota >= 5);
console.log("Notas aprobadas:", notasAprobadas);

// 7. findIndex() - Encontrar posición de la primera nota sobresaliente (>9)
const posicionSobresaliente = notas.findIndex(nota => nota > 9);
console.log("Posición de la primera nota sobresaliente:", posicionSobresaliente);

// 8. reduce() - Calcular la suma total de las notas
const sumaNotas = notas.reduce((total, nota) => total + nota, 0);
console.log("Suma total de notas:", sumaNotas);
