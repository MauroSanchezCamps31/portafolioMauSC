const button = document.querySelector('.button-footer');

button.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
})