/**
 * Shared light / dark theme for hub + lessons
 * Preference: explicit localStorage → follow system
 */
(function () {
  const STORAGE_KEY = "js-learn-theme";
  const ROOT = document.documentElement;

  function systemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function storedTheme() {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      return value === "light" || value === "dark" ? value : null;
    } catch {
      return null;
    }
  }

  function resolve() {
    return storedTheme() || systemTheme();
  }

  function syncToggles(theme) {
    const isDark = theme === "dark";
    document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(isDark));
      btn.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
      );
      btn.title = isDark ? "Switch to light mode" : "Switch to dark mode";
    });
  }

  function apply(theme, { persist = false } = {}) {
    const next = theme === "dark" ? "dark" : "light";

    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
    }

    const locked = persist || Boolean(storedTheme());
    if (locked) {
      ROOT.setAttribute("data-theme", next);
      ROOT.style.colorScheme = next;
    } else {
      ROOT.removeAttribute("data-theme");
      ROOT.style.colorScheme = "";
    }

    syncToggles(next);
    return next;
  }

  function toggle() {
    const next = resolve() === "dark" ? "light" : "dark";
    return apply(next, { persist: true });
  }

  function createToggle() {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "theme-toggle";
    btn.setAttribute("data-theme-toggle", "");
    btn.innerHTML = `
      <span class="theme-toggle-track" aria-hidden="true">
        <span class="theme-toggle-thumb">
          <svg class="theme-icon theme-icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
          </svg>
          <svg class="theme-icon theme-icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3a7 7 0 1 0 11.5 11.5z"/>
          </svg>
        </span>
      </span>
    `;
    btn.addEventListener("click", () => toggle());
    return btn;
  }

  function mountToggle(target) {
    if (!target || target.querySelector("[data-theme-toggle]")) return null;
    const btn = createToggle();
    target.appendChild(btn);
    apply(resolve());
    return btn;
  }

  // Restore saved theme (or stay on system) as soon as the script runs
  apply(resolve());

  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const onSystemChange = () => {
    if (!storedTheme()) apply(systemTheme());
  };
  if (mq.addEventListener) mq.addEventListener("change", onSystemChange);
  else if (mq.addListener) mq.addListener(onSystemChange);

  window.Theme = {
    STORAGE_KEY,
    resolve,
    apply,
    toggle,
    mountToggle,
    createToggle,
  };
})();
