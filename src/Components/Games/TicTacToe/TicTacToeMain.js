import "./mainstyles.css"
const body = document.querySelector("body");

const mainTictactoeTemplate = () => {
  
  const tttMainSection = document.createElement("section");
  tttMainSection.classList.add("ttt-mainsection");
  const divGameTtt = document.createElement("div");
  divGameTtt.classList.add("ttt-divGame");
  const casilla1 = document.createElement("div");
  casilla1.classList.add("casillattt");
  const casilla2 = document.createElement("div");
  casilla2.classList.add("casillattt");
  const casilla3 = document.createElement("div");
  casilla3.classList.add("casillattt");
  const casilla4 = document.createElement("div");
  casilla4.classList.add("casillattt");
  const casilla5 = document.createElement("div");
  casilla5.classList.add("casillattt");
  const casilla6 = document.createElement("div");
  casilla6.classList.add("casillattt");
  const casilla7 = document.createElement("div");
  casilla7.classList.add("casillattt");
  const casilla8 = document.createElement("div");
  casilla8.classList.add("casillattt");
  const casilla9 = document.createElement("div");
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