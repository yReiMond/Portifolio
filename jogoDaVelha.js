var celulas = document.querySelectorAll("td");
var resultado = document.getElementById("resultado");
var reset = document.getElementById("reset");
var jogador = "X";
var gameOver = false;

function vitoria() {
  if ((celulas[0].textContent === celulas[1].textContent &&
    celulas[1].textContent === celulas[2].textContent &&
    celulas[0].textContent !== "") ||
    (celulas[3].textContent === celulas[4].textContent &&
      celulas[4].textContent === celulas[5].textContent &&
      celulas[3].textContent !== "") ||
    (celulas[6].textContent === celulas[7].textContent &&
      celulas[7].textContent === celulas[8].textContent &&
      celulas[6].textContent !== "") ||
    (celulas[0].textContent === celulas[3].textContent &&
      celulas[3].textContent === celulas[6].textContent &&
      celulas[0].textContent !== "") ||
    (celulas[1].textContent === celulas[4].textContent &&
      celulas[4].textContent === celulas[7].textContent &&
      celulas[1].textContent !== "") ||
    (celulas[2].textContent === celulas[5].textContent &&
      celulas[5].textContent === celulas[8].textContent &&
      celulas[2].textContent !== "") ||
    (celulas[0].textContent === celulas[4].textContent &&
      celulas[4].textContent === celulas[8].textContent &&
      celulas[0].textContent !== "") ||
    (celulas[2].textContent === celulas[4].textContent &&
      celulas[4].textContent === celulas[6].textContent &&
      celulas[2].textContent !== "")) {
    resultado.textContent = jogador + " ganhou!";
    gameOver = true;
  } else if (celulas[0].textContent !== "" &&
    celulas[1].textContent !== "" &&
    celulas[2].textContent !== "" &&
    celulas[3].textContent !== "" &&
    celulas[4].textContent !== "" &&
    celulas[5].textContent !== "" &&
    celulas[6].textContent !== "" &&
    celulas[7].textContent !== "" &&
    celulas[8].textContent !== "") {
    resultado.textContent = "Empatou!";
    gameOver = true;
  }
}

function resetar() {
  for (var i = 0; i < celulas.length; i++) {
    celulas[i].textContent = "";
  }
  resultado.textContent = "";
  gameOver = false;
  jogador = "X";
}

for (var i = 0; i < celulas.length; i++) {
  celulas[i].addEventListener("click", function (event) {
    if (!gameOver && this.textContent === "") {
      this.textContent = jogador;
      vitoria();
      if (!gameOver) {
        jogador = jogador === "X" ? "O" : "X" ;
      }
    }
  })
}

reset.addEventListener("click", resetar);