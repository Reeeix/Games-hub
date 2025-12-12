import './global.css';
import './reset.css';

import headerTemplate from './Components/Header/header';
import mainTemplate from './Components/Main/Main';
import footerTemplate from './Components/Footer/footer';

const mainMenuPageTemplate = () => {
  headerTemplate();
  mainTemplate();
  footerTemplate();
}
mainMenuPageTemplate();


