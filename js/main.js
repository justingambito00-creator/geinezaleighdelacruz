/* Shared interactive behavior. No libraries, tracking, or server required. */
'use strict';
// Mobile navigation: toggle links and tell screen readers whether the menu is expanded.
const menuButton = document.querySelector('[data-menu-button]');
const navLinks = document.querySelector('[data-nav-links]');
if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? 'Close menu' : 'Menu';
  });
}
// Fade sections into view. If IntersectionObserver is unavailable, show them immediately.
const sections = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.08 });
  sections.forEach(section => observer.observe(section));
} else { sections.forEach(section => section.classList.add('visible')); }
// Contact form: prepare an email in the visitor's own email app.
// Static HTML cannot deliver messages automatically without a backend or email service.
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  const status = document.querySelector('#form-status');
  const compose = () => {
    const name = contactForm.elements.namedItem('name').value.trim();
    const email = contactForm.elements.namedItem('email').value.trim();
    const message = contactForm.elements.namedItem('message').value.trim();
    return {name,email,message,subject:`Portfolio inquiry from ${name}`,body:`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`};
  };
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const data = compose();
    const url = `mailto:leighdelacruz068@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(data.body)}`;
    status.textContent = 'Opening your email app. Please press Send there to finish.';
    window.location.href = url;
  });
  document.querySelector('#copy-message').addEventListener('click', async () => {
    if (!contactForm.reportValidity()) return;
    const data = compose();
    const text = `To: leighdelacruz068@gmail.com\nSubject: ${data.subject}\n\n${data.body}`;
    try { await navigator.clipboard.writeText(text); status.textContent = 'Message copied. Paste it into Gmail and send.'; }
    catch { status.textContent = 'Copy is unavailable here. Use Send via email or copy your message manually.'; }
  });
}
