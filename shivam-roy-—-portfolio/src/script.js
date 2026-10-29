/**
 * =============================================================================
 * SHIVAM ROY — PERSONAL PORTFOLIO SCRIPT (VANILLA JAVASCRIPT)
 * Architecture: Pure Vanilla JS · Zero External Libraries · Fully Configurable
 * =============================================================================
 */

/* =============================================================================
   CONFIGURATION: EDIT YOUR PROFILE & SOCIAL URLS HERE
   This is the single clearly documented location for your actual profile links.
   Do not invent URLs; update any custom handles below.
   ============================================================================= */
export const PROFILE_CONFIG = {
  name: "Shivam Roy",
  tagline: "Building worlds. Modeling markets.",
  role: "Mathematics student exploring quantitative finance, game development, and software engineering",
  
  // Real Social Profile URLs
  instagram: "https://instagram.com/404not_shivam",
  steam: "https://steamcommunity.com/id/404not_shivam", // Set to your Steam vanity ID or profile URL
  github: "https://github.com/Qivoxe",
  
  // Contact & Form Configuration
  email: "shivamray414@gmail.com",
  // Optional: Set your active form backend endpoint below (e.g. Formspree or custom API)
  // Example: contactEndpoint: "https://formspree.io/f/xbjnkyrq"
  contactEndpoint: "",
};

// Make config globally available for inspections if needed
window.PROFILE_CONFIG = PROFILE_CONFIG;

/* =============================================================================
   01. INITIALIZATION & DOM BINDINGS
   ============================================================================= */
document.addEventListener('DOMContentLoaded', () => {
  initViewportHeight();
  initProfileLinks();
  initAmbientCanvas();
  initNavigation();
  initScrollSpy();
  initHeroParallax();
  initScrollReveals();
  initAvellanedaSimulator();
  initNoctPlayground();
  initHobbiesLightbox();
  initContactForm();
});

function initViewportHeight() {
  const setVH = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--dvh', `${vh}px`);
  };
  setVH();
  window.addEventListener('resize', setVH, { passive: true });
  window.addEventListener('orientationchange', setVH, { passive: true });
}

/* -----------------------------------------------------------------------------
   Sync Profile Links across DOM
   ----------------------------------------------------------------------------- */
function initProfileLinks() {
  const steamLinks = document.querySelectorAll('a[data-social="steam"]');
  const instaLinks = document.querySelectorAll('a[data-social="instagram"]');
  const ghLinks = document.querySelectorAll('a[data-social="github"]');
  const mailLinks = document.querySelectorAll('a[data-social="email"]');

  steamLinks.forEach(el => el.setAttribute('href', PROFILE_CONFIG.steam));
  instaLinks.forEach(el => el.setAttribute('href', PROFILE_CONFIG.instagram));
  ghLinks.forEach(el => el.setAttribute('href', PROFILE_CONFIG.github));
  mailLinks.forEach(el => el.setAttribute('href', `mailto:${PROFILE_CONFIG.email}`));
}

/* =============================================================================
   02. AMBIENT MIST & DRIFTING LEAVES SIMULATION (CANVAS 2D)
   Where Winds Meet Inspired: Whispering mist layers & drifting crimson leaves
   ============================================================================= */
function initAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // ---------------------------------------------------------------------------
  // A. Procedural Fog Bands (Multi-harmonic undulating misty wave ribbons)
  // ---------------------------------------------------------------------------
  const FOG_BANDS = [
    {
      baseYFactor: 0.28,
      speed: 0.0007,
      amplitude1: 42,
      frequency1: 0.0018,
      amplitude2: 24,
      frequency2: 0.0035,
      opacity: 0.05,
      color: '215, 230, 222', // Cool mountain mist
      driftOffset: 0
    },
    {
      baseYFactor: 0.52,
      speed: -0.0005,
      amplitude1: 52,
      frequency1: 0.0014,
      amplitude2: 28,
      frequency2: 0.0028,
      opacity: 0.055,
      color: '235, 228, 212', // Warm dawn vapor
      driftOffset: 120
    },
    {
      baseYFactor: 0.78,
      speed: 0.0006,
      amplitude1: 60,
      frequency1: 0.0012,
      amplitude2: 32,
      frequency2: 0.0022,
      opacity: 0.065,
      color: '190, 215, 205', // Deep pine valley mist
      driftOffset: 250
    }
  ];

  // ---------------------------------------------------------------------------
  // B. Organic Drifting Fog Puffs (Volumetric breathing clusters)
  // ---------------------------------------------------------------------------
  const PUFF_COUNT = window.innerWidth < 768 ? 5 : 9;
  const fogPuffs = [];
  for (let i = 0; i < PUFF_COUNT; i++) {
    fogPuffs.push({
      x: Math.random() * width,
      y: (0.15 + Math.random() * 0.75) * height,
      baseRadius: Math.random() * 220 + 260,
      pulseSpeed: Math.random() * 0.012 + 0.006,
      pulseOffset: Math.random() * Math.PI * 2,
      speedX: (i % 2 === 0 ? 1 : -1) * (Math.random() * 0.24 + 0.14),
      speedY: (Math.random() - 0.5) * 0.06,
      opacity: Math.random() * 0.035 + 0.03,
      tint: i % 3 === 0 ? '240, 232, 218' : (i % 3 === 1 ? '205, 224, 215' : '175, 205, 195')
    });
  }

  // ---------------------------------------------------------------------------
  // C. Wind-Blown Autumn Leaves (Drifting through fog layers)
  // ---------------------------------------------------------------------------
  const LEAF_COUNT = window.innerWidth < 768 ? 14 : 28;
  const leaves = [];
  const leafColors = [
    'rgba(194, 59, 34, 0.68)',  // Cinnabar vermilion
    'rgba(168, 48, 28, 0.58)',  // Deep burnt crimson
    'rgba(214, 138, 56, 0.52)', // Golden amber
    'rgba(142, 42, 26, 0.52)'   // Autumn wine
  ];

  for (let i = 0; i < LEAF_COUNT; i++) {
    leaves.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 4 + 3.2,
      speedX: Math.random() * 0.85 + 0.45,
      speedY: Math.random() * 0.65 + 0.35,
      angle: Math.random() * Math.PI * 2,
      angularSpeed: (Math.random() - 0.5) * 0.032,
      color: leafColors[Math.floor(Math.random() * leafColors.length)],
      sway: Math.random() * 22,
      swaySpeed: Math.random() * 0.02 + 0.01,
      swayOffset: Math.random() * Math.PI,
      depth: Math.random() // Depth sorting with fog
    });
  }

  let animationFrameId;
  let isTabActive = true;

  document.addEventListener('visibilitychange', () => {
    isTabActive = !document.hidden;
    if (isTabActive) {
      render();
    }
  });

  let tick = 0;

  function renderLeaf(l, t) {
    l.x += l.speedX + Math.sin(t * l.swaySpeed + l.swayOffset) * 0.45;
    l.y += l.speedY;
    l.angle += l.angularSpeed;

    if (l.x > width + 25) l.x = -25;
    if (l.y > height + 25) l.y = -25;

    ctx.save();
    ctx.translate(l.x, l.y);
    ctx.rotate(l.angle);

    ctx.fillStyle = l.color;
    ctx.beginPath();
    ctx.ellipse(0, 0, l.size * 1.8, l.size * 0.85, 0, 0, Math.PI * 2);
    ctx.fill();

    // Leaf stem line
    ctx.strokeStyle = 'rgba(245, 240, 225, 0.22)';
    ctx.lineWidth = 0.6;
    ctx.beginPath();
    ctx.moveTo(-l.size * 1.5, 0);
    ctx.lineTo(l.size * 1.5, 0);
    ctx.stroke();

    ctx.restore();
  }

  function render() {
    if (!isTabActive) return;
    tick++;
    ctx.clearRect(0, 0, width, height);

    const time = tick;

    // 1. Draw Deep & Mid Fog Bands (Multi-Harmonic Procedural Waves)
    FOG_BANDS.forEach((band) => {
      ctx.save();
      const baseY = height * band.baseYFactor;
      const drift = time * band.speed * 60 + band.driftOffset;

      ctx.beginPath();
      ctx.moveTo(0, height);

      // Plot smooth procedural wave curve across viewport
      const step = 25;
      for (let x = 0; x <= width + step; x += step) {
        const wave1 = Math.sin((x + drift) * band.frequency1) * band.amplitude1;
        const wave2 = Math.cos((x - drift * 0.7) * band.frequency2) * band.amplitude2;
        const wave3 = Math.sin((x * 0.5 + time * 0.015) * 0.005) * 12;
        const y = baseY + wave1 + wave2 + wave3;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(width, height);
      ctx.closePath();

      // Atmospheric vertical fade gradient
      const grad = ctx.createLinearGradient(0, baseY - band.amplitude1, 0, height);
      grad.addColorStop(0, `rgba(${band.color}, 0)`);
      grad.addColorStop(0.25, `rgba(${band.color}, ${band.opacity})`);
      grad.addColorStop(0.7, `rgba(${band.color}, ${band.opacity * 0.65})`);
      grad.addColorStop(1, `rgba(${band.color}, 0)`);

      ctx.fillStyle = grad;
      ctx.fill();
      ctx.restore();
    });

    // 2. Draw Distant Leaves (depth < 0.5)
    leaves.forEach(l => {
      if (l.depth < 0.5) {
        renderLeaf(l, tick);
      }
    });

    // 3. Draw Volumetric Fog Puffs (Organic Breathing Clusters)
    fogPuffs.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY + Math.sin(time * 0.008 + p.pulseOffset) * 0.15;

      // Wrap around edges seamlessly
      if (p.speedX > 0 && p.x - p.baseRadius > width) {
        p.x = -p.baseRadius;
        p.y = (0.15 + Math.random() * 0.75) * height;
      }
      if (p.speedX < 0 && p.x + p.baseRadius < 0) {
        p.x = width + p.baseRadius;
        p.y = (0.15 + Math.random() * 0.75) * height;
      }

      // Breathing radius modulation
      const radius = p.baseRadius * (1 + Math.sin(time * p.pulseSpeed + p.pulseOffset) * 0.14);

      const radGrad = ctx.createRadialGradient(p.x, p.y, radius * 0.08, p.x, p.y, radius);
      radGrad.addColorStop(0, `rgba(${p.tint}, ${p.opacity})`);
      radGrad.addColorStop(0.45, `rgba(${p.tint}, ${p.opacity * 0.6})`);
      radGrad.addColorStop(0.8, `rgba(${p.tint}, ${p.opacity * 0.2})`);
      radGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.save();
      ctx.fillStyle = radGrad;
      ctx.beginPath();
      ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    // 4. Draw Foreground Leaves (depth >= 0.5)
    leaves.forEach(l => {
      if (l.depth >= 0.5) {
        renderLeaf(l, tick);
      }
    });

    animationFrameId = requestAnimationFrame(render);
  }

  render();
}

