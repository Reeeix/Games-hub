import "./footerstyles.css";
import "./footer-responsive.css";
import { getAppRoot } from "../../../utils/appRoot";

const footerTictactoeTemplate = () => {

  const tttFooter = document.createElement("footer");
  tttFooter.classList.add("ttt-footer");
  const newGamettt = document.createElement("button");
  newGamettt.classList.add("new-game-ttt");
  const restartTtt = document.createElement("button");
  restartTtt.classList.add("restart-ttt");

  newGamettt.textContent = "Nueva Partida";
  restartTtt.textContent = "Reiniciar marcador";

  const appRoot = getAppRoot();
  if (appRoot) appRoot.append(tttFooter);
  tttFooter.append(newGamettt, restartTtt);

}

export default footerTictactoeTemplate;