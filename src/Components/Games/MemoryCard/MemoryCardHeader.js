import "./headerstylesmcg.css"
import "./header-responsive.css"
import headerTemplate from '../../Header/header';
import mainTemplate from '../../Main/Main';
import footerTemplate from '../../Footer/footer';
import { clearApp, getAppRoot } from '../../../utils/appRoot';
import { clearPendingFlip } from './MemoryCard';

export let arrayMcg = [
  {
    Titulo: "Tiempo",
    Valor: 0
  },
  {
    Titulo: "Movimientos",
    Valor: 0
  },
  {
    Titulo: "Parejas",
    Valor: 0,
  },
  {
    Titulo: "Última puntuación",
    Movimientos: "",
    Tiempo: "",
  }]

const memoryCardHeaderTemplate = () => {
  const mcgHeader = document.createElement("header"); 
  mcgHeader.classList.add("mcgHeader");
  const divTituloMcg = document.createElement("div"); 
  divTituloMcg.classList.add("divTituloMcg");
  const divInfoMcg = document.createElement("div"); 
  divInfoMcg.classList.add("divInfoMcg");
  const botonVolverMcg = document.createElement("button"); 
  botonVolverMcg.classList.add("botonVolverMcg");
  const imgHomeMcg = document.createElement("img"); 
  imgHomeMcg.classList.add("imgHomeMcg");
  const tituloMcg = document.createElement("h1"); 
  tituloMcg.classList.add("tituloMcg");
  const img1Titulo = document.createElement("img"); 
  img1Titulo.classList.add("imgTituloMcg");
  const img2Titulo = document.createElement("img"); 
  img2Titulo.classList.add("imgTituloMcg");
  const subtituloMcg = document.createElement("h3"); 
  subtituloMcg.classList.add("subtituloMcg");
  const divRellenoMcg = document.createElement("div"); 
  divRellenoMcg.classList.add("divRellenoMcg");
  const divCounterMcg = document.createElement("div"); 
  divCounterMcg.classList.add("divCounterMcg");

  //Dar contenido
  img1Titulo.src = "src/assets/cerebro(1).png";
  img2Titulo.src = "src/assets/cerebro(1).png";
  imgHomeMcg.src = "src/assets/casarosa.png";
  botonVolverMcg.textContent = "Volver";
  botonVolverMcg.append(imgHomeMcg);

  subtituloMcg.textContent = "Desafía tu memoria";

  //Estructurar

  for (const element of arrayMcg) {
    const counterDiv = document.createElement("div");
    const counterTitle = document.createElement("h4");
    const counterNumber = document.createElement("p");

    counterTitle.textContent = element.Titulo;
    if (element.Titulo === "Última puntuación") {
      let lastText = "-";
      try {
        const raw = localStorage.getItem('mcgLastScore');
        if (raw) {
          const last = JSON.parse(raw);
          lastText = `${last.movimientos}mov/${last.tiempo}s`;
        }
      } catch (e) {
        lastText = element.Movimientos || "-";
      }
      counterNumber.textContent = lastText;
    } else {
      counterNumber.textContent = element.Valor;
    }

    counterDiv.classList.add("counterDivMcg", "div" + element.Titulo.replace(/\s+/g, "-"));
    counterDiv.append(counterTitle, counterNumber);
    divCounterMcg.append(counterDiv);
  }
  
  const tituloTextNode = document.createTextNode("Memory Card");
  tituloMcg.append(img1Titulo, tituloTextNode, img2Titulo);

  divInfoMcg.append(tituloMcg, subtituloMcg);
  divTituloMcg.append(botonVolverMcg, divInfoMcg, divRellenoMcg);
  mcgHeader.append(divTituloMcg, divCounterMcg);
  const appRoot = getAppRoot();
  if (appRoot) appRoot.append(mcgHeader);

  botonVolverMcg.addEventListener('click', () => {
    clearPendingFlip();
    clearApp();
    headerTemplate();
    mainTemplate();
    footerTemplate();
  });
}

export default memoryCardHeaderTemplate;