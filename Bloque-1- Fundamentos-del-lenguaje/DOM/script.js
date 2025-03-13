// Document Object Model - JavaScript

// Para acceder a los diferentes elementos del DOM tenemos varios metodos que varian segun el dato que usamos para identificarlos. Empezamos por el mas sencillo

document.getElementById('id'); // Devuelve el elemento con el id pasado por parametro

// Element: Propiedades
// Los elementos del document tienen las siguiente propiedades principaes

// Por ejemplo, si tenemos el siguiente HTML:
// <p>Este es un parrafo <strong> muy simple </strong></p>
// element.nodeName // Devuelve el nombre del nodo, en este caso 'P'
// element.textContent // Devuelve el texto del nodo, en este caso 'Este es un parrafo muy simple'
// element.innerHTML // Devuelve el contenido HTML del nodo, en este caso 'Este es un parrafo <strong> muy simple </strong>'
// element.outerHTML // Devuelve el contenido HTML del nodo y el nodo en si, en este caso '<p>Este es un parrafo <strong> muy simple </strong></p>'
// element.value // Devuelve el valor del nodo, en este caso 'Este es un parrafo muy simple'

// Atributos del ElementHTML
// Una vez seleccionado el elemento podemos acceder a sus atributos, añadir mas, cambiar su valor, modificar sus estilos

// element.attribute // Obtenemos un array con los atributos del elemento
// element.hasAttribute('nameAttribute') // Devuelve true si el elemento tiene el atributo pasado por parametro
// element.getAttribute('nameAttribute') // Devuelve el valor del atributo pasado por parametro
// element.setAttribute('nameAttribute', 'value') // Añade un atributo al elemento
// element.removeAttribute('nameAttribute') // Elimina un atributo del elemento

// Atributos
// Para atributos del tipo id, class, o title existen atajos y podemos acceder a ellos directamente como de una propiedad se tratara:
// parrafo.id="IdentificadorNuevo";


// Estilo
// Los estilos estan accesibles a traves del atributo style. Cualquier estilo es una propiedad de este atributo, pero con la sintaxis camelCase.

// element.style.property // Podemos modificar cualquier propiedad de estilo

// Ejemplo
// parrafo.style.color = 'red';
// Nota: Es mejor no modificar los estilos directamente a os elementos, es mejor hacerlo a traves de clases y modificar estas.

// Manipulacion de Elementos DOM
// La creacion de nuevos elementos (nodosHTML) se hace en dos acciones:
// Se crea el nodo y se asginan los atributos, valores, etc.
// Se añade ese nuevo nodo como hijo del nodo seleccionado

// Crear un nuevo nodo
// elementHTML.document.createElement('tagName') // Crea un nuevo nodo con el tagName pasado por parametro
// node.document.createTextNode('text') // Crea un nuevo nodo de texto con el texto pasado por parametro
// node.document.createTextComment('text') // Crea un nuevo nodo de comentario con el texto pasado por parametro


// Añadir el nodo al arbol
// Una vez tenemos creado un nodo deberemos incluirlo en el documento y especificar en que rama lo vamos a "colgar"

// document.appendChild(element) // Añade el nodo al final del documento
// element.appendChild(node) // Añade el nodo al final del elemento


// element.remove() // Elimina el propio elemento

// document.removeChild(element) // Elimina el nodo pasado por parametro
// element.removeChild(node) // Elimina el nodo hijo pasado por parametro



