document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (!menuToggle || !nav) return;

  const closeNav = () => {
    nav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  nav.addEventListener('click', event => {
    if (event.target.tagName.toLowerCase() === 'a') {
      closeNav();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 640) {
      closeNav();
    }
  });
});
