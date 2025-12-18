// Small page scripts
document.getElementById('year').textContent = new Date().getFullYear();

const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.site-nav');
menuToggle && menuToggle.addEventListener('click', () => {
  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.gap = '0.75rem';
    nav.style.padding = '1rem 0';
    nav.style.background = '#fff';
  }
});
