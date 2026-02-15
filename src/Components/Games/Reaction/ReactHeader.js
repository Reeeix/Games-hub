import "./headerstylesrg.css";
import "./header-responsive.css";
import headerTemplate from "../../Header/header";
import mainTemplate from "../../Main/Main";
import footerTemplate from "../../Footer/footer";

const body = document.querySelector("body");

const scoreCards = [
  {
    titulo: "Last score",
    valor: "-"
  },
  {
    titulo: "Mejor tiempo",
    valor: "-"
  },
  {
    titulo: "Intentos",
    valor: "0"
  }
];

const readStorageScore = () => {
  try {
    const raw = localStorage.getItem("rgScoreData");
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
};

const reactHeaderTemplate = () => {
  const storageData = readStorageScore();

  const rgHeader = document.createElement("header");
  rgHeader.classList.add("rgHeader");
  const divTituloRg = document.createElement("div");
  divTituloRg.classList.add("divTituloRg");
  const botonVolverRg = document.createElement("button");
  botonVolverRg.classList.add("botonVolverRg");
  const homeImg = document.createElement("img");
  homeImg.classList.add("homeImgRg");
  const divInfoRg = document.createElement("div");
  divInfoRg.classList.add("divInfoRg");
  const h1Rg = document.createElement("h1");
  h1Rg.classList.add("h1Rg");
  const h2Rg = document.createElement("h2");
  h2Rg.classList.add("h2Rg");
  const divRellenoRg = document.createElement("div");
  divRellenoRg.classList.add("divRellenoRg");
  const divBoard = document.createElement("div");
  divBoard.classList.add("divBoard");

  for (const element of scoreCards) {
    const div = document.createElement("div");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");

    h4.textContent = element.titulo;
    p.textContent = element.valor;

    if (element.titulo === "Last score" && storageData?.lastTime) {
      p.textContent = `${storageData.lastTime} ms`;
    }
    if (element.titulo === "Mejor tiempo" && storageData?.bestTime) {
      p.textContent = `${storageData.bestTime} ms`;
    }
    if (element.titulo === "Intentos" && typeof storageData?.tries === "number") {
      p.textContent = `${storageData.tries}`;
    }

    div.classList.add("scoreBox");
    div.classList.add("div" + element.titulo.replace(/\s+/g, "-"));
    div.append(h4, p);
    divBoard.append(div);
  }

  botonVolverRg.textContent = "Volver";
  homeImg.src = "src/assets/casazul.png";
  h1Rg.textContent = "⚡︎ Test de Reacción ⚡︎";
  h2Rg.textContent = "Juego interactivo";

  rgHeader.append(divTituloRg, divBoard);
  divTituloRg.append(botonVolverRg, divInfoRg, divRellenoRg);
  botonVolverRg.append(homeImg);
  divInfoRg.append(h1Rg, h2Rg);
  body.append(rgHeader);

  botonVolverRg.addEventListener("click", () => {
    body.innerHTML = "";
    headerTemplate();
    mainTemplate();
    footerTemplate();
  });
};

export default reactHeaderTemplate;