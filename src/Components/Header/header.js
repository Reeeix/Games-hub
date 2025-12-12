import "./styles.css"

const body = document.querySelector("body");

const headerTemplate = () => {
  //Creamos los elementos
  const headerSection = document.createElement("header");
  headerSection.classList.add("mainHeader");

  const headerDiv = document.createElement("div");
  headerDiv.classList.add("headerDiv")

  const h1 = document.createElement("h1");
  h1.classList.add("anim-pulse");
  

  const divImgMando = document.createElement("div");
  divImgMando.classList.add("divImgMando")

  const img = document.createElement("img");
  img.classList.add(".imgMando", "anim-pulse");

  const headerLine = document.createElement("div");
  headerLine.classList.add("headerLine");

  //Damos contenido
  h1.textContent = "Games Hub Project"

  img.src = "src/assets/palanca-de-mando.png"
  img.alt = "Icono de mando"
  

  //Introducimos en el DOM
  divImgMando.append(img);
  headerDiv.append(h1, divImgMando);
  headerSection.append(headerDiv, headerLine);
  body.append(headerSection);
}

export default headerTemplate;
