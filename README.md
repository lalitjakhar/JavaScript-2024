# JavaScript Learning Journey

A step-by-step practice repo: open a lesson, change one line, watch the console. Built for absolute beginners who want a clear path from zero to real DOM + async apps.

**Start here:** open [`index.html`](./index.html) in your browser (or run `npm start`).

**Playlist:** [Learn JavaScript](https://www.youtube.com/playlist?list=PLwgFb6VsUj_l3XGLgZTf5lXq9rPAQ9COu) · **Docs:** [javascript.info](https://javascript.info/)

---

## Quick start

```bash
# Option A — visual learning hub (recommended)
npm start
# then open http://localhost:3000

# Option B — run any lesson with Node
node basics/console-log/consoleLog.js

# Option C — open any folder's index.html in the browser
# DevTools → Console to see output
```

### How to study (4 steps)

1. Open the lesson’s `index.html` (or run the `.js` with Node).
2. Read the comments — they explain *why*, not just *what*.
3. Change one value, refresh, watch what breaks.
4. Do the matching challenge in [`exercises/`](./exercises).

---

## Learning path (follow this order)

| Step | Folder | What you learn |
|------|--------|----------------|
| 1 | [`basics/`](./basics) | Variables, types, conditions, loops |
| 2 | [`arrays/`](./arrays) | Lists + map / filter / reduce |
| 3 | [`objects/`](./objects) | Properties, iterate, destructuring |
| 4 | [`functions/`](./functions) | Reusable code, callbacks, scope |
| 5 | [`how-js-works/`](./how-js-works) | Execution context & hoisting |
| 6 | [`set-map-chaining/`](./set-map-chaining) | Set, Map, optional chaining |
| 7 | [`oop/`](./oop) | `this`, prototypes, getters |
| 8 | [`error-handling/`](./error-handling) | try/catch, throw |
| 9 | [`async-js/`](./async-js) | Promises, async/await, fetch |
| 10 | [`dom/`](./dom) | Select, events, **working todo app** |
| ★ | [`exercises/`](./exercises) | Challenges + solutions |

---

## 1. Basics — start here

Folder: [`basics/`](./basics)

```javascript
console.log("Hey JavaScript!");

let firstName = "Lalit";
const age = 25;

if (age >= 18) {
  console.log("adult");
} else {
  console.log("minor");
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

Practice: [`basics/variables/`](./basics/variables) · [`basics/if-else/`](./basics/if-else) · [`basics/loop/`](./basics/loop)

---

## 2. Arrays

Folder: [`arrays/`](./arrays)

```javascript
const nums = [1, 2, 3, 4, 5];

const doubled = nums.map((n) => n * 2);
const evens = nums.filter((n) => n % 2 === 0);
const total = nums.reduce((sum, n) => sum + n, 0);
```

Practice: [`arrays/intro/`](./arrays/intro) · [`arrays/array-methods/`](./arrays/array-methods)

---

## 3. Objects

Folder: [`objects/`](./objects)

```javascript
const person = { name: "Lalit", age: 25 };

console.log(person.name);
const { name, age } = person;
const copy = { ...person, city: "Delhi" };
```

Practice: [`objects/intro/`](./objects/intro) · [`objects/iterate/`](./objects/iterate)

---

## 4. Functions

Folder: [`functions/`](./functions)

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

const add = (a, b) => a + b;

function process(num, callback) {
  return callback(num);
}
console.log(process(5, (n) => n * 2)); // 10
```

---

## 5–7. How JS works · Set/Map · OOP

- [`how-js-works/`](./how-js-works) — execution context, hoisting  
- [`set-map-chaining/`](./set-map-chaining) — unique values, maps, `?.`  
- [`oop/`](./oop) — `this`, call/apply/bind, prototypes, getters/setters  

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  get label() {
    return `Person: ${this.name}`;
  }
}
```

---

## 8. Error handling

Folder: [`error-handling/`](./error-handling)

```javascript
try {
  JSON.parse("{ bad }");
} catch (error) {
  console.log(error.message);
}
```

---

## 9. Async JavaScript

Folder: [`async-js/`](./async-js)

```javascript
async function load() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();
  console.log(data);
}
```

Lessons: [promises](./async-js/promises) · [async/await](./async-js/async-await) · [fetch](./async-js/fetch)

---

## 10. DOM — make pages interactive

Folder: [`dom/`](./dom)

| Lesson | Path |
|--------|------|
| Select elements | [`dom/select/`](./dom/select) |
| Events | [`dom/events/`](./dom/events) |
| **Todo + signup app** | [`dom/project/`](./dom/project) |

```javascript
document.getElementById("title").innerText = "Welcome!";
button.addEventListener("click", () => alert("Clicked"));
```

---

## Practice challenges

Open [`exercises/index.html`](./exercises/index.html) or run:

```bash
npm run challenge:1
npm run solution:1   # only after you try!
```

| # | Topic | Skill |
|---|--------|--------|
| 1 | Basics | Loops + if/else |
| 2 | Arrays | filter + map |
| 3 | Objects | Template string |
| 4 | Functions | Return values |
| 5 | Async | Promise + await |
| 6 | DOM | Extend the todo app |

---

## Tips that save hours

- Prefer `===` over `==`
- Prefer `const`, then `let` — avoid `var` unless learning it
- Read the **first line** of an error — file + line number
- Practice 25 focused minutes daily beats one long weekend binge
- Never copy a solution before struggling for at least 10 minutes

---

## Project layout

```text
index.html          ← visual learning hub
basics/             ← start here
arrays/
objects/
functions/
how-js-works/
set-map-chaining/
oop/
error-handling/     ← NEW
async-js/           ← NEW (promises, await, fetch)
dom/                ← select, events, working project
exercises/          ← challenges + solutions
```

Happy coding.
