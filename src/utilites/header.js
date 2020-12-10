import headerTmpl from '../templates/header.hbs';
import searchModalTmpl from '../templates/modal_header-search.hbs';
// import './modal-header-search';

const refs = {
  headerContainer: document.querySelector('.header-container'),
  searchModalContainer: document.querySelector('.search-modal'),
};

const headerMarkup = headerTmpl();
const searchModalMarkup = searchModalTmpl();

refs.headerContainer.innerHTML = headerMarkup;
refs.searchModalContainer.innerHTML = searchModalMarkup;

const openSearchModalBtn = document.querySelector('[data="modal-open"]');

const closeSearchModalBtn = document.querySelector('[data="modal-close"]');

const backdrop = document.querySelector('[data-modal]');

openSearchModalBtn.addEventListener('click', toggleModal);
closeSearchModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  backdrop.classList.toggle('is-hidden');
}
