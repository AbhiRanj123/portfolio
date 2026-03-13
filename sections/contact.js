/* sections/contact.js — Contact HTML template */
var ContactHTML = `
  <section class="section" id="contact">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Let's connect</span>
        <h2 class="section-title">Get In Touch</h2>
        <p class="section-subtitle">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
      </div>

      <div class="contact-grid">
        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon"><i class="fas fa-envelope"></i></div>
            <div>
              <h4>Email</h4>
              <a href="mailto:abhishekranjanmishra4966@gmail.com">abhishekranjanmishra4966@gmail.com</a>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon"><i class="fas fa-map-marker-alt"></i></div>
            <div>
              <h4>Location</h4>
              <p>Bangalore, India</p>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon"><i class="fas fa-briefcase"></i></div>
            <div>
              <h4>Current Role</h4>
              <p>Software Developer I @ SAP Labs India</p>
            </div>
          </div>
          <div class="contact-socials">
            <a href="https://github.com/AbhiRanj123" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
            <a href="#" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" target="_blank" aria-label="LeetCode"><i class="fas fa-code"></i></a>
          </div>
        </div>

        <form class="contact-form" id="contact-form" novalidate>
          <div class="form-row">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" placeholder="John Doe" required />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" placeholder="john@example.com" required />
            </div>
          </div>
          <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Project Inquiry" required />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="6"
              placeholder="Tell me about your project..." required></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-full">
            <span class="btn-text">Send Message</span>
            <i class="fas fa-paper-plane"></i>
          </button>
          <p class="form-status" id="form-status"></p>
        </form>
      </div>
    </div>
  </section>
`;
