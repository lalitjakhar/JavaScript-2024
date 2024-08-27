// for of loop  in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruit2 = [];

for (let fruit of fruits) {
  fruit2.push(fruit.toUpperCase());
}
console.log(fruit2);

// for in loop  in array
const vegetables = [
  "Tomato",
  "Potato",
  "Pea",
  "Cucumber",
  "Cauliflower",
  "Pumpkin",
];
const vegetable2 = [];

for (let vegetable in vegetables) {
  vegetable2.push(vegetables[vegetable]);
}
console.log(vegetable2);
