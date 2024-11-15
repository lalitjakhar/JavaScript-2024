// every method

const numbers = [2, 4, 6, 8, 10];

const ans = numbers.every((number) => number % 2 === 0);
console.log(ans);

// other example

const userCart = [
  { productId: 1, productName: "mobile", price: "33000" },
  { productId: 2, productName: "laptop", price: "122000" },
  { productId: 3, productName: "tv", price: "18000" },
  { productId: 4, productName: "refrigator", price: "12000" },
];
const answer = userCart.every((cartItem) => cartItem.price < 30000);
console.log(answer);
