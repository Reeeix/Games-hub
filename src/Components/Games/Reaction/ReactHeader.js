import headerTemplate from "../../Header/header";
import "./headerstylesrg.css"

const body = document.querySelector("body");

const arrayScore = [
  {
    titulo: "Mejor tiempo",
    valor: ""
  },
  {
    titulo: "Promedio",
    valor: ""
  },
  {
    titulo: "Intentos",
    valor: ""
  }
];

const reactHeaderTemplate = () => {
  const rgHeader = document.createElement("header");
  rgHeader.classList.add("rgHeader");
  const divBotonVolverRg = document.createElement("div");
  divBotonVolverRg.classList.add("divBotonVolverRg");
  const divTituloRg = document.createElement("div");
  divTituloRg.classList.add("divTituloRg");
  const divBoard = document.createElement("div");
  divBoard.classList.add("divBoard");
  const botonVolverRg = document.createElement("button");
  botonVolverRg.classList.add("botonVolverRg");
  const h1Rg = document.createElement("h1");
  const h2Rg = document.createElement("h2");
  const homeImg = document.createElement("img");
  for (const element of arrayScore) {
    const div = document.createElement("div");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");
    h4.textContent = element.titulo;
    p.textContent = element.valor;
    div.classList.add("scoreBox");
    div.classList.add("div" + element.titulo.replace(/\s+/g, "-"));
    div.append(h4, p);
    divBoard.append(div);
  };

  h1Rg.textContent = "⚡︎ Test de Reacción ⚡︎";
  h2Rg.textContent = "Juego interactivo";
  // gameTitle.textContent = "¿Qué tan rápido eres?";
  // gameInfo.textContent = "Haz clic en 'Iniciar' y espera a que la pantalla cambie a verde.Cuando veas el verde, ¡haz clic lo más rápido que puedas!";
  // gameInit.textContent = "▷ Iniciar";
  botonVolverRg.textContent = "Volver";
  homeImg.src = "src/assets/casazul.png";



  divBotonVolverRg.append(botonVolverRg);
  botonVolverRg.append(homeImg);
  divTituloRg.append(h1Rg, h2Rg); 
  rgHeader.append(divBotonVolverRg, divTituloRg, divBoard);
  body.append(rgHeader);
}

export default reactHeaderTemplate;