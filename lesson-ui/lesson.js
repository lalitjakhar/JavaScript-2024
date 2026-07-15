/**
 * Shared helpers for visual lessons
 * Lesson.log → shows in .output panel + console
 * Lesson.showArray → draws indexed boxes
 * Lesson.showObject → key/value boxes
 * Lesson.bindRun → wire a Run button to a fn
 */
window.Lesson = {
  bindRun(btnId, fn) {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.addEventListener("click", fn);
  },

  log(outputId, ...values) {
    const el = document.getElementById(outputId);
    const text = values
      .map((v) => {
        if (typeof v === "string") return v;
        try {
          return JSON.stringify(v, null, 2);
        } catch {
          return String(v);
        }
      })
      .join(" ");

    console.log(...values);

    if (!el) return;
    el.textContent = text;
    el.classList.remove("flash");
    void el.offsetWidth;
    el.classList.add("flash");
  },

  showArray(containerId, arr, label = "index") {
    const box = document.getElementById(containerId);
    if (!box) return;
    box.innerHTML = "";

    if (!arr.length) {
      box.innerHTML = `<div class="array-slot"><span class="array-value">(empty)</span></div>`;
      return;
    }

    arr.forEach((value, index) => {
      const slot = document.createElement("div");
      slot.className = "array-slot pop";
      slot.innerHTML = `
        <span class="array-index">${label} ${index}</span>
        <span class="array-value">${String(value)}</span>
      `;
      box.appendChild(slot);
    });
  },

  showObject(containerId, obj) {
    const box = document.getElementById(containerId);
    if (!box) return;
    box.innerHTML = "";
    Object.entries(obj).forEach(([key, value]) => {
      const slot = document.createElement("div");
      slot.className = "array-slot pop";
      const display = Array.isArray(value) ? value.join(", ") : String(value);
      slot.innerHTML = `
        <span class="array-index">${key}</span>
        <span class="array-value">${display}</span>
      `;
      box.appendChild(slot);
    });
  },
};
