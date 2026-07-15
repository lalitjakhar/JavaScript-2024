Lesson.bindRun("btn-joke", async () => {
  Lesson.log("out-joke", "Loading joke...");

  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    Lesson.log("out-joke", `${data.setup}\n— ${data.punchline}`);
  } catch (error) {
    Lesson.log("out-joke", "Could not load joke (check network).\n" + error.message);
  }
});
