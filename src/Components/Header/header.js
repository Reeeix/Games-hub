import "./styles.css"
import "./responsive.css"

const body = document.querySelector("body");

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
  body.append(headerSection);
}

export default headerTemplate;
