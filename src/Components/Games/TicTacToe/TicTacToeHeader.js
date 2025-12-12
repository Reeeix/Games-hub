import './headerstyles.css';
import headerTemplate from '../../Header/header';
import mainTemplate from '../../Main/Main';
import footerTemplate from '../../Footer/footer';
const body = document.querySelector("body");

const counterArray = [
  {titulo:"Jugador X",
  contador: 0
  },
  {titulo: "Empates",
  contador: 0
  },
  {titulo: "Jugador O",
  contador: 0
  }
]

const tictactoeHeaderTemplate = () => {

  const TicTacToeHeader = document.createElement("header");
  TicTacToeHeader.classList.add("tictactoe-header");
  const divTituloTtt = document.createElement("div");
  divTituloTtt.classList.add("tictactoe-div-title");
  const botonVolverttt = document.createElement("button");
  botonVolverttt.classList.add("boton-volver")
  const imgHomeTtt = document.createElement("img");
  imgHomeTtt.classList.add("home-img");
  const divInfoTtt = document.createElement("div");
  divInfoTtt.classList.add("ttt-divinfo");
  const tituloTtt = document.createElement("h1");
  tituloTtt.classList.add("ttt-h1")
  const subtituloTtt = document.createElement("h3");
  subtituloTtt.classList.add("ttt-h3");
  const divRelleno = document.createElement("div");
  divRelleno.classList.add("div-relleno")

  const lastScoreRaw = localStorage.getItem('tttLastScore');
  const divUltima = document.createElement('div');
  divUltima.classList.add('div-ultima');
  const pUltima = document.createElement('p');
  let ultimaText = 'Última puntuación: -';
  if (lastScoreRaw) {
    try {
      const last = JSON.parse(lastScoreRaw);
      const when = last.date ? new Date(last.date).toLocaleString() : null;
      ultimaText = `Última puntuación: ${last.winner}${when ? ' - ' + when : ''}`;
    } catch (e) {
      ultimaText = 'Última puntuación: -';
    }
  }
  pUltima.textContent = ultimaText;
  divUltima.appendChild(pUltima);
  const divCounterTtt = document.createElement("div");
  divCounterTtt.classList.add("ttt-counter")

  for (const element of counterArray) {
    const counterDiv = document.createElement("div");
    const counterTitle = document.createElement("h4");
    const counterNumber = document.createElement("p");

    counterDiv.classList.add("counterDiv", "div" + element.titulo.replace(/\s+/g, "-"));
    counterTitle.textContent = element.titulo;
    counterNumber.textContent = element.contador;

    counterDiv.append(counterTitle, counterNumber);
    divCounterTtt.append(counterDiv);
  }

  botonVolverttt.textContent = "Volver";
  imgHomeTtt.src = "src/assets/casa.png";
  tituloTtt.textContent = "TicTacToe";
  subtituloTtt.textContent = "Clásico estratégico";

  TicTacToeHeader.append(divTituloTtt, divCounterTtt);
  divTituloTtt.append(botonVolverttt, divInfoTtt, divRelleno);
  botonVolverttt.append(imgHomeTtt);
  divInfoTtt.append(tituloTtt, subtituloTtt);
  // Insert the div with last score into the relleno area and append header
  divRelleno.appendChild(divUltima);
  body.append(TicTacToeHeader);

  botonVolverttt.addEventListener('click', () => {
  body.innerHTML = '';
  headerTemplate();
  mainTemplate();
  footerTemplate();
  });

}

export default tictactoeHeaderTemplate;