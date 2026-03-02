import "./footer.css";
import "./responsive.css";
import { getAppRoot } from "../../utils/appRoot";

const footerTemplate = () => {
  const footer = document.createElement("footer");
  footer.classList.add("mainfooter")
  const pFooter = document.createElement("p");
  pFooter.textContent = "Raquel Romero Galindo, RTC project © 2025"

  footer.append(pFooter);
  const appRoot = getAppRoot();
  if (appRoot) appRoot.append(footer);
}

export default footerTemplate;