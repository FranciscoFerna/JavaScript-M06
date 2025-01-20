const container = document.getElementById("teclado-numerico");

// Creamos input
const input = document.createElement("input");
input.id = 'input-display';
input.type = 'text';
input.readOnly = true;
container.appendChild(input);

// Creamos teclas
const teclado = document.createElement("div");
teclado.className = 'teclado';
container.appendChild(teclado);

// Botones del teclado
const teclas = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '⌫'];

teclas.forEach(tecla => {
    const boton = document.createElement('button');
    boton.className = 'tecla';
    boton.textContent = tecla;
    teclado.appendChild(boton);

    boton.addEventListener('click', () => {
        if (tecla === 'C') {
            input.value = '';
        } else if (tecla === '⌫') {
            input.value = input.value.slice(0, -1);
        } else {
            input.value += tecla;
        }
    });
});
