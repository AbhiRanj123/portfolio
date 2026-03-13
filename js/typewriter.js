/* js/typewriter.js — Typewriter role animation in hero */

function initTypewriter() {
  const roles = [
    'Software Engineer',
    'Full Stack Developer',
    'AI / ML Enthusiast',
    'Problem Solver',
    'SAP Developer',
  ];

  const roleText  = document.getElementById('role-text');
  let roleIndex   = 0;
  let charIndex   = 0;
  let isDeleting  = false;

  function tick() {
    const current = roles[roleIndex];
    if (isDeleting) {
      roleText.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      roleText.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? 60 : 100;

    if (!isDeleting && charIndex === current.length) {
      delay = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting  = false;
      roleIndex   = (roleIndex + 1) % roles.length;
      delay       = 300;
    }

    setTimeout(tick, delay);
  }

  tick();
}
