// Solution 5 — Async

function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("done"), 1000);
  });
}

async function run() {
  const result = await waitOneSecond();
  console.log(result); // "done" after 1 second
}

run();
