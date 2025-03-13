# Variables, Bucles y Estructuras de Control en JavaScript

Este proyecto es una introducción práctica a conceptos esenciales de JavaScript, como variables, operadores, bucles y estructuras de control. Se incluye un ejemplo funcional que puedes ejecutar en tu navegador.

---

## Contenidos

1. **Variables**: `var`, `let`, y `const`.
2. **Operadores**: Aritméticos, lógicos y de asignación.
3. **Bucles**: `for`, `while`, y `do...while`.
4. **Estructuras de Control**: `if`, `if/else`, `switch`.

---

## Ejemplo Práctico

En este proyecto, el archivo `script.js` contiene código para demostrar cómo funcionan las variables, bucles y estructuras de control.

1. **Variables**: Uso de `let` y `const` para manejar valores dinámicos y estáticos.
2. **Bucles**: Generar un triángulo en la consola.
3. **Estructuras de Control**: Evaluar si un número es par o impar.

---

## Cómo usarlo

1. Abre `index.html` en tu navegador.
2. Inspecciona la consola del navegador para ver los resultados.

---

## Código en `script.js`

```javascript
// Variables
const maxLines = 5;
let output = '';

// Bucles
for (let i = 1; i <= maxLines; i++) {
    output += '* '.repeat(i) + '\n';
}

// Estructura de Control
console.log(output);
const number = Math.floor(Math.random() * 100);
if (number % 2 === 0) {
    console.log(`El número ${number} es par.`);
} else {
    console.log(`El número ${number} es impar.`);
}
```

Abre el archivo en tu navegador para explorar el ejemplo en acción.


---

### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Basics</title>
    <link rel="stylesheet" href="styles.css">
    <script defer src="script.js"></script>
</head>
<body>
    <h1>Introducción a JavaScript</h1>
    <p>Abre la consola del navegador para ver los resultados.</p>
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
    background-color: #f0f8ff;
}

h1 {
    color: #4682b4;
    margin-top: 50px;
}

p {
    color: #333;
    font-size: 18px;
}
```

---

### `script.js`

```javascript
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
```