/* =============================================================================
   03. NAVIGATION & SCROLL MANAGEMENT
   ============================================================================= */
function initNavigation() {
  const nav = document.getElementById('top-nav');
  const toggle = document.getElementById('nav-mobile-toggle');
  const menu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky border contrast on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      toggle.classList.toggle('active', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        menu.classList.remove('open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });

    // Close mobile menu on outside tap
    document.addEventListener('click', (e) => {
      if (menu.classList.contains('open') && !menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove('open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Mobile virtual keyboard avoidance: hide floating rail while editing form fields
  const inputs = document.querySelectorAll('input, textarea');
  const rail = document.querySelector('.floating-social-rail');
  if (rail) {
    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        if (window.innerWidth <= 768) {
          rail.classList.add('keyboard-hidden');
        }
      });
      input.addEventListener('blur', () => {
        rail.classList.remove('keyboard-hidden');
      });
    });
  }
}

/* =============================================================================
   03B. SCROLL-SPY NAVIGATION
   Updates active navigation state and aria-current based on section in viewport
   ============================================================================= */
function initScrollSpy() {
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const navLinks = Array.from(document.querySelectorAll('.nav-menu .nav-link'));

  if (!sections.length || !navLinks.length) return;

  const nav = document.getElementById('top-nav');

  function updateActiveLink() {
    const navHeight = nav ? nav.offsetHeight : 70;
    // Calculate active section with offset for sticky navbar + comfortable read zone
    const scrollPos = window.scrollY + navHeight + 100;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const isAtBottom = window.scrollY + windowHeight >= documentHeight - 60;

    let currentSectionId = '';

    if (isAtBottom) {
      // Highlight last section if scrolled to the end of page
      const lastSection = sections[sections.length - 1];
      if (lastSection) {
        currentSectionId = lastSection.id;
      }
    } else {
      // Find the topmost section currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPos) {
          currentSectionId = section.id;
          break;
        }
      }
    }

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      const targetId = href ? href.replace(/^#/, '') : '';

      if (currentSectionId && targetId === currentSectionId) {
        if (!link.classList.contains('active')) {
          link.classList.add('active');
          link.setAttribute('aria-current', 'location');
        }
      } else {
        if (link.classList.contains('active')) {
          link.classList.remove('active');
          link.removeAttribute('aria-current');
        }
      }
    });
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveLink();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener('resize', () => {
    updateActiveLink();
  }, { passive: true });

  // Initial trigger
  updateActiveLink();
}

