import headerTmpl from '../templates/header.hbs';
import searchModalTmpl from '../templates/modal_header-search.hbs';
import './modal-header-search';

const refs = {
  headerContainer: document.querySelector('.header-container'),
  searchModalContainer: document.querySelector('.search-modal'),
};

function appendHeader() {
  refs.headerContainer.insertAdjacentHTML('beforeend', headerTmpl());
}
appendHeader();

function appendSearchModal() {
  refs.searchModalContainer.insertAdjacentHTML('beforeend', searchModalTmpl());
}
appendSearchModal();
