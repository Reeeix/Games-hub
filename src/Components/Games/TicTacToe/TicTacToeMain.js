import "./mainstyles.css"
import "./main-responsive.css"
import { getAppRoot } from "../../../utils/appRoot";

const casillas = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

const mainTictactoeTemplate = () => {
  const tttMainSection = document.createElement("section");
  tttMainSection.classList.add("ttt-mainsection");
  const divGameTtt = document.createElement("div");
  divGameTtt.classList.add("ttt-divGame");

  casillas.forEach(casilla => {
    const nuevaCasilla = document.createElement("button");
    nuevaCasilla.classList.add("casillattt");
    nuevaCasilla.type = "button";
    divGameTtt.appendChild(nuevaCasilla);
  });

  const divTurnTtt = document.createElement("div");
  divTurnTtt.classList.add("ttt-divTurn");
  const pTttWinner = document.createElement("p");
  pTttWinner.classList.add("p-ttt-winner");

  pTttWinner.textContent = "Turno del jugador:"

  tttMainSection.append(divGameTtt);
  divGameTtt.append(divTurnTtt)
  divTurnTtt.append(pTttWinner);
  const appRoot = getAppRoot();
  if (appRoot) appRoot.append(tttMainSection);
}

export default mainTictactoeTemplate;