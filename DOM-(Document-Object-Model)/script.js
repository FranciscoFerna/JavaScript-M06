const titulo = document.getElementById('titulo');
titulo.textContent = 'Titulo actualizado dinámicamente';
titulo.style.color = 'blue';
titulo.style.fontSize = '32px'

const contenedor = document.getElementById('contenedor');
const nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = 'Este es un párrafo añadido dinámicamente.';
contenedor.appendChild(nuevoParrafo);

nuevoParrafo.setAttribute('class', 'nuevo-estilo');

const estiloParrafo = document.createElement('style');
estiloParrafo.textContent = `
    .nuevo-estilo {
        color: green;
        font-style: italic;
    }
`;

document.head.appendChild(estiloParrafo);

