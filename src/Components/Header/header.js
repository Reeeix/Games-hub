import "./header.styles.css"
import "./header.responsive.css"
import { getAppRoot } from "../../utils/appRoot";

const headerTemplate = () => {
  const headerSection = document.createElement("header");
  headerSection.classList.add("mainHeader");

  const headerDiv = document.createElement("div");
  headerDiv.classList.add("headerDiv")

  const h1 = document.createElement("h1");
  h1.classList.add("anim-pulse");
  
  const divImgMando = document.createElement("div");
  divImgMando.classList.add("divImgMando")

  const imgMando = document.createElement("img");
  imgMando.classList.add("imgMando");

  const headerLine = document.createElement("div");
  headerLine.classList.add("headerLine");

  h1.textContent = "Games Hub Project"

  imgMando.src = "src/assets/palanca-de-mando.png"
  imgMando.alt = "Icono de mando"
  
  divImgMando.append(imgMando);
  headerDiv.append(h1, divImgMando);
  headerSection.append(headerDiv, headerLine);
  const appRoot = getAppRoot();
  if (appRoot) appRoot.append(headerSection);
}

export default headerTemplate;
