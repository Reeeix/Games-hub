import "./footer.css";
import "./responsive.css";

const body = document.querySelector("body");

const footerTemplate = () => {
  const footer = document.createElement("footer");
  footer.classList.add("mainfooter")
  const pFooter = document.createElement("p");
  pFooter.textContent = "Raquel Romero Galindo, RTC project © 2025"

  footer.append(pFooter);
  body.append(footer);
}

export default footerTemplate;