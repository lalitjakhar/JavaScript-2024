# JavaScript Learning Journey

A step-by-step JavaScript practice repo. Open each folder, run the `.js` file in the browser (via its `index.html`) or Node, and read the comments. Follow the order below for the easiest path.

**Playlist:** [Learn JavaScript](https://www.youtube.com/playlist?list=PLwgFb6VsUj_l3XGLgZTf5lXq9rPAQ9COu) · **Docs:** [javascript.info](https://javascript.info/)

---

## How to learn from this repo

1. Pick a topic from the learning path (start with **Basics**).
2. Open that folder’s `index.html` in a browser, or run the `.js` file with Node.
3. Read the code, change values, and re-run until it clicks.
4. Move to the next section only when you feel comfortable.

```bash
# Example: run a file with Node
node basics/console-log/consoleLog.js
```

---

## Learning path (follow this order)

| Step | Folder | What you learn |
|------|--------|----------------|
| 1 | [`basics/`](./basics) | Variables, types, conditions, loops |
| 2 | [`arrays/`](./arrays) | Lists, methods, looping arrays |
| 3 | [`objects/`](./objects) | Key–value data, destructuring |
| 4 | [`functions/`](./functions) | Reusable code, callbacks, scope |
| 5 | [`how-js-works/`](./how-js-works) | How JS runs under the hood |
| 6 | [`set-map-chaining/`](./set-map-chaining) | Set, Map, optional chaining |
| 7 | [`oop/`](./oop) | `this`, prototypes, classes |
| 8 | [`dom/`](./dom) | Talk to HTML from JavaScript |

---

## 1. Basics — start here

Folder: [`basics/`](./basics)

### Hello, console

```javascript
console.log("Hey JavaScript!");
```

### Variables (`var`, `let`, `const`)

- `let` — value can change  
- `const` — value should not be reassigned  
- Prefer `let` / `const` over `var` in modern JS  

```javascript
let firstName = "Lalit";
console.log(firstName); // Lalit

firstName = "Jakhar";
console.log(firstName); // Jakhar

const age = 25;
// age = 26; // Error — const cannot be reassigned
```

Practice: [`basics/variables/`](./basics/variables) · [`basics/const/`](./basics/const)

### Data types

```javascript
const name = "Lalit";        // String
const score = 42;            // Number
const isLearning = true;     // Boolean
const empty = null;          // Null (intentional empty)
let notSet;                  // Undefined (not assigned yet)

console.log(typeof name);    // "string"
console.log(typeof score);   // "number"
```

**Strings — quick tools:**

```javascript
const first = "Lalit";
const last = "Jakhar";

console.log(first + " " + last);       // concatenation
console.log(`${first} ${last}`);       // template string (preferred)
console.log(first[0]);                 // "L" — indexing
console.log(first.toUpperCase());      // "LALIT"
```

Practice: [`basics/data-types/`](./basics/data-types)

### Operators & conditions

```javascript
const age = 18;

// if / else
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("Too young to vote");
}

// else if
const marks = 75;
if (marks >= 90) {
  console.log("A");
} else if (marks >= 70) {
  console.log("B");
} else {
  console.log("C");
}

// ternary (short if/else)
const status = age >= 18 ? "adult" : "minor";

// AND / OR
const hasId = true;
if (age >= 18 && hasId) {
  console.log("Entry allowed");
}

// switch
const day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  default:
    console.log("Another day");
}
```

Practice: [`basics/if-else/`](./basics/if-else) · [`basics/else-if/`](./basics/else-if) · [`basics/operators/`](./basics/operators) · [`basics/switch-statement/`](./basics/switch-statement)

### Loops

```javascript
// for
for (let i = 1; i <= 5; i++) {
  console.log(i); // 1 2 3 4 5
}

// while
let n = 1;
while (n <= 3) {
  console.log(n);
  n++;
}

// do...while (runs at least once)
let x = 1;
do {
  console.log(x);
  x++;
} while (x <= 3);

// break & continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skip 3
  if (i === 5) break;    // stop at 5
  console.log(i);
}
```

Practice: [`basics/loop/`](./basics/loop) · [`basics/break-continue/`](./basics/break-continue)

---

## 2. Arrays — lists of values

Folder: [`arrays/`](./arrays)

```javascript
const fruits = ["apple", "banana", "mango"];

console.log(fruits[0]);        // "apple"
console.log(fruits.length);    // 3

fruits.push("orange");         // add at end
fruits.pop();                  // remove from end
fruits.unshift("kiwi");        // add at start
fruits.shift();                // remove from start
```

### Loop an array

```javascript
const numbers = [10, 20, 30];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

for (const num of numbers) {
  console.log(num);
}
```

### Useful array methods

```javascript
const nums = [1, 2, 3, 4, 5];

// map — transform each item → new array
const doubled = nums.map((n) => n * 2);       // [2, 4, 6, 8, 10]

// filter — keep items that pass a test
const evens = nums.filter((n) => n % 2 === 0); // [2, 4]

// find — first match
const found = nums.find((n) => n > 3);         // 4

// reduce — combine into one value
const total = nums.reduce((sum, n) => sum + n, 0); // 15

// some / every
nums.some((n) => n > 4);   // true
nums.every((n) => n > 0);  // true
```

Practice: [`arrays/intro/`](./arrays/intro) · [`arrays/methods/`](./arrays/methods) · [`arrays/array-methods/`](./arrays/array-methods)

---

## 3. Objects — named data

Folder: [`objects/`](./objects)

```javascript
const person = {
  name: "Lalit",
  age: 25,
  city: "Delhi",
};

console.log(person.name);      // dot notation
console.log(person["age"]);    // bracket notation

person.country = "India";      // add property

// destructuring
const { name, age } = person;
console.log(name, age);

// spread
const copy = { ...person, age: 26 };
```

Practice: [`objects/intro/`](./objects/intro) · [`objects/destructuring/`](./objects/destructuring) · [`objects/spread-operator/`](./objects/spread-operator)

---

## 4. Functions — reusable blocks

Folder: [`functions/`](./functions)

```javascript
// function declaration
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Lalit"));

// function expression
const add = function (a, b) {
  return a + b;
};

// arrow function
const multiply = (a, b) => a * b;

// default & rest parameters
function sum(a = 0, b = 0) {
  return a + b;
}

function total(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
console.log(total(1, 2, 3, 4)); // 10

// callback — pass a function to another function
function process(num, callback) {
  return callback(num);
}
console.log(process(5, (n) => n * 2)); // 10
```

**Scope tip:** variables inside a function stay inside that function unless you return them.

Practice: [`functions/intro/`](./functions/intro) · [`functions/arrow-functions/`](./functions/arrow-functions) · [`functions/callback-function/`](./functions/callback-function)

---

## 5. How JavaScript works

Folder: [`how-js-works/`](./how-js-works)

Learn concepts like:

- Global Execution Context  
- Call Stack  
- Hoisting (why some code “moves up”)  

These help you debug surprises with `var`, function order, and `undefined`.

---

## 6. Set, Map & optional chaining

Folder: [`set-map-chaining/`](./set-map-chaining)

```javascript
// Set — unique values only
const ids = new Set([1, 2, 2, 3]);
console.log(ids); // Set { 1, 2, 3 }

// Map — key → value (keys can be any type)
const userMap = new Map();
userMap.set("name", "Lalit");
console.log(userMap.get("name")); // "Lalit"

// Optional chaining — safe nested access
const user = { profile: { city: "Delhi" } };
console.log(user?.profile?.city);   // "Delhi"
console.log(user?.address?.street); // undefined (no error)
```

---

## 7. OOP — objects & classes

Folder: [`oop/`](./oop)

```javascript
// this — refers to the object calling the method
const user = {
  name: "Lalit",
  sayHi() {
    console.log(`Hi, ${this.name}`);
  },
};
user.sayHi(); // Hi, Lalit

// class (modern OOP)
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, ${this.name}`;
  }
}

