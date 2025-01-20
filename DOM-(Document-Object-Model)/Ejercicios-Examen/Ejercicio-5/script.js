const tablero = document.getElementById("tablero");

// Generar el tablero 8x8
for (let fila = 0; fila < 8; fila++) {
    for (let col = 0; col < 8; col++) {
        const celda = document.createElement('div');
        celda.classList.add('celda');

        // Determinar el color de la celda (negra o blanca)
        if ((fila + col) % 2 === 0) {
            celda.classList.add('negra');
        } else {
            celda.classList.add('blanca');
        }

        // Añadir fichas solo en las filas superiores e inferiores
        if (fila === 0 || fila === 1) {
            celda.textContent = 'X'
        } else if (fila === 6 || fila === 7) {
            celda.textContent = 'O'
        }

        tablero.appendChild(celda);
    }

}
