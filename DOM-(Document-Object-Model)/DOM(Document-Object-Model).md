# Document Object Model (DOM) en JavaScript

El DOM es una representación en árbol del documento HTML, lo que permite a los programadores acceder y manipular los elementos de una página web. Este proyecto muestra cómo usar el DOM para modificar elementos, atributos y estilos de manera dinámica.

---

## Contenidos

1. **Acceso a elementos**:
   - Métodos como `getElementById`, `querySelector`.
2. **Manipulación de contenido**:
   - Propiedades como `innerHTML`, `textContent`, `setAttribute`.
3. **Manipulación de estilos**:
   - Modificación de estilos a través de `style`.
4. **Creación de elementos**:
   - Métodos como `createElement`, `appendChild`.

---

## Ejemplo Práctico

En este proyecto, puedes interactuar con el DOM a través del archivo `script.js`, que contiene ejemplos como:

- Cambiar el texto y los estilos de un elemento `<h1>`.
- Crear y añadir nuevos elementos dinámicamente.
- Cambiar atributos de elementos existentes.

---

## Cómo usarlo

1. Abre el archivo `index.html` en tu navegador.
2. Observa cómo el contenido cambia dinámicamente gracias a JavaScript.

---

## Código en `script.js`

```javascript
// Cambiar texto y estilos de un h1
const title = document.getElementById('titulo');
title.textContent = 'Título actualizado dinámicamente';
title.style.color = 'blue';
title.style.fontSize = '32px';

// Crear y añadir un nuevo párrafo
const nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = 'Este es un párrafo añadido dinámicamente.';
document.getElementById('contenedor').appendChild(nuevoParrafo);
```

Abre el proyecto en tu navegador para explorar estos conceptos.

### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manipulación del DOM</title>
    <link rel="stylesheet" href="styles.css">
    <script defer src="script.js"></script>
</head>
<body>
    <h1 id="titulo">Título Original</h1>
    <div id="contenedor">
        <p>Texto original dentro del contenedor.</p>
    </div>
</body>
</html>
```

---

### `styles.css`

```css
body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
}

h1 {
    color: #333;
    margin-top: 50px;
}

#contenedor {
    margin: 20px auto;
    padding: 10px;
    width: 80%;
    border: 1px solid #ccc;
    background-color: #fff;
}
```

---

### `script.js`

```javascript
// Seleccionar y modificar un elemento
const titulo = document.getElementById('titulo');
titulo.textContent = 'Título actualizado dinámicamente';
titulo.style.color = 'blue';
titulo.style.fontSize = '32px';

// Crear y añadir un nuevo párrafo al contenedor
const contenedor = document.getElementById('contenedor');
const nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = 'Este es un párrafo añadido dinámicamente.';
contenedor.appendChild(nuevoParrafo);

// Cambiar un atributo
nuevoParrafo.setAttribute('class', 'nuevo-estilo');

// Añadir estilos dinámicos
const estiloParrafo = document.createElement('style');
estiloParrafo.textContent = `
    .nuevo-estilo {
        color: green;
        font-style: italic;
    }
`;
document.head.appendChild(estiloParrafo);
```
