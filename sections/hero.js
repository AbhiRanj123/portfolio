/* sections/hero.js — Hero HTML template */
var HeroHTML = `
  <section class="hero" id="home">

    <!-- Blurred profile-picture background -->
    <div class="hero-bg-photo"></div>
    <div class="hero-bg-overlay"></div>

    <!-- Content sits on top -->
    <div class="hero-content">
      <p class="hero-greeting">Hi there, I'm</p>
      <h1 class="hero-name">Abhishek Ranjan</h1>
      <div class="hero-roles">
        <span class="role-text" id="role-text"></span><span class="cursor">|</span>
      </div>
      <p class="hero-description">
        Building scalable systems, enterprise data workflows, and intelligent applications.
        Software Developer at SAP Labs India.
      </p>
      <div class="hero-cta">
        <a href="#projects" class="btn btn-primary">View My Work</a>
        <a href="#contact"  class="btn btn-outline">Get In Touch</a>
      </div>
      <div class="hero-socials">
        <a href="https://github.com/AbhiRanj123" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/abhidebugger/" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://leetcode.com/u/abhi_debugger/" target="_blank" aria-label="LeetCode"><i class="fas fa-code"></i></a>
        <a href="mailto:abhishekranjanmishra4966@gmail.com" aria-label="Email"><i class="fas fa-envelope"></i></a>
      </div>
    </div>

    <div class="hero-visual">
      <div class="avatar-wrapper">
        <div class="avatar-placeholder"><img src="./resources/profilePicture.jpeg" alt="Abhishek Ranjan"></div>
        <div class="avatar-ring ring-1"></div>
        <div class="avatar-ring ring-2"></div>
      </div>
    </div>

    <div class="scroll-indicator">
      <span>Scroll down</span>
      <div class="scroll-arrow"></div>
    </div>
  </section>
`;
