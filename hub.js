/**
 * Homepage helpers — curriculum UX
 */

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
