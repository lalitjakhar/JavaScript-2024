// spread operator

// spread operator in array
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const newArray = [...array1, ...array2, 89, 69];
// const newArray2 = [..."1234567890"];
// console.log(newArray);

// spread operator in object
const obj1 = {
  key1: "value1",
  key2: "value2",
};

const obj2 = {
  key1: "valueunique",
  key3: "value3",
  key4: "value4",
};

const newObject = { ...obj1, ...obj2 };
console.log(newObject);
