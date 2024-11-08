// reduce method

const numbers = [3, 2, 6, 8, 4, 1, 9];

// aim : sum of all numbers in array

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(sum);

// other example

const userCart = [
  { productId: 1, productName: "mobile", price: "33000" },
  { productId: 2, productName: "laptop", price: "122000" },
  { productId: 3, productName: "tv", price: "18000" },
  { productId: 4, productName: "refrigator", price: "12000" },
];

const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
  return totalPrice + currentProduct.price;
}, 0);
console.log(totalAmount);
