let dadosContainer = document.getElementById("dados-container");
let botonTirarDados = document.getElementById("tirar-dados");
botonTirarDados.addEventListener("click", lanzarDados);
let dados = document.querySelectorAll(".dado");

function crearDados() {
  for (let i = 0; i < 4; i++) {
    let dado = document.createElement("div");
    dado.className = "dado";
    dado.innerHTML = Math.floor(Math.random() * 6) + 1;
    dadosContainer.appendChild(dado);
  }
}

function lanzarDados() {
  let dados = document.querySelectorAll(".dado");
  for (let i = 0; i < dados.length; i++) {
    dados[i].innerHTML = Math.floor(Math.random() * 6) + 1;
  }
  calcularGanador()
}


function calcularGanador() {
  let resultado = document.getElementById('resultado');
  resultado.innerHTML = "";

  let dados = document.querySelectorAll(".dado");
  let resultadoUser = parseInt(dados[0].innerHTML) + parseInt(dados[1].innerHTML);
  let resultadoMachine = parseInt(dados[2].innerHTML) + parseInt(dados[3].innerHTML);
  if (resultadoUser < resultadoMachine) {
    resultado.innerHTML = "Ha ganado la maquina"
  } else if (resultadoUser === resultadoMachine) {
    resultado.innerHTML = "Empate"
  } else {
    resultado.innerHTML = "Ha ganado el usuario"
  }
  dadosContainer.appendChild(resultado)
}

crearDados();
