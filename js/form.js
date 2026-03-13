/* js/form.js — Contact form submission via EmailJS
 *
 * Setup (one-time):
 *  1. Go to https://www.emailjs.com and create a free account.
 *  2. Add an Email Service (Gmail recommended) → copy the Service ID.
 *  3. Create an Email Template with these variables:
 *       {{from_name}}  {{from_email}}  {{subject}}  {{message}}
 *     Set "To Email" to abhishekranjanmishra4966@gmail.com.
 *     Copy the Template ID.
 *  4. Go to Account → API Keys → copy your Public Key.
 *  5. Paste all three values into the constants below.
 */

function initForm() {
  const EMAILJS_PUBLIC_KEY  = 'DtQyFLj9RN19nAyNp';   // ← replace
  const EMAILJS_SERVICE_ID  = 'service_84x4vbw';   // ← replace
  const EMAILJS_TEMPLATE_ID = 'template_618nghw';  // ← replace

  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

  const contactForm = document.getElementById('contact-form');
  const formStatus  = document.getElementById('form-status');

  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
      showStatus('Please fill in all fields.', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showStatus('Please enter a valid email address.', 'error');
      return;
    }

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      from_name:  name,
      from_email: email,
      subject:    subject,
      message:    message,
    })
    .then(() => {
      showStatus("Message sent! I'll get back to you soon.", 'success');
      contactForm.reset();
    })
    .catch(err => {
      console.error('EmailJS error:', err);
      showStatus('Failed to send. Please email me directly at abhishekranjanmishra4966@gmail.com', 'error');
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<span class="btn-text">Send Message</span><i class="fas fa-paper-plane"></i>';
    });
  });

  function showStatus(msg, type) {
    formStatus.textContent = msg;
    formStatus.className = `form-status ${type}`;
    setTimeout(() => {
      formStatus.textContent = '';
      formStatus.className   = 'form-status';
    }, 5000);
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}
