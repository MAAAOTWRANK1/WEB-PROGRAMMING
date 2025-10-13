// Simple reveal-on-scroll using IntersectionObserver
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); } });
}, { threshold: .1 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Smooth scroll for internal links in navbar (Bootstrap already smooths via CSS; ensure offset handling if needed)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Back to top button
const btt = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  btt.style.display = window.scrollY > 600 ? 'block' : 'none';
});
btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Lead form validation + mock submit
(function () {
  const form = document.getElementById('leadForm');
  const alertBox = document.getElementById('formAlert');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();
    
    if (!form.checkValidity()) {
      // Form tidak valid - tampilkan validasi error
      form.classList.add('was-validated');
    } else {
      // Form valid - proses submit
      alertBox.classList.remove('d-none');
      form.reset();
      form.classList.remove('was-validated');
      setTimeout(() => alertBox.classList.add('d-none'), 5000);
    }
  }, false);
})();