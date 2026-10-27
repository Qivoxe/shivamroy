# Shivam Roy — Personal Portfolio

A cinematic, atmospheric portfolio redesign inspired by the visual poetry of **Where Winds Meet** (misty mountain ridges, ancient architecture, drifting leaves, restrained vermilion highlights, deep pine slate, and warm ivory typography).

Built with **pure HTML5, CSS3, and vanilla JavaScript** — zero frameworks, zero CSS libraries, zero animation dependencies, and zero required build steps.

---

## 🧭 Information Architecture

1. **Introduction / Hero**: Full-screen cinematic hero with layered mountain landscapes, subtle parallax, drifting mist and leaves in Canvas 2D, and headline reveals.
2. **Quantitative Finance Projects**:
   - **Market-Making Simulator (Avellaneda–Stoikov)**: Interactive micro-workbench demonstrating reservation price shift and optimal bid-ask spread skews.
   - **E-commerce Causal Inference & Experimentation Platform**: Econometric framework (Difference-in-Differences, Synthetic Controls, CUPED variance reduction).
   - **LOB Terminal**: Sub-microsecond C++20 limit order book matching engine.
3. **Game Development Projects**:
   - **NOCT**: C++ & raylib arcade-survival game featuring dynamic lantern light-cone raycasting, spatial hashing entity pooling, and an interactive browser simulation.
   - **Verlet Kinematic Particle Sandbox**: Position-based dynamics and fluid physics toy.
   - **Procedural BSP Ruin Generator**: Generative dungeon layout engine with Delaunay corridors.
4. **Hobbies & Personal Interests**:
   - Editorial image-led gallery with accessible lightbox dialog exploring Astronomy (NASA TESS exoplanet analysis) and Highland Mountain Trekking.
5. **Contact Section**:
   - WCAG-compliant contact form with real-time validation, ARIA alert status banners, and direct links.

---

## ⚙️ Profile & Social Links Configuration

All social links and URLs are centralized in **one clearly documented location** at the top of `src/script.js`:

```javascript
export const PROFILE_CONFIG = {
  name: "Shivam Roy",
  tagline: "Building worlds. Modeling markets.",
  role: "Mathematics student exploring quantitative finance, game development, and software engineering",
  
  // Real Social Profile URLs
  instagram: "https://instagram.com/404not_shivam",
  steam: "https://steamcommunity.com/id/404not_shivam", // Replace with your vanity ID or Steam profile URL
  github: "https://github.com/Qivoxe",
  
  // Contact & Form Configuration
  email: "shivamray414@gmail.com",
  contactEndpoint: "", // e.g., "https://formspree.io/f/your_form_id"
};
```

### 🎮 Persistent Floating Social Rail
- Fixed at the extreme right edge of the desktop screen with custom gamepad/Steam and Instagram icons.
- Features thin borders, dark glassmorphism surfaces (`backdrop-filter: blur`), restrained vermilion hover glow, and accessible tooltips.
- On mobile devices ($\le 768\text{px}$), automatically transitions to a neat, non-intrusive floating pill docked at the bottom right that never obstructs form fields or exceeds 15% of the viewport.

---

## 📬 Connecting Live Email Submissions

By default, the contact form validates input and stores mock submissions safely in browser `localStorage`. To forward real emails directly to your personal inbox:
1. Create a free form endpoint on [Formspree](https://formspree.io) or [Formkeep](https://formkeep.com).
2. Paste the endpoint URL into `PROFILE_CONFIG.contactEndpoint` in `src/script.js`:
   ```javascript
   contactEndpoint: "https://formspree.io/f/my_endpoint_id"
   ```
3. That's it! Form transmissions will post directly to your inbox with full status reporting.
