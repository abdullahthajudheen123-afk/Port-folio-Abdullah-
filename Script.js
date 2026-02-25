// Smooth scroll for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Theme toggle (dark/light)
const toggle = document.getElementById('themeToggle');

if (toggle) {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    toggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
  });
}

// Squad click glow effect
const members = document.querySelectorAll('.member');

members.forEach(member => {
  member.addEventListener('click', () => {
    members.forEach(m => m.classList.remove('active-glow'));
    member.classList.add('active-glow');
  });
});
