// =============================================
// Objects intro — named key/value data
// Visual: objects/intro/index.html
// =============================================

// Objects store related details about ONE thing
const person = {
  name: "Jakhar",
  age: 18,
  hobbies: ["sleeping", "listening music"],
};

console.log("1) whole object →", person);

// Read values
console.log("2) person.name →", person.name);
console.log("2) person['age'] →", person["age"]);
console.log("2) hobbies →", person.hobbies);

// Add a new key/value
person.gender = "male";
console.log("3) after adding gender →", person);
