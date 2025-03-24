/* Abre una nueva ventana de dimensiones 500x200px en la posición (100,200) */
let ventanaWindows;
ventanaWindows.moveTo(100, 200);

/* escribe en ella (con document.write) un título h1 que diga ‘Hola’ */
ventanaWindows.document.write("<h1>Hola</h1>");

/* muévela 300 px hacia abajo y 100 a la izquierda (quizás es necesario crear un botón para ver el efecto) */
function moverVentana() {
    ventanaWindows.moveTo(200, 500);
}

/* ciérrala */
function cerrarVentana() {
    ventanaWindows.close()
}

/* Abrir ventana */
function abrirVentana() {
    ventanaWindows = window.open("", "", "width=500,height=200");
}

function escribirEnVentana() {
    ventanaWindows.document.write("<h1>Hola</h1>");
}