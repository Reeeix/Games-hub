import "./mainstylesmcg.css"
import "./main-responsive.css"
import { getAppRoot } from "../../../utils/appRoot";

const mainMemoryCardTemplate = () => {
  const mcgMainSection = document.createElement("section");
  mcgMainSection.classList.add("mcg-mainsection");

  const divGameMcg = document.createElement("div");
  divGameMcg.classList.add("mcg-divGame");

  const emojis = ["😀", "😎", "😺", "🤖", "🐸", "🐵", "🐙", "🦊"];
  const arrayCartas = [...emojis, ...emojis]
    .sort(() => Math.random() - 0.5)
    .map((emoji, index) => ({
      id: index,
      texto: emoji,
    }));

  for (const carta of arrayCartas) {
    const buttonCasilla = document.createElement("button");
    buttonCasilla.type = "button";
    buttonCasilla.classList.add("casillamcg");
    buttonCasilla.dataset.id = carta.id;

    const p = document.createElement("p");
    p.textContent = carta.texto;
    p.classList.add("hidden");

    buttonCasilla.appendChild(p);
    divGameMcg.appendChild(buttonCasilla);
  }

  mcgMainSection.append(divGameMcg);
  const appRoot = getAppRoot();
  if (appRoot) appRoot.append(mcgMainSection);
}

export default mainMemoryCardTemplate;