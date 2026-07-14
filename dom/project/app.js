// Todo project — DOM practice for forms, lists, and events

const todoForm = document.querySelector(".form-todo");
const todoInput = todoForm.querySelector('input[type="text"]');
const todoList = document.querySelector(".todo-list");
const headlineBtn = document.querySelector(".btn-headline");
const mainHeading = document.getElementById("main-heading");
const signupForm = document.querySelector(".signup-form");

// Headline button
headlineBtn.addEventListener("click", () => {
  mainHeading.textContent = "You clicked Learn More — now build your todos!";
});

// Add todo
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = todoInput.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span class="text">${text}</span>
    <div class="todo-buttons">
      <button type="button" class="todo-btn done">Done</button>
      <button type="button" class="todo-btn remove">Remove</button>
    </div>
  `;

  todoList.appendChild(li);
  todoInput.value = "";
  todoInput.focus();
});

// Done / Remove (event delegation)
todoList.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("done")) {
    const textSpan = target.closest("li").querySelector(".text");
    textSpan.style.textDecoration = "line-through";
    textSpan.style.opacity = "0.6";
  }

  if (target.classList.contains("remove")) {
    target.closest("li").remove();
  }
});

// Simple signup validation
signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = signupForm.username.value.trim();
  const password = signupForm.password.value;
  const confirmPassword = signupForm.confirmPassword.value;

  if (!username) {
    alert("Username is required");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  alert(`Welcome, ${username}! Form submitted successfully.`);
  signupForm.reset();
});
