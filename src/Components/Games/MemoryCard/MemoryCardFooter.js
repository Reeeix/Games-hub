import "./footerstylesmcg.css"

const body = document.querySelector("body");

const memoryCardFooterTemplate = () => {
  const footerMcg = document.createElement("footer");
  footerMcg.classList.add("footer-mcg")
  const divButtonFooter = document.createElement("div");
  divButtonFooter.classList.add("divFooter-mcg")
  const buttonNewGameMCG = document.createElement("button");
  buttonNewGameMCG.classList.add("newgame-button-mcg");
  const newGameImgMcg = document.createElement("img");
  newGameImgMcg.classList.add("newgame-img-mcg");

  newGameImgMcg.src = "src/assets/actualizar-flecha.png";
  buttonNewGameMCG.textContent = "Nueva Partida";
  buttonNewGameMCG.append(newGameImgMcg);


  footerMcg.append(divButtonFooter);
  divButtonFooter.append(buttonNewGameMCG);
  body.append(footerMcg);
}

export default memoryCardFooterTemplate;