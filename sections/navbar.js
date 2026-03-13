/* sections/navbar.js — Navigation HTML template */
var NavbarHTML = `
  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <a href="#home" class="nav-logo">Abhishek R<span>anjan</span></a>
      <ul class="nav-links" id="nav-links">
        <li><a href="#home"          class="nav-link active">Home</a></li>
        <li><a href="#about"         class="nav-link">About</a></li>
        <li><a href="#skills"        class="nav-link">Skills</a></li>
        <li><a href="#projects"      class="nav-link">Projects</a></li>
        <li><a href="#experience"    class="nav-link">Experience</a></li>
        <li><a href="#achievements"  class="nav-link">Achievements</a></li>
        <li><a href="#contact"       class="nav-link">Contact</a></li>
      </ul>
      <div class="nav-actions">
        <button class="theme-toggle" id="theme-toggle" aria-label="Toggle theme">
          <i class="fas fa-moon"></i>
        </button>
        <button class="hamburger" id="hamburger" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>
`;