const p = new Person("Jakhar");
console.log(p.greet());
```

Also cover: `call` / `apply` / `bind`, prototypes, getters & setters in [`oop/`](./oop).

---

## 8. DOM — JavaScript meets HTML

Folder: [`dom/`](./dom)

```javascript
// Change text on the page
document.getElementById("title").innerText = "Welcome to JavaScript!";

// Create & add an element
const btn = document.createElement("button");
btn.textContent = "Click me";
btn.addEventListener("click", () => {
  alert("Button clicked!");
});
document.body.appendChild(btn);
```

Practice project: [`dom/project/`](./dom/project)

---

## Mini challenges (try these)

After each section, try without looking at notes:

1. **Basics:** Print even numbers from 1 to 20.  
2. **Arrays:** From `[1, 2, 3, 4, 5]`, get only odds, then double them.  
3. **Objects:** Make a `book` object and print `"Title by Author"`.  
4. **Functions:** Write `isEven(n)` that returns `true` / `false`.  
5. **DOM:** Change page background color on button click.

---

## Tips for beginners

- Change one line, run again, see what breaks — that is how you learn.  
- Prefer `===` over `==` (strict equality).  
- Prefer `const`, then `let`; avoid `var` unless you are studying it.  
- Read errors from the top — the first line usually points to the problem.  
- Practice daily in small chunks instead of long rare sessions.

---

## Resources

- YouTube playlist: [Learn JavaScript](https://www.youtube.com/playlist?list=PLwgFb6VsUj_l3XGLgZTf5lXq9rPAQ9COu)
- Modern tutorial: [javascript.info](https://javascript.info/)
- Reference: [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Happy coding!
