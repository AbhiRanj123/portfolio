/* js/tabs.js — Experience / Education / Activities tab switcher */

function initTabs() {
  const tabBtns        = document.querySelectorAll('.tab-btn');
  const tabWork        = document.getElementById('tab-work');
  const tabEducation   = document.getElementById('tab-education');
  const tabActivities  = document.getElementById('tab-activities');

  const allTabs = [tabWork, tabEducation, tabActivities].filter(Boolean);

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      allTabs.forEach(t => t && t.classList.add('hidden'));

      const target = document.getElementById('tab-' + btn.dataset.tab);
      if (target) target.classList.remove('hidden');
    });
  });
}
