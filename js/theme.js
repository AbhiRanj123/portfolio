/* js/theme.js — Dark / Light theme toggle */

function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const html        = document.documentElement;

  const saved = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', saved);
  setIcon(saved);

  themeToggle.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    setIcon(next);
  });

  function setIcon(theme) {
    themeToggle.querySelector('i').className =
      theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}
