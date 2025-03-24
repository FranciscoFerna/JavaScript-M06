/* 
JavaScript:
BOM y Eventos

Browser Object Model

Mediante el BOM podemos acceder y modificar las propiedades de las ventanas del propio navegador. Está compuesto por varios objetos.
Es posible redimensionar y mover la ventana del navegador, modificar el texto que se muestra en la barra de estado y realizar muchas otras manipulaciones no relacionadas con el contenido de la página HTML, sino con el navegador en sí.
Algunos de los elementos que forman el BOM son los siguientes:
Crear, mover, redimensionar y cerrar ventanas de navegador.
Obtener información sobre el propio navegador.
Propiedades de la página actual y de la pantalla del usuario.
Gestión de cookies.
Objetos ActiveX en Internet Explorer.
*/

/* 
Window
El objeto window representa la ventana completa del navegador. Mediante este objeto, es posible mover, redimensionar y manipular la ventana actual del navegador. Incluso es posible abrir y cerrar nuevas ventanas de navegador.
Como TODO el resto de objetos forman parte del objeto window, podemos omitirlo.
*/
windows.forms[0] === forms[0];
window.document === document;
/* 
Podemos acceder las siguientes propiedades de la ventana:
window.name: nombre de la ventana actual
window.status: valor de la barra de estado
window.screenX/.screenY: distancia de la ventana a la esquina izquierda/superior de la pantalla
window.outerWidth/.outerHeight: ancho/alto total de la ventana, incluyendo la toolbar y la scrollbar
window.innerWidth/.innerHeight: ancho/alto útil del documento, sin la toolbar y la scrollbar
window.pageX / pageY: distancia a la página (scroll).

Además, tenemos métodos:
.back(), .forward(), .home(), .stop(), .focus(), .blur(), .find(), .print(), … 
*/

/* 
Al abrir una nueva ventana podemos decidir cuales son sus propiedades.
.open(url, nombre, opciones): abre una nueva ventana. Devuelve el nuevo objeto ventana. Las principales opciones son:
.toolbar: si tendrá barra de herramientas
.location: si tendrá barra de dirección
.directories: si tendrá botones Adelante/Atrás
.status: si tendrá barra de estado
.menubar: si tendrá barra de menú
.scrollbar: si tendrá barras de desplazamiento
.resizable: si se puede cambiar su tamaño
.width=px/.height=px: ancho/alto
.left=px/.top=px: posición izq/sup de la ventana
.opener: referencia a la ventana desde la que se abrió esta ventana, el madre.
.close(): la cierra (pide confirmación)

Una vez abierta la ventana podemos moverla y cambiar su tamaño.
.moveTo(x,y): la mueve a las coord indicadas
.moveBy(x,y): la desplaza los px indicados
.resizeTo(x,y): le da el ancho y alto indicados
.resizeBy(x,y): le añade ese ancho/alto.
*/
/* 
Window.Location
Location es el objeto que contiene información sobre la URL actual del navegador y podemos modificarla, estas serían la propiedades y los métodos a destacar:

.href: devuelve la URL actual completa
.protocol, .hostname, .pathname, .search, .hash: devuelve partes de la URL actual.
.reload(): recarga la página actual
.assign(url): carga la página pasada como parámetro
.replace(url): ídem pero sin guardar la actual en el historial
*/

/* 
Window.History
El objeto History nos permite acceder al historial de páginas visitadas y navegar por él:
.length: muestra el número de páginas almacenadas en el historial
.back(): vuelve a la página anterior
.forward(): va a la siguiente página
.go(num): se mueve num páginas hacia adelante o hacia atrás (si num es negativo) en el historial
*/

/* 
Eventos

Los eventos son la manera que tenemos en Javascript de controlar las acciones de los usuarios y definir un comportamiento de la página cuando se produzca cada uno de ellos. 
Para entender los eventos necesitamos conocer algunos conceptos básicos:
Evento: Es algo que ocurre cuando el usuario interactúa con el documento, pero también cuando la página se ha cargado, o cuando una imagen que no se puede cargar porque no esté disponible, etc.
Tipo de evento: Es el tipo del suceso que ha ocurrido, por ejemplo, un clic sobre un botón, pulsación de una tecla, scroll o el envío de un formulario. Para cada tipo de elemento de la página hay diversos tipos de eventos de Javascript.
Handler (Manejador de evento): es el comportamiento que nosotros podemos asignar como respuesta a un evento. Será una función Javascript, que asociaremos a un tipo de evento en concreto.
Listener: Es el elemento que “escucha” los eventos que definimos y ejecutará el manejador especificado.

Definimos las acciones (funciones) que queremos realizar.

Podemos añadir los “escuchadores” en varios lugares.
Dentro del elemento HTML del que queremos detectar la acción y directamente en el HTML.
Directamente en el JS.
Podemos asignarlo como un atributo más
*/
function clickTitulo() {
    console.log("Se ha hecho click")
}
/* <h2 id="titulo" onclick="clickTitulo()">Formulario</h2> */
const titulo = document.getElementById('titulo');
titulo.onclick = clickTitulo;

const boton = document.querySelector('button');
const tarea = () => alert("Hola Mundo!");
titulo.setAttribute("onclick", "tarea()");

/* Si asignamos una función directamente al evento, al atributo, no podemos asignar varias funciones al mismo tiempo, además de que según el elemento. */
/* 
Para poder asignar varias acciones a un mismo evento usaremos el método addEventListener() que tiene todos los elementos del DOM.
addEventListener(“evento”,handler,true/false)
Nombre del evento
Función u objeto que se ejecutará en el momento que se produzca el evento que debe capturarse.
Booleano, que por defecto es false, indica si la escucha debe hacer a todos los elementos del DOM o solo al asignado.
*/
titulo.addEventListener("click", clickTitulo);
titulo.addEventListener("click", () => console.log("Se ha hecho click en el titulo ARROW"));
/* 
Otra cosa interesante de usar addEventListener(), es que podemos borrar la función que tenemos asignada a un evento usando el método removeEventListener(), lo que nos da más control a la hora de añadir o eliminar eventos a un elemento y agiliza la programación.

El standard de JS me ofrece una serie de eventos predefinidos y puedo querer otros.
*/
titulo.removeEventListener("click", clickTitulo); // Es anonima, no se puede eliminar
document.addEventListener("DOMContentLoaded", () => console.log("Pagina Cargada"));
/* 
Object Event
A menudo necesitamos acceder a nuestro evento desde la función handler, este parámetro es pasado por defecto sin necesidad de especificarlo en el addEventListener.

Nota: JS considera que los eventos de click los hace el mouse, por ello nos dice que es un PointerEvent
*/
const button = document.querySelector("button");
button.addEventListener("click", (event) => {
    console.log(event);
})
/* 
Object Event: Propiedades de posicionamiento

*/
/* 

*/
/* 

*/
/* 

*/
/* 

*/
/* 

*/
/* 

*/
/* 

*/