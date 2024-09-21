const copyright = document.querySelector('.copyright-date');
const date = new Date().getFullYear();
copyright.textContent = date;

const hamBtn = document.querySelector('.ham');
const container = document.querySelector('.navbar');
const header = document.querySelector('.header');

hamBtn.addEventListener('click', () => {
  container.classList.toggle('showMenu');
  //header.classList.toggle('showMenu');
});
