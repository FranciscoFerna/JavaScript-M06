let tecladoNumerico = document.getElementById('teclado-numerico')

function crearTecla(num) {
  let tecla = document.createElement('div');
  tecla.className = 'tecla';
  tecla.innerHTML = num;

  if (num % 2 === 0) {
    tecla.style.backgroundColor = 'lightblue';
  } else if (num % 3 === 0) {
    tecla.style.backgroundColor = 'lightgreen';
  } else {
    tecla.style.backgroundColor = 'lightcoral';
  }
  tecladoNumerico.appendChild(tecla);
}

function crearTeclas() {
  for (let i = 1; i <= 20; i++) {
    crearTecla(i);
  }
}
crearTeclas();
