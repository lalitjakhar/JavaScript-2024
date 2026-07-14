// async/await — cleaner way to wait for promises

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

// Without async/await: nested .then()
// With async/await: reads top to bottom like normal code

async function showUserPosts() {
  try {
    const user = await getUser(1);
    console.log("User:", user);

    const posts = await getPosts(user.id);
    console.log("Posts:", posts);
  } catch (error) {
    console.log("Something went wrong:", error.message);
  }
}

showUserPosts();

// Parallel work with Promise.all
async function loadTogether() {
  const [user, posts] = await Promise.all([getUser(2), getPosts(2)]);
  console.log("Loaded together:", user.name, posts.length, "posts");
}

loadTogether();
