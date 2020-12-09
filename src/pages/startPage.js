import StartPageTemplate from '../templates/start_page.hbs';

import {
  headerItemRef,
  homeRef
} from '../constants/variables';

const refs = {};
let buttonsArrRef = [];

function renderBaseMarkup() {
  ROOT_DOM.innerHTML = StartPageTemplate();
}
function MainPage() {
  renderBaseMarkup();
}

export default MainPage;
