import "./styles.css"
import "./responsive.css"
import tictactoeHeaderTemplate from "../Games/TicTacToe/TicTacToeHeader";
import mainTictactoeTemplate from "../Games/TicTacToe/TicTacToeMain";
import footerTictactoeTemplate from "../Games/TicTacToe/TicTacToeFooter";
import initTicTacToe from "../Games/TicTacToe/TicTacToe";
import memoryCardHeaderTemplate from "../Games/MemoryCard/MemoryCardHeader";
import mainMemoryCardTemplate from "../Games/MemoryCard/MemoryCardMain";
import memoryCardFooterTemplate from "../Games/MemoryCard/MemoryCardFooter";
import initMeMoryCard from "../Games/MemoryCard/MemoryCard";
import reactHeaderTemplate from "../Games/Reaction/ReactHeader";
import reactMainTemplate from "../Games/Reaction/ReactMain";
import initReactionGame from "../Games/Reaction/Reaction";

const body = document.querySelector("body");
const arrayJuegos = [
  {nombre: "TicTacToe",
   descripcion: "Clásico estratégico",
   icono: "src/assets/tres-en-raya.png"
  },
  {nombre: "React",
   descripcion: "Juego interactivo",
   icono: "src/assets/diana.png"
  },
  {nombre: "Memory Card",
   descripcion: "Desafía tu mente",
   icono: "src/assets/cerebro.png"
  }
]

const mainTemplate = () => {
  const mainSection = document.createElement("section");
  mainSection.classList.add("mainSection");

  const buttonContainerJuegos = document.createElement("div");
  buttonContainerJuegos.classList.add("divBotones");

  for (const juego of arrayJuegos) {
    const buttonJuego = document.createElement("button");
    buttonJuego.type = "button";
    buttonJuego.classList.add("div" + juego.nombre.replace(/\s+/g, "-"), "divJuego");

    const buttonIcono = document.createElement("div");
    buttonIcono.classList.add("divIcono");

    const icono = document.createElement("img");
    icono.src = juego.icono;

    const h3 = document.createElement("h3");
    h3.textContent = juego.nombre;

    const p = document.createElement("p");
    p.textContent = juego.descripcion;
    buttonIcono.append(icono);
    buttonJuego.append(buttonIcono, h3, p);
    buttonContainerJuegos.append(buttonJuego);

    buttonJuego.addEventListener("click", () => {
      body.innerHTML = "";
      if (juego.nombre === "TicTacToe"){
        tictactoeHeaderTemplate();
        mainTictactoeTemplate();
        footerTictactoeTemplate();
        initTicTacToe();
      } else if (juego.nombre === "React") {
        reactHeaderTemplate();
        reactMainTemplate();
        initReactionGame();
      } else if (juego.nombre === "Memory Card") {
        memoryCardHeaderTemplate();
        mainMemoryCardTemplate();
        memoryCardFooterTemplate();
        initMeMoryCard();
      }
    });
  }
  
  const divTituloMain = document.createElement("div");
  divTituloMain.classList.add("divTituloMain");

  const h2 = document.createElement("h2");
  h2.classList.add("anim-pulseSoft");
  h2.textContent = "✨ Selecciona un juego para empezar tu aventura ✨"

  const divPuntitos = document.createElement("div");
  divPuntitos.classList.add("divPuntitos");

  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  p1.classList.add("anim-bounce")
  p1.textContent = ".";
  p2.classList.add("anim-bounce", "delay-100")
  p2.textContent = ".";
  p3.classList.add("anim-bounce", "delay-200")
  p3.textContent = "."

  divPuntitos.append(p1, p2, p3)
  divTituloMain.append(h2, divPuntitos);
  mainSection.append(buttonContainerJuegos, divTituloMain)
  body.append(mainSection);
}

export default mainTemplate;