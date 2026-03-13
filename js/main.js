/* js/main.js — Entry point: renders all sections, then boots all modules */

(function () {
  // 1. Inject all section HTML into #app in order
  document.getElementById('app').innerHTML = [
    NavbarHTML,
    HeroHTML,
    AboutHTML,
    SkillsHTML,
    ProjectsHTML,
    ExperienceHTML,
    AchievementsHTML,
    ContactHTML,
    FooterHTML,
  ].join('\n');

  // 2. Set footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // 3. Boot all behaviour modules
  initTheme();
  initNav();
  initTypewriter();
  initAnimations();
  initFilter();
  initTabs();
  initForm();
})();
