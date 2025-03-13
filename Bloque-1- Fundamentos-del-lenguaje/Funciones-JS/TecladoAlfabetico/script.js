let tecladoAlfabetico = document.getElementById('teclado-alfabetico');
let tecladoNumerico = document.getElementById('teclado-numerico');
let tecladoLetras = document.getElementById('teclado-letras');

function crearTecladoNumerico() {
  for (i = 1; i <= 9; i++) {
      let tecla = document.createElement('div');
      tecla.className = 'tecla';
      tecla.innerHTML = i;
      tecladoNumerico.appendChild(tecla);

      if (i % 2 == 0) {
        tecla.style.backgroundColor = 'lightblue';
      } else if (i % 3 == 0) {
        tecla.style.backgroundColor = 'lightgreen';
      } else {
        tecla.style.backgroundColor = 'lightcoral';
      }
  }
  let tecla0 = document.createElement('div');
  tecla0.className = 'tecla';
  tecla0.innerHTML = 0;
  tecladoNumerico.appendChild(tecla0);
}

function crearTecladoLetras() {
  for (i = 65; i <= 90; i++) {
    let tecla = document.createElement('div');
    tecla.className = 'tecla';
    tecla.innerHTML = String.fromCharCode(i);
    tecladoLetras.appendChild(tecla);
  }
}

crearTecladoNumerico();
crearTecladoLetras();

