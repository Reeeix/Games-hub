import "./mainstyles.css"
import "./main-responsive.css"
const body = document.querySelector("body");

const mainTictactoeTemplate = () => {
  const tttMainSection = document.createElement("section");
  tttMainSection.classList.add("ttt-mainsection");
  const divGameTtt = document.createElement("div");
  divGameTtt.classList.add("ttt-divGame");

  const casilla1 = document.createElement("button");
  casilla1.type = "button";
  casilla1.classList.add("casillattt");

  const casilla2 = document.createElement("button");
  casilla2.type = "button";
  casilla2.classList.add("casillattt");

  const casilla3 = document.createElement("button");
  casilla3.type = "button";
  casilla3.classList.add("casillattt");

  const casilla4 = document.createElement("button");
  casilla4.type = "button";
  casilla4.classList.add("casillattt");

  const casilla5 = document.createElement("button");
  casilla5.type = "button";
  casilla5.classList.add("casillattt");

  const casilla6 = document.createElement("button");
  casilla6.type = "button";
  casilla6.classList.add("casillattt");

  const casilla7 = document.createElement("button");
  casilla7.type = "button";
  casilla7.classList.add("casillattt");

  const casilla8 = document.createElement("button");
  casilla8.type = "button";
  casilla8.classList.add("casillattt");

  const casilla9 = document.createElement("button");
  casilla9.type = "button";
  casilla9.classList.add("casillattt");

  const divTurnTtt = document.createElement("div");
  divTurnTtt.classList.add("ttt-divTurn");
  const pTttWinner = document.createElement("p");
  pTttWinner.classList.add("p-ttt-winner");

  pTttWinner.textContent = "Turno del jugador:"

  tttMainSection.append(divGameTtt);
  divGameTtt.append(casilla1,casilla2,casilla3,casilla4,casilla5,casilla6,casilla7,casilla8,casilla9, divTurnTtt)
  divTurnTtt.append(pTttWinner);
  body.append(tttMainSection);
}

export default mainTictactoeTemplate;