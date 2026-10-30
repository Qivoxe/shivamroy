/*
  ROYSHIV.ME — main JavaScript
  Vanilla ES6+ only. No frameworks, animation libraries, or build step.
*/

(() => {
  "use strict";

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  /* ---------- Navigation ---------- */
  const header = $("[data-header]");
  const navToggle = $(".nav-toggle");
  const navPanel = $(".nav-panel");

  const setHeaderState = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  const closeMobileNav = () => {
    if (!navToggle || !navPanel) return;
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
    navPanel.classList.remove("is-open");
  };

  if (navToggle && navPanel) {
    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
      navPanel.classList.toggle("is-open", !isOpen);
    });

    navPanel.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMobileNav();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMobileNav();
    });
  }

  window.addEventListener("scroll", setHeaderState, { passive: true });
  setHeaderState();

  /* ---------- Dynamic footer year ---------- */
  const currentYear = $("#current-year");
  if (currentYear) currentYear.textContent = new Date().getFullYear();

  /* ---------- Contact configuration ---------- */
  const isPlaceholder = (value) => !value || value.includes("YOUR_") || value.includes("HERE");

  const contactMap = {
    email: {
      value: SITE_CONFIG.email,
      href: () => `mailto:${SITE_CONFIG.email}`,
      label: SITE_CONFIG.email
    },
    whatsapp: {
      value: SITE_CONFIG.whatsapp,
      href: () => SITE_CONFIG.whatsapp,
      label: "WhatsApp"
    },
    linkedin: {
      value: SITE_CONFIG.linkedin,
      href: () => SITE_CONFIG.linkedin,
      label: "LinkedIn"
    }
  };

  $$("[data-contact]").forEach((link) => {
    const type = link.dataset.contact;
    const config = contactMap[type];
    if (!config) return;

    if (isPlaceholder(config.value)) {
      link.setAttribute("href", "#contact");
      link.setAttribute("aria-disabled", "true");
      link.setAttribute("title", "Configure this link in js/config.js");
      if (!link.closest(".site-footer")) {
        link.textContent = link.textContent.trim() || config.label;
      }
    } else {
      link.setAttribute("href", config.href());
      if (type === "email") link.textContent = config.label;
    }
  });

  /* ---------- Project grid ---------- */
  const projectGrid = $("#project-grid");

  const projectCard = (project) => `
    <article class="project-card" data-project-id="${project.id}" tabindex="0" role="button" aria-label="View ${project.name} project details">
      <figure>
        <img src="${project.image}" alt="${project.imageAlt}" loading="lazy">
      </figure>
      <div class="project-body">
        <div class="project-meta">
          <span>${project.category}</span>
          <span class="status">${project.status}</span>
        </div>
        <h3>${project.name}</h3>
        <p>${project.short}</p>
        <span class="project-link">View Project</span>
      </div>
    </article>
  `;

  if (projectGrid && Array.isArray(PROJECTS)) {
    projectGrid.innerHTML = PROJECTS.map(projectCard).join("");
  }

  /* ---------- Project detail view ---------- */
  const modal = $("#project-modal");
  const modalContent = $("#modal-content");
  const closeButton = $(".modal-close");
  let lastFocusedElement = null;

  const listItems = (items) => `
    <ul class="case-list">
      ${items.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;

  const galleryMarkup = (project) => `
    <div class="case-visuals">
      ${project.gallery.map(([src, alt]) => `<img src="${src}" alt="${alt}" loading="lazy">`).join("")}
    </div>
  `;

  const flowMarkup = (project) => project.flow ? `
    <h3 class="case-label">Workflow demonstration</h3>
    <div class="case-flow">
      ${project.flow.map((step) => `<span>${step}</span>`).join("")}
    </div>
  ` : "";

  const caseStudyMarkup = (project) => `
    <div class="case-study">
      <div class="case-kicker">
        <span>${project.category}</span>
        <span>·</span>
        <span>${project.status}</span>
      </div>
      <h2 id="modal-title">${project.name}</h2>
      <p class="case-intro">${project.overview}</p>

      <figure class="case-image">
        <img src="${project.image}" alt="${project.imageAlt}">
        <figcaption>${project.statusNote}</figcaption>
      </figure>

      <div class="case-columns">
        <div>
          <h3 class="case-label">Objective</h3>
          <p>${project.objective}</p>
        </div>
        <div>
          <h3 class="case-label">Approach</h3>
          <p>${project.approach}</p>
          <h3 class="case-label" style="margin-top:28px">Features</h3>
          ${listItems(project.features)}
        </div>
      </div>

      <div class="case-columns">
        <div>
          <h3 class="case-label">Production process</h3>
          <p>${project.process}</p>
        </div>
        <div>
          ${flowMarkup(project)}
          ${galleryMarkup(project)}
        </div>
      </div>

      <span class="case-status">${project.status}</span>
    </div>
  `;

  const openProject = (id) => {
    const project = PROJECTS.find((item) => item.id === id);
    if (!project || !modal || !modalContent) return;

    lastFocusedElement = document.activeElement;
    modalContent.innerHTML = caseStudyMarkup(project);
    modal.hidden = false;
    document.body.classList.add("modal-open");
    closeButton?.focus();
  };

  const closeProject = () => {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    modalContent.innerHTML = "";
    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  };

  projectGrid?.addEventListener("click", (event) => {
    const card = event.target.closest("[data-project-id]");
    if (card) openProject(card.dataset.projectId);
  });

  projectGrid?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const card = event.target.closest("[data-project-id]");
    if (!card) return;
    event.preventDefault();
    openProject(card.dataset.projectId);
  });

  modal?.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-modal]")) closeProject();
  });

  document.addEventListener("keydown", (event) => {
    if (!modal || modal.hidden) return;

    if (event.key === "Escape") {
      closeProject();
      return;
    }

    if (event.key !== "Tab") return;

    const focusable = $$(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      modal
    ).filter((element) => element.offsetParent !== null);

    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  /* ---------- Honest inquiry form handling ---------- */
  const form = $("#inquiry-form");
  const formStatus = $("#form-status");

  const setStatus = (message, type) => {
    if (!formStatus) return;
    formStatus.textContent = message;
    formStatus.className = `form-status is-${type}`;
  };

  const validateForm = () => {
    if (!form) return false;
    let firstInvalid = null;

    $$("input, select, textarea", form).forEach((field) => {
      const valid = field.checkValidity();
      field.classList.toggle("is-invalid", !valid);
      field.setAttribute("aria-invalid", String(!valid));
      if (!valid && !firstInvalid) firstInvalid = field;
    });

    if (firstInvalid) {
      firstInvalid.focus();
      return false;
    }
    return true;
  };

  form?.addEventListener("input", (event) => {
    if (event.target.matches("input, select, textarea")) {
      event.target.classList.remove("is-invalid");
      event.target.removeAttribute("aria-invalid");
    }
  });

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    setStatus("", "success");

    if (!validateForm()) {
      setStatus("Please complete the required fields with valid information.", "error");
      return;
    }

    const hasEndpoint = Boolean(SITE_CONFIG.formEndpoint && !isPlaceholder(SITE_CONFIG.formEndpoint));

    if (!hasEndpoint) {
      setStatus("Your details are valid, but this form is not configured to send messages yet. Please configure a form endpoint in js/config.js.", "error");
      return;
    }

    try {
      const response = await fetch(SITE_CONFIG.formEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });

      if (!response.ok) throw new Error("Form submission failed");

      form.reset();
      setStatus("Thank you — your inquiry has been sent.", "success");
    } catch (error) {
      console.error(error);
      setStatus("The inquiry could not be sent right now. Please try again later.", "error");
    }
  });
})();
