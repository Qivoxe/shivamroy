/* ============================================================
   shivam. — script.js
   EDIT-ME: projects, now-items, and social links live below.
   ============================================================ */

// add a js class so CSS only hides content for reveal when JS works
document.documentElement.classList.add('js');

/* ---------------- PROJECTS (edit me) ---------------- */
const PROJECTS = [
  {
    name: "LOB Terminal",
    desc: "a C++20 limit order book with price-time priority, order matching, and performance benchmarks.",
    tags: ["C++20", "data structures", "benchmarks"],
    github: "https://github.com/",           // ← replace with the repo link when live
  },
  {
    name: "Quant Experiments",
    desc: "a collection of experiments exploring probability, mathematics, and quantitative finance.",
    tags: ["python", "probability", "statistics"],
    github: "https://github.com/",
  },
  {
    name: "Game Dev",
    desc: "game prototypes, gameplay experiments, and performance-focused development.",
    tags: ["gamedev", "prototyping", "C++"],
    github: "https://github.com/",
  },
];

/* ---------------- NOW (edit me) ---------------- */
const NOW = [
  "mathematics and probability",
  "quantitative finance and trading systems",
  "game development and programming experiments",
];

/* ---------------- render projects ---------------- */
const projectList = document.getElementById('project-list');

PROJECTS.forEach((p) => {
  const li = document.createElement('li');
  li.innerHTML = `
    <a class="project-row" href="${p.github}" target="_blank" rel="noopener noreferrer"
       aria-label="${p.name} on github">
      <div class="project-head">
        <span class="project-name">${p.name} <span class="arrow" aria-hidden="true">↗</span></span>
        <span class="project-gh">github ↗</span>
      </div>
      <p class="project-desc">${p.desc}</p>
      <ul class="tags" aria-label="technologies">
        ${p.tags.map((t) => `<li>${t}</li>`).join('')}
      </ul>
    </a>`;
  projectList.appendChild(li);
});

/* ---------------- render now ---------------- */
const nowList = document.getElementById('now-list');
NOW.forEach((item) => {
  const li = document.createElement('li');
  li.textContent = item;
  nowList.appendChild(li);
});

/* ---------------- mobile nav toggle ---------------- */
const toggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'close menu' : 'toggle menu');
});

// close menu after tapping a link (mobile)
navLinks.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// close menu on Escape for keyboard users
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.focus();
  }
});

/* ---------------- reveal on scroll (subtle) ---------------- */
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReduced && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
}

/* ---------------- live local time (optional, subtle) ---------------- */
const timeEl = document.getElementById('local-time');

function updateTime() {
  const now = new Date();
  timeEl.textContent = 'local time — ' +
    now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}
updateTime();
setInterval(updateTime, 1000);
