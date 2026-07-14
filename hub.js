const fruits = ["apple", "banana"];

function setOutput(id, text) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = text;
  el.classList.remove("is-flash");
  // restart animation
  void el.offsetWidth;
  el.classList.add("is-flash");
}

const runners = {
  variables() {
    const name = document.getElementById("demo-name").value.trim() || "Friend";
    setOutput(
      "out-variables",
      `const name = "${name}";\nconsole.log("Hello, " + name);\n\n→ Hello, ${name}!`
    );
  },

  conditions() {
    const age = Number(document.getElementById("demo-age").value);
    const allowed = age >= 18;
    const message = allowed
      ? "You can vote 👍"
      : "Too young to vote — keep learning!";
    setOutput(
      "out-conditions",
      `if (age >= 18) { ... }\n\nage = ${age}\n→ ${message}`
    );
  },

  arrays() {
    const fruit = document.getElementById("demo-fruit").value.trim();
    if (fruit) fruits.push(fruit);
    document.getElementById("demo-fruit").value = "";
    setOutput(
      "out-arrays",
      `fruits = [${fruits.map((f) => `"${f}"`).join(", ")}]\nlength = ${fruits.length}\nfirst item = "${fruits[0]}"`
    );
  },

  functions() {
    const a = Number(document.getElementById("demo-a").value);
    const b = Number(document.getElementById("demo-b").value);
    const sum = a + b;
    setOutput(
      "out-functions",
      `function add(a, b) {\n  return a + b;\n}\n\nadd(${a}, ${b})\n→ ${sum}`
    );
  },

  dom() {
    const target = document.getElementById("dom-target");
    target.textContent = "Changed by JavaScript!";
    target.classList.add("changed");
    setOutput(
      "out-dom",
      `document.getElementById("dom-target").textContent = "Changed by JavaScript!";\n\n→ The text on the page updated.`
    );
  },
};

document.querySelectorAll("[data-run]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.getAttribute("data-run");
    if (runners[key]) runners[key]();
  });
});

// Show a friendly first result so the page feels alive
runners.variables();
