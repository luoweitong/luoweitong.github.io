const root = document.documentElement;
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'dark' || savedTheme === 'light') root.dataset.theme = savedTheme;

document.querySelector('#theme-toggle').addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  localStorage.setItem('portfolio-theme', next);
});

document.querySelector('#menu-toggle').addEventListener('click', () => {
  document.body.classList.toggle('menu-open');
});

const navLinks = [...document.querySelectorAll('nav a')];
navLinks.forEach((link) => link.addEventListener('click', () => {
  document.body.classList.remove('menu-open');
}));

const sections = [...document.querySelectorAll('main section[id]')];
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
  });
}, { rootMargin: '-25% 0px -65% 0px' });
sections.forEach((section) => observer.observe(section));
