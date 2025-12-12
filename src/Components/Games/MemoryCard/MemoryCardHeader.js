import "./headerstylesmcg.css"

const body = document.querySelector("body");
import headerTemplate from '../../Header/header';
import mainTemplate from '../../Main/Main';
import footerTemplate from '../../Footer/footer';

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
  const mcgHeader = document.createElement("header"); //ok
  mcgHeader.classList.add("mcgHeader");
  const divTituloMcg = document.createElement("div"); //ok
  divTituloMcg.classList.add("divTituloMcg");
  const divInfoMcg = document.createElement("div"); //ok
  divInfoMcg.classList.add("divInfoMcg");
  const botonVolverMcg = document.createElement("button"); //ok
  botonVolverMcg.classList.add("botonVolverMcg");
  const imgHomeMcg = document.createElement("img"); //ok
  imgHomeMcg.classList.add("imgHomeMcg");
  const tituloMcg = document.createElement("h1"); //ok
  tituloMcg.classList.add("tituloMcg");
  const img1Titulo = document.createElement("img"); //ok
  img1Titulo.classList.add("imgTituloMcg");
  const img2Titulo = document.createElement("img"); //ok
  img2Titulo.classList.add("imgTituloMcg");
  const subtituloMcg = document.createElement("h3"); //ok
  subtituloMcg.classList.add("subtituloMcg");
  const divRellenoMcg = document.createElement("div"); //ok
  divRellenoMcg.classList.add("divRellenoMcg");
  const divCounterMcg = document.createElement("div"); //ok
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
    // If this is the "Última puntuación" counter, try to read the last score from localStorage
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
  body.append(mcgHeader);

  botonVolverMcg.addEventListener('click', () => {
    body.innerHTML = '';
    headerTemplate();
    mainTemplate();
    footerTemplate();
  });
}

export default memoryCardHeaderTemplate;