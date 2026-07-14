// =============================================
// reduce — many values → one result
// Visual: arrays/array-methods/reduce/index.html
// =============================================

const numbers = [3, 2, 6, 8, 4, 1, 9];

// Sum: start total at 0, add each number
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log("sum →", sum); // 33

// Cart total — prices must be numbers (not strings!)
const userCart = [
  { productId: 1, productName: "mobile", price: 33000 },
  { productId: 2, productName: "laptop", price: 122000 },
  { productId: 3, productName: "tv", price: 18000 },
  { productId: 4, productName: "refrigerator", price: 12000 },
];

const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
  return totalPrice + currentProduct.price;
}, 0);

console.log("cart total →", totalAmount); // 185000
