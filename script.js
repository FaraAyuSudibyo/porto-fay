/* ── NAVBAR SCROLL SHADOW ── */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  });
}

/* ── ACTIVE NAV LINK (multi-page: highlight by current filename) ── */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

/* ── HAMBURGER / MOBILE MENU ── */
function toggleMenu() {
  const m = document.getElementById('mobile-menu');
  if (!m) return;
  m.style.display = m.style.display === 'flex' ? 'none' : 'flex';
}
function closeMenu() {
  const m = document.getElementById('mobile-menu');
  if (m) m.style.display = 'none';
}

/* ── SCROLL REVEAL ── */
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => revealObs.observe(el));
}

/* ── SKILL BARS (hanya aktif di skills.html) ── */
const skillSection = document.getElementById('skills');
if (skillSection) {
  const skillObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.skill-fill').forEach(bar => {
          bar.style.width = bar.dataset.level + '%';
        });
        skillObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  skillObs.observe(skillSection);
}