document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(section);
});

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}`
      ? 'var(--text)'
      : 'var(--text-muted)';
  });
});

const colorScheme = document.querySelector('meta[name=color-scheme]');
const toggleBtn = document.getElementById('themeToggle');
const icon = toggleBtn.querySelector('i');

// Applique le thème sauvegardé au chargement
const saved = localStorage.getItem('theme') || 'dark';
applyTheme(saved);

toggleBtn.addEventListener('click', () => {
  const current = document.body.classList.contains('light') ? 'light' : 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('theme', next);
});

function applyTheme(theme) {
  if (theme === 'light') {
    document.body.classList.add('light');
    icon.className = 'fa-solid fa-moon';
  } else {
    document.body.classList.remove('light');
    icon.className = 'fa-solid fa-sun';
  }
}