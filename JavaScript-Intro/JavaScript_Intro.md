# Introducción a JavaScript

JavaScript es el único lenguaje de programación que funciona en los navegadores de forma nativa. Este README cubre algunos conceptos clave y ejemplos básicos para empezar a trabajar con JavaScript.

---

## Características principales de JavaScript

- **Lenguaje interpretado**: No requiere compilación antes de ejecutarse.
- **Multiplataforma**: Funciona en cualquier sistema operativo con un navegador compatible.
- **Multiparadigma**: Soporta programación imperativa, orientada a objetos (basada en prototipos) y orientada a eventos.
- **Débilmente tipado**: No se requiere especificar el tipo de las variables.

---

## Cómo incluir JavaScript en HTML

JavaScript se puede incluir en un archivo HTML de las siguientes maneras:

### Ejemplo: Incrustar JavaScript directamente
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo JavaScript</title>
</head>
<body>
    <h1>¡Hola, JavaScript!</h1>
    <script>
        console.log("Hola desde JavaScript incrustado.");
    </script>
</body>
</html>
```

### Ejemplo: Usar un archivo externo
```html
<script src="script.js" defer></script>
```
El atributo `defer` asegura que el script se ejecutará después de cargar el DOM.

---

## Consola del navegador

La consola es esencial para depurar código JavaScript. Puedes abrirla con `F12` en Chrome o Firefox.

### Ejemplo básico:
```javascript
console.log('Hola, mundo!');  // Mensaje informativo
console.error('Esto es un error.');  // Mensaje de error
```

---

## Ventanas modales: `alert`, `confirm`, `prompt`

1. **`alert`**: Muestra un mensaje con un botón de Aceptar.
2. **`confirm`**: Pregunta al usuario con opciones Aceptar/Cancelar. Devuelve `true` o `false`.
3. **`prompt`**: Pide una entrada de texto al usuario.

### Ejemplo:
```javascript
alert('¡Bienvenido!');
if (confirm('¿Deseas continuar?')) {
    let nombre = prompt('¿Cómo te llamas?');
    console.log('¡Hola, ' + nombre + '!');
}
```

---

## Buenas prácticas

1. Usa `defer` para scripts que manipulan el DOM.
2. Mantén el JavaScript separado del HTML en archivos externos.
3. Depura tu código usando `console.log` y herramientas del navegador.

---

## Ejercicio para practicar

Corrige este código y prueba su ejecución en la consola del navegador:
```javascript
console.log('Hola, mundo!); // Falta una comilla
let nombre = ‘Manolo’; // Comillas incorrectas
console.log('Bienvenida ' + noombre); // Variable mal escrita
console.log(saludo);  // Variable no definida
```

### Solución:
```javascript
console.log('Hola, mundo!');
let nombre = 'Manolo';
console.log('Bienvenida ' + nombre);
let saludo = '¡Buenos días!';
console.log(saludo);
```
