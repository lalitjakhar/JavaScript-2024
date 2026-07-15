function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: "Lalit" });
    }, 400);
  });
}

function getPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { userId, title: "Learning JS" },
        { userId, title: "Async made easy" },
      ]);
    }, 400);
  });
}

Lesson.bindRun("btn-seq", async () => {
  Lesson.log("out-seq", "Loading user...");
  try {
    const user = await getUser(1);
    Lesson.log("out-seq", "User:", user.name, "\nLoading posts...");
    
    const posts = await getPosts(user.id);
    Lesson.log("out-seq", "User:", user.name, "\nPosts:", posts.map(p => p.title).join(", "));
  } catch (error) {
    Lesson.log("out-seq", "Error:", error.message);
  }
});

Lesson.bindRun("btn-parallel", async () => {
  Lesson.log("out-parallel", "Loading both together...");
  try {
    const [user, posts] = await Promise.all([getUser(2), getPosts(2)]);
    Lesson.log("out-parallel", 
      "Loaded together:",
      "\nUser:", user.name,
      "\nPosts:", posts.length, "posts"
    );
  } catch (error) {
    Lesson.log("out-parallel", "Error:", error.message);
  }
});