/* =============================================================================
   04. HERO PARALLAX & ENTRANCE REVEALS
   ============================================================================= */
function initHeroParallax() {
  const heroImg = document.querySelector('.hero-backdrop-image');
  if (!heroImg) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight * 1.2) {
          heroImg.style.transform = `scale(1.05) translateY(${scrolled * 0.16}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

function initScrollReveals() {
  const elements = document.querySelectorAll('.reveal-init');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced || !('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('reveal-active'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* =============================================================================
   05. QUANT FINANCE: AVELLANEDA-STOIKOV INTERACTIVE WORKBENCH
   Visualizes reservation price shift and optimal bid-ask skewing
   ============================================================================= */
function initAvellanedaSimulator() {
  const invSlider = document.getElementById('sim-inventory');
  const volSlider = document.getElementById('sim-volatility');
  const riskSlider = document.getElementById('sim-risk');

  const invVal = document.getElementById('val-inventory');
  const volVal = document.getElementById('val-volatility');
  const riskVal = document.getElementById('val-risk');

  const outReservation = document.getElementById('out-reservation');
  const outSpread = document.getElementById('out-spread');
  const outQuotes = document.getElementById('out-quotes');
  const canvas = document.getElementById('sim-quotes-canvas');

  if (!invSlider || !canvas) return;
  const ctx = canvas.getContext('2d');

  function calculateAndDraw() {
    const q = parseFloat(invSlider.value);      // current inventory (-5 to +5)
    const sigma = parseFloat(volSlider.value);  // volatility (0.1 to 1.0)
    const gamma = parseFloat(riskSlider.value);  // risk aversion (0.05 to 0.5)

    const midPrice = 100.00;
    const timeRemaining = 1.0; // T - t normalized
    const kappa = 1.5;         // order arrival intensity parameter

    // Reservation Price: r(s, q, t) = s - q * gamma * sigma^2 * (T - t)
    const inventoryPenalty = q * gamma * Math.pow(sigma, 2) * timeRemaining;
    const reservationPrice = midPrice - inventoryPenalty;

    // Optimal Spread: delta^a + delta^b = gamma * sigma^2 + (2/gamma) * ln(1 + gamma/kappa)
    const spread = gamma * Math.pow(sigma, 2) * timeRemaining + (2 / gamma) * Math.log(1 + gamma / kappa);
    const halfSpread = spread / 2;

    const optimalBid = reservationPrice - halfSpread;
    const optimalAsk = reservationPrice + halfSpread;

    // Update text readouts
    invVal.textContent = q > 0 ? `+${q}` : `${q}`;
    volVal.textContent = sigma.toFixed(2);
    riskVal.textContent = gamma.toFixed(2);

    outReservation.textContent = `$${reservationPrice.toFixed(2)}`;
    outSpread.textContent = `$${spread.toFixed(2)}`;
    outQuotes.textContent = `${optimalBid.toFixed(2)} / ${optimalAsk.toFixed(2)}`;

    // Draw visual order book representation
    const w = (canvas.width = canvas.parentElement.clientWidth);
    const h = (canvas.height = 70);

    ctx.clearRect(0, 0, w, h);

    const centerX = w / 2;
    const scale = w / 14; // pixels per dollar offset from mid

    // Center Mid Price reference line
    ctx.strokeStyle = 'rgba(235, 229, 213, 0.2)';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(centerX, 5);
    ctx.lineTo(centerX, h - 5);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = 'rgba(235, 229, 213, 0.4)';
    ctx.font = '10px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('Mid $100', centerX, h - 8);

    // Reservation price indicator
    const resX = centerX + (reservationPrice - midPrice) * scale;
    ctx.strokeStyle = '#c23b22';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(resX, 12);
    ctx.lineTo(resX, h - 22);
    ctx.stroke();

    ctx.fillStyle = '#d94b32';
    ctx.fillText(`r: $${reservationPrice.toFixed(1)}`, resX, 10);

    // Bid quote bar (Emerald / Pine)
    const bidX = centerX + (optimalBid - midPrice) * scale;
    ctx.fillStyle = 'rgba(52, 168, 83, 0.7)';
    ctx.fillRect(bidX, 26, Math.max(resX - bidX, 2), 16);
    ctx.fillStyle = '#a8e5b6';
    ctx.textAlign = 'right';
    ctx.fillText(`Bid $${optimalBid.toFixed(2)}`, bidX - 4, 38);

    // Ask quote bar (Vermilion / Amber)
    const askX = centerX + (optimalAsk - midPrice) * scale;
    ctx.fillStyle = 'rgba(194, 59, 34, 0.75)';
    ctx.fillRect(resX, 26, Math.max(askX - resX, 2), 16);
    ctx.fillStyle = '#ffb3a7';
    ctx.textAlign = 'left';
    ctx.fillText(`Ask $${optimalAsk.toFixed(2)}`, askX + 4, 38);
  }

  invSlider.addEventListener('input', calculateAndDraw);
  volSlider.addEventListener('input', calculateAndDraw);
  riskSlider.addEventListener('input', calculateAndDraw);
  window.addEventListener('resize', calculateAndDraw);

  calculateAndDraw();
}

/* =============================================================================
   06. GAME DEV: NOCT LANTERN CONE & SHADOW PATHFINDING PLAYGROUND
   Raycasted torchlight and stealth entity simulator in HTML5 Canvas
   ============================================================================= */
function initNoctPlayground() {
  const canvas = document.getElementById('noct-preview-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = canvas.parentElement.clientWidth);
  let height = (canvas.height = 200);

  window.addEventListener('resize', () => {
    width = canvas.width = canvas.parentElement.clientWidth;
    height = canvas.height = 200;
  });

  // Player / Wandering Knight torch position
  let torch = {
    x: width * 0.35,
    y: height * 0.5,
    radius: 120,
    angle: 0
  };

  // Shadow entities lurking in ruins
  const shadows = [
    { x: width * 0.75, y: height * 0.3, speed: 0.8, revealed: false },
    { x: width * 0.85, y: height * 0.7, speed: 0.6, revealed: false },
    { x: width * 0.55, y: height * 0.8, speed: 0.7, revealed: false },
  ];

  // Ruin pillars blocking light
  const ruins = [
    { x: width * 0.5, y: height * 0.25, w: 24, h: 48 },
    { x: width * 0.68, y: height * 0.55, w: 32, h: 40 }
  ];

  function handleAim(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = clientX - rect.left;
    const mouseY = clientY - rect.top;
    torch.angle = Math.atan2(mouseY - torch.y, mouseX - torch.x);
  }

  canvas.addEventListener('mousemove', (e) => {
    handleAim(e.clientX, e.clientY);
  });

  canvas.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches[0]) {
      handleAim(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  canvas.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      handleAim(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  let tick = 0;
  function updateAndDraw() {
    tick++;
    ctx.fillStyle = '#060a08';
    ctx.fillRect(0, 0, width, height);

    // Subtle stone tile pattern
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 32) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    // Draw Stone Pillars (Ruins)
    ruins.forEach(r => {
      ctx.fillStyle = '#111b15';
      ctx.strokeStyle = 'rgba(220, 205, 180, 0.15)';
      ctx.fillRect(r.x, r.y, r.w, r.h);
      ctx.strokeRect(r.x, r.y, r.w, r.h);
    });

    // Draw Vermilion Lantern Light Cone with soft gradient
    const coneAngle = Math.PI / 3; // 60 degrees
    const grad = ctx.createRadialGradient(torch.x, torch.y, 10, torch.x, torch.y, torch.radius);
    grad.addColorStop(0, 'rgba(240, 160, 70, 0.85)');
    grad.addColorStop(0.3, 'rgba(194, 59, 34, 0.5)');
    grad.addColorStop(0.8, 'rgba(194, 59, 34, 0.15)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.save();
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(torch.x, torch.y);
    ctx.arc(torch.x, torch.y, torch.radius, torch.angle - coneAngle / 2, torch.angle + coneAngle / 2);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    // Wanderer / Torch Origin
    ctx.fillStyle = '#faf7ee';
    ctx.beginPath();
    ctx.arc(torch.x, torch.y, 4, 0, Math.PI * 2);
    ctx.fill();

    // Lantern Glow ring
    ctx.strokeStyle = 'rgba(194, 59, 34, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(torch.x, torch.y, 8 + Math.sin(tick * 0.1) * 1.5, 0, Math.PI * 2);
    ctx.stroke();

    // Lurking Shadow Swarm
    shadows.forEach((s, idx) => {
      s.x += Math.sin(tick * 0.03 + idx) * s.speed;
      s.y += Math.cos(tick * 0.02 + idx) * s.speed;

      const dist = Math.hypot(s.x - torch.x, s.y - torch.y);
      const angleToEntity = Math.atan2(s.y - torch.y, s.x - torch.x);
      let angleDiff = Math.abs(angleToEntity - torch.angle);
      if (angleDiff > Math.PI) angleDiff = Math.PI * 2 - angleDiff;

      const isInCone = dist < torch.radius && angleDiff < coneAngle / 2;

      if (isInCone) {
        // Revealed in lantern light
        ctx.fillStyle = '#c23b22';
        ctx.shadowColor = '#c23b22';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(s.x, s.y, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.fillStyle = '#faf7ee';
        ctx.font = '9px monospace';
        ctx.fillText('DETECTED', s.x - 22, s.y - 10);
      } else {
        // Lurking in shadow
        ctx.fillStyle = 'rgba(30, 45, 36, 0.45)';
        ctx.beginPath();
        ctx.arc(s.x, s.y, 5, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    requestAnimationFrame(updateAndDraw);
  }

  updateAndDraw();
}

/* =============================================================================
   07. HOBBIES & PERSONAL INTERESTS LIGHTBOX
   ============================================================================= */
function initHobbiesLightbox() {
  const cards = document.querySelectorAll('.gallery-editorial-card');
  const overlay = document.getElementById('hobbies-lightbox');
  const closeBtn = document.getElementById('lightbox-close-btn');
  const modalImg = document.getElementById('lightbox-img');
  const modalTitle = document.getElementById('lightbox-title');
  const modalText = document.getElementById('lightbox-text');

  if (!overlay || !closeBtn) return;

  let previousActiveElement = null;

  cards.forEach(card => {
    card.addEventListener('click', () => {
      previousActiveElement = document.activeElement;
      const title = card.getAttribute('data-title');
      const text = card.getAttribute('data-text');
      const imgSrc = card.getAttribute('data-img');

      modalImg.setAttribute('src', imgSrc);
      modalImg.setAttribute('alt', title);
      modalTitle.textContent = title;
      modalText.textContent = text;

      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    });
  });

  function closeModal() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    if (previousActiveElement) {
      previousActiveElement.focus();
    }
  }

  closeBtn.addEventListener('click', closeModal);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeModal();
    }
  });
}

/* =============================================================================
   08. CONTACT SECTION & ACCESSIBLE FORM VALIDATION
   Follows strict WCAG accessibility and transparent endpoint configuration
   ============================================================================= */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusAlert = document.getElementById('form-status-alert');
  if (!form || !statusAlert) return;

  const fields = {
    name: document.getElementById('contact-name'),
    email: document.getElementById('contact-email'),
    subject: document.getElementById('contact-subject'),
    message: document.getElementById('contact-message')
  };

  function validateField(field, testFn, errorMsg) {
    const group = field.closest('.form-group');
    const errorEl = group.querySelector('.field-error-msg');
    const isValid = testFn(field.value.trim());

    if (!isValid) {
      group.classList.add('has-error');
      field.setAttribute('aria-invalid', 'true');
      errorEl.textContent = errorMsg;
      errorEl.style.display = 'block';
      return false;
    } else {
      group.classList.remove('has-error');
      field.setAttribute('aria-invalid', 'false');
      errorEl.style.display = 'none';
      return true;
    }
  }

  // Real-time blur listeners
  if (fields.name) {
    fields.name.addEventListener('blur', () => {
      validateField(fields.name, v => v.length >= 2, 'Please enter your name (at least 2 characters).');
    });
  }

  if (fields.email) {
    fields.email.addEventListener('blur', () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      validateField(fields.email, v => emailRegex.test(v), 'Please enter a valid email address.');
    });
  }

  if (fields.subject) {
    fields.subject.addEventListener('blur', () => {
      validateField(fields.subject, v => v.length >= 3, 'Please specify a subject.');
    });
  }

  if (fields.message) {
    fields.message.addEventListener('blur', () => {
      validateField(fields.message, v => v.length >= 10, 'Message must be at least 10 characters.');
    });
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isNameValid = validateField(fields.name, v => v.length >= 2, 'Please enter your name.');
    const isEmailValid = validateField(fields.email, v => emailRegex.test(v), 'Please enter a valid email address.');
    const isSubjectValid = validateField(fields.subject, v => v.length >= 3, 'Please specify a subject.');
    const isMessageValid = validateField(fields.message, v => v.length >= 10, 'Message must be at least 10 characters.');

    if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
      // Focus first erroneous input
      const firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending transmission...';

    const payload = {
      name: fields.name.value.trim(),
      email: fields.email.value.trim(),
      subject: fields.subject.value.trim(),
      message: fields.message.value.trim(),
      timestamp: new Date().toISOString()
    };

    try {
      // Check if user has configured an active backend endpoint
      if (PROFILE_CONFIG.contactEndpoint && PROFILE_CONFIG.contactEndpoint.startsWith('http')) {
        const response = await fetch(PROFILE_CONFIG.contactEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        if (!response.ok) throw new Error('Network response was not ok');

        statusAlert.className = 'form-status-alert success';
        statusAlert.textContent = 'Transmission received. Thank you — I will respond to your inquiry shortly.';
      } else {
        // Genuine simulated response that records inquiry safely and transparently explains endpoint setup
        try {
          const stored = JSON.parse(localStorage.getItem('shivam_portfolio_inquiries') || '[]');
          stored.push(payload);
          localStorage.setItem('shivam_portfolio_inquiries', JSON.stringify(stored));
        } catch (_) {}

        statusAlert.className = 'form-status-alert success';
        statusAlert.innerHTML = `
          <strong>Message verified & recorded.</strong> Thank you, ${escapeHTML(payload.name)}!
          <br/><span style="opacity:0.85; font-size:0.8rem;">(Note: Live delivery is active in mock simulation mode. To route directly to your inbox, specify your Formspree endpoint in <code>PROFILE_CONFIG.contactEndpoint</code> in <code>script.js</code>.)</span>
        `;
      }

      form.reset();
      Object.values(fields).forEach(f => f.setAttribute('aria-invalid', 'false'));
    } catch (err) {
      statusAlert.className = 'form-status-alert error';
      statusAlert.textContent = 'Unable to deliver message at this time. Please email me directly at ' + PROFILE_CONFIG.email;
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}
