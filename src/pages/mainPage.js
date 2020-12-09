import MainPageTemplate from '../templates/Main.hbs';

import {
  ROOT_DOM,
  headerItemRef,
  homeRef
} from '../constants';

const refs = {};
let buttonsArrRef = [];

function renderBaseMarkup() {
  ROOT_DOM.innerHTML = MainPageTemplate();
}
function MainPage() {
  renderBaseMarkup();
}

export default MainPage;
