/**
 * Homepage helpers — site nav, theme, curriculum UX
 */

function initSiteNav() {
  const header = document.querySelector("[data-site-header], .site-header");
  if (!header) return;

  const menuBtn = header.querySelector(".nav-menu-btn");
  const menu = header.querySelector("[data-site-menu]");
  const backdrop = header.querySelector("[data-nav-backdrop]");
  const closeBtn = header.querySelector("[data-nav-close]");
  if (!menuBtn || !menu) return;

  const mqDesktop = window.matchMedia("(min-width: 900px)");
  let lastFocus = null;

  function syncScrolled() {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  syncScrolled();
  window.addEventListener("scroll", syncScrolled, { passive: true });

  function isDesktop() {
    return mqDesktop.matches;
  }

  function setMenuInert(inert) {
    if ("inert" in menu) menu.inert = inert;
    else menu.setAttribute("aria-hidden", String(inert));
  }

  function setOpen(open) {
    if (isDesktop()) {
      document.body.classList.remove("nav-open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.setAttribute("aria-label", "Open menu");
      setMenuInert(false);
      return;
    }

    document.body.classList.toggle("nav-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    setMenuInert(!open);

    if (open) {
      lastFocus = document.activeElement;
      const focusTarget =
        closeBtn || menu.querySelector("a, button") || menuBtn;
      focusTarget.focus({ preventScroll: true });
    } else if (lastFocus && typeof lastFocus.focus === "function") {
      lastFocus.focus({ preventScroll: true });
    }
  }

  function syncLayout() {
    if (isDesktop()) {
      document.body.classList.remove("nav-open");
      menuBtn.setAttribute("aria-expanded", "false");
      setMenuInert(false);
    } else if (!document.body.classList.contains("nav-open")) {
      setMenuInert(true);
    }
  }

  menuBtn.addEventListener("click", () => {
    const open = !document.body.classList.contains("nav-open");
    setOpen(open);
  });

  if (closeBtn) closeBtn.addEventListener("click", () => setOpen(false));
  if (backdrop) backdrop.addEventListener("click", () => setOpen(false));

  menu.querySelectorAll("[data-nav-link], .site-menu-cta").forEach((link) => {
    link.addEventListener("click", () => {
      if (!isDesktop()) setOpen(false);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      document.body.classList.contains("nav-open") &&
      !isDesktop()
    ) {
      setOpen(false);
    }
  });

  if (mqDesktop.addEventListener) {
    mqDesktop.addEventListener("change", syncLayout);
  } else if (mqDesktop.addListener) {
    mqDesktop.addListener(syncLayout);
  }

  syncLayout();
}

// Theme toggle into navbar slot (shared Theme from lesson-ui/theme.js)
if (window.Theme) {
  const slot =
    document.querySelector("[data-theme-slot]") ||
    document.querySelector(".site-nav-theme");
  if (slot) {
    Theme.mountToggle(slot);
  } else {
    let bar = document.querySelector(".theme-bar");
    if (!bar) {
      bar = document.createElement("div");
      bar.className = "theme-bar";
      document.body.prepend(bar);
    }
    Theme.mountToggle(bar);
  }
}

initSiteNav();

// Stagger rise animation for concept list items
document.querySelectorAll(".concept-list li").forEach((item, i) => {
  item.style.animationDelay = `${0.04 * i}s`;
});

// Remember which curriculum sections the visitor opened
const STORAGE_KEY = "js-curriculum-open";

function loadOpenSections() {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveOpenSections(ids) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch {
    /* ignore */
  }
}

const details = [...document.querySelectorAll("#curriculum .path-item")];
const saved = loadOpenSections();

details.forEach((el, i) => {
  const id = String(i);
  if (saved.includes(id)) el.open = true;

  el.addEventListener("toggle", () => {
    const openIds = details
      .map((d, idx) => (d.open ? String(idx) : null))
      .filter(Boolean);
    saveOpenSections(openIds);
  });
});

// Soft highlight when landing on #curriculum via CTA
if (location.hash === "#curriculum" || location.hash === "#what-is-js") {
  const target = document.querySelector(location.hash);
  if (target) {
    target.classList.add("section-pulse");
    setTimeout(() => target.classList.remove("section-pulse"), 1200);
  }
}
