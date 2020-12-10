const refs = {
  openSearchModalBtn: document.querySelector('[data="modal-open"]'),
  closeSearchModalBtn: document.querySelector('[data="modal-close"]'),
  backdrop: document.querySelector('[data-modal]'),
};
console.log(refs.openSearchModalBtn);
console.log(refs.closeSearchModalBtn);
console.log(refs.backdrop);

refs.openSearchModalBtn.addEventListener('click', toggleModal);
refs.closeSearchModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  console.log('eqweqw');
  refs.backdrop.classList.toggle('is-hidden');
}
