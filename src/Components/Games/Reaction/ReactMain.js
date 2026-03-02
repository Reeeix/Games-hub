import "./mainstilesrg.css";
import "./main-responsive.css";
import { getAppRoot } from "../../../utils/appRoot";

const reactMainTemplate = () => {
	const rgMainSection = document.createElement("section");
	rgMainSection.classList.add("rgMainSection");

	const rgGameBox = document.createElement("div");
	rgGameBox.classList.add("rgGameBox", "estado-inicial");

	const pMessage = document.createElement("p");
	pMessage.classList.add("pMessageRg");
	pMessage.textContent = "Dale a iniciar, y cuando la pantalla se ponga roja, haz click lo más rapido que puedas!";

	const buttonIniciar = document.createElement("button");
	buttonIniciar.classList.add("buttonIniciarRg");
	buttonIniciar.textContent = "Iniciar";

	rgMainSection.append(rgGameBox);
	rgGameBox.append(pMessage, buttonIniciar);
	const appRoot = getAppRoot();
	if (appRoot) appRoot.append(rgMainSection);
};

export default reactMainTemplate;
