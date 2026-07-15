const countEl = document.getElementById("count");
const greetEl = document.getElementById("greet");
const nameInput = document.getElementById("name-input");
const clickBtn = document.getElementById("btn-click");
const resetBtn = document.getElementById("btn-reset");

let clicks = 0;

clickBtn.addEventListener("click", () => {
  clicks += 1;
  countEl.textContent = `Clicks: ${clicks}`;
});

resetBtn.addEventListener("click", () => {
  clicks = 0;
  countEl.textContent = "Clicks: 0";
  nameInput.value = "";
  greetEl.textContent = "Hello!";
});

nameInput.addEventListener("input", (event) => {
  const name = event.target.value.trim();
  greetEl.textContent = name ? `Hello, ${name}!` : "Hello!";
});
