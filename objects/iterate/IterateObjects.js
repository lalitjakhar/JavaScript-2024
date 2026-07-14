// how to iterate objects

const person = {
  name: "Jakhar",
  age: 18,
  "person hobbies": ["sleeping", "listening music"],
};

// 1) for...in — loops over keys
for (let key in person) {
  console.log(key, ":", person[key]);
}

// 2) Object.keys — array of keys
console.log("Keys:", Object.keys(person));
console.log("Is array?", Array.isArray(Object.keys(person)));

// 3) for...of over Object.keys
for (let key of Object.keys(person)) {
  console.log(person[key]);
}

// 4) Object.entries — [key, value] pairs
for (const [key, value] of Object.entries(person)) {
  console.log(`${key} =>`, value);
}
