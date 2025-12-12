import "./mainstylesmcg.css"
const body = document.querySelector("body");

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
    const casilla = document.createElement("div");
    casilla.classList.add("casillamcg");
    casilla.dataset.id = carta.id;

    const p = document.createElement("p");
    p.textContent = carta.texto;
    p.classList.add("hidden");

    casilla.appendChild(p);
    divGameMcg.appendChild(casilla);
  }

  mcgMainSection.append(divGameMcg);
  body.append(mcgMainSection);
}

export default mainMemoryCardTemplate;