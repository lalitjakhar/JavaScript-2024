// fetch — get data from the internet (returns a Promise)

const statusEl = document.getElementById("status");
const reloadBtn = document.getElementById("reload");

async function loadJoke() {
  statusEl.textContent = "Loading joke...";

  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    statusEl.textContent = `${data.setup} — ${data.punchline}`;
    console.log("Joke JSON:", data);
  } catch (error) {
    statusEl.textContent = "Could not load joke (check network).";
    console.log("Fetch failed:", error.message);
  }
}

reloadBtn.addEventListener("click", loadJoke);
loadJoke();
