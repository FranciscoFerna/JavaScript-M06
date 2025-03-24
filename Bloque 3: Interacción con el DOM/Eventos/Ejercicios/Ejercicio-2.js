document.getElementById("btn").addEventListener("click", function () {
    alert("¡Has hecho clic en el boton!");
});

document.getElementById("btn").addEventListener("dblclick", function () {
    alert("¡Has hecho doble clic en el botón!");
});

document.getElementById("capa").addEventListener("mousemove", function (event) {
    console.log(`Posicion X: ${event.clientX}, Posicion Y: ${event.clientY}`);
});

document.getElementById("campoTexto").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        alert("¡Has presionado Enter!");
    }
});