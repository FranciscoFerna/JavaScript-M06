/*
Ejercicio 2: Map

Partiendo de estos dos Arrays, crea una MAP que te permita guardar la relación de las notas con el módulo.

const modulos = ["m02", "m03", "m04", "m05", "m06", "m07", "m08", "FOL"]
const alumnoNotas = [[8, 9, 4], [9, 10], [6, 8, 10], [4], [8, 4, 7], [], [7, 5, 9, 10],[10]]

Actualiza las notas de m07 a [7.5, 6]
Obten un SET de las claves.
*/

const modulos = ["m02", "m03", "m04", "m05", "m06", "m07", "m08", "FOL"]
const alumnoNotas = [[8, 9, 4], [9, 10], [6, 8, 10], [4], [8, 4, 7], [], [7, 5, 9, 10], [10]]

// Crear el Map con la relación módulos-notas
const notasMap = new Map();
for (let i = 0; i < modulos.length; i++) {
  notasMap.set(modulos[i], alumnoNotas[i]);
}

// Actualizar las notas de m07
notasMap.set('m07', [7.5, 6]);

// Obtener un Set de las claves
const modulosSet = new Set(notasMap.keys());

// Para verificar los resultados
console.log(notasMap);
console.log(modulosSet);
