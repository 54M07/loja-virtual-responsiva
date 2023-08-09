document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('.nav-menu');

  hamburgerMenu.addEventListener('click', (event) => {
    navMenu.classList.toggle('open');
    event.preventDefault();
  });
});
