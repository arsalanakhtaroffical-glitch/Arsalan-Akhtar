// ---------- Nav scroll state ----------
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 12);
}, { passive: true });

// ---------- Mobile menu ----------
const toggle = document.querySelector('.nav-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
toggle.addEventListener('click', () => {
  toggle.classList.toggle('is-open');
  mobileMenu.classList.toggle('is-open');
  document.body.style.overflow = mobileMenu.classList.contains('is-open') ? 'hidden' : '';
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  toggle.classList.remove('is-open');
  mobileMenu.classList.remove('is-open');
  document.body.style.overflow = '';
}));

// ---------- Scroll reveal ----------
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('is-visible'));
}

// ---------- Floating CTA visibility ----------
const floatingCta = document.getElementById('floating-cta');
if (floatingCta) {
  window.addEventListener('scroll', () => {
    floatingCta.classList.toggle('is-visible', window.scrollY > 480);
  }, { passive: true });
}

// ---------- Insight cards (expand in place) ----------
document.querySelectorAll('[data-insight]').forEach(card => {
  const btn = card.querySelector('.insight-read');
  const body = card.querySelector('.insight-body');
  btn.addEventListener('click', () => {
    const isOpen = card.classList.contains('is-open');
    card.classList.toggle('is-open', !isOpen);
    btn.setAttribute('aria-expanded', String(!isOpen));
    btn.firstChild.textContent = !isOpen ? 'Close ' : 'Read ';
    body.style.maxHeight = !isOpen ? body.scrollHeight + 'px' : null;
  });
});

// ---------- FAQ accordion ----------
document.querySelectorAll('.faq-item').forEach(item => {
  const btn = item.querySelector('.faq-q');
  const answer = item.querySelector('.faq-a');
  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('is-open');
    document.querySelectorAll('.faq-item.is-open').forEach(open => {
      if (open !== item) {
        open.classList.remove('is-open');
        open.querySelector('.faq-a').style.maxHeight = null;
      }
    });
    item.classList.toggle('is-open', !isOpen);
    answer.style.maxHeight = !isOpen ? answer.scrollHeight + 'px' : null;
  });
});

// ---------- Checkbox pills (services interested in) ----------
document.querySelectorAll('.checkbox-pill').forEach(pill => {
  const input = pill.querySelector('input');
  pill.addEventListener('click', (e) => {
    if (e.target.tagName !== 'INPUT') input.checked = !input.checked;
    pill.classList.toggle('is-checked', input.checked);
  });
});

// ---------- Form validation + submission to hello@arsalanakhtar.com ----------
// Sent via FormSubmit (formsubmit.co) — no backend or account needed.
// NOTE: the first submission after deploying will trigger a one-time
// "activation" email from FormSubmit to hello@arsalanakhtar.com — that
// email must be opened and confirmed once before submissions start
// arriving normally.
const form = document.getElementById('inquiry-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('[data-required]').forEach(field => {
      const errorEl = field.parentElement.querySelector('.form-error');
      const empty = !field.value || !field.value.trim();
      if (empty) {
        valid = false;
        if (errorEl) errorEl.style.display = 'block';
        field.style.borderColor = '#B4432E';
      } else {
        if (errorEl) errorEl.style.display = 'none';
        field.style.borderColor = '';
      }
    });
    const emailField = form.querySelector('#field-email');
    if (emailField && emailField.value) {
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value);
      if (!emailOk) {
        valid = false;
        emailField.style.borderColor = '#B4432E';
        emailField.parentElement.querySelector('.form-error').style.display = 'block';
        emailField.parentElement.querySelector('.form-error').textContent = 'Enter a valid work email.';
      }
    }
    if (!valid) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) { submitBtn.disabled = true; submitBtn.style.opacity = '0.6'; }

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    })
      .then(() => {
        form.style.display = 'none';
        const success = document.createElement('div');
        success.className = 'form-success';
        success.textContent = "Thanks — your message is in. I'll reply within 1–2 business days.";
        form.parentElement.appendChild(success);
      })
      .catch(() => {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.style.opacity = ''; }
        alert("Something went wrong sending your message. Please try again or email hello@arsalanakhtar.com directly.");
      });
  });
}

// ---------- Current year ----------
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
