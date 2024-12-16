// Splice Method

// start , delete , insert
// start , delete , insert

const myArray = ["item1", "item2", "item3", "item4"];

//  delete
const deletedItem = myArray.splice(1, 2);
console.log(deletedItem);

//insert
myArray.splice(1, 0, "inserted item");

//insert and delete together
myArray.splice(1, 2, "inserteditem 1", "inserteditem2");

console.log(myArray);
