const toggle = document.querySelector('.menu'), nav = document.querySelector('nav');
if (toggle && nav) {
    toggle.addEventListener('click', () => {
        const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open));
    });
}
const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(a => {
    if (a.getAttribute('href') === current) a.classList.add('active');
});
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
