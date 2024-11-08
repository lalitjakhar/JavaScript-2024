// some method

const numbers = [3, 5, 8, 9];

const ans = numbers.some((number) => number % 2 === 0);
console.log(ans);

//other example
const userCart = [
  { productId: 1, productName: "mobile", price: "33000" },
  { productId: 2, productName: "laptop", price: "122000" },
  { productId: 3, productName: "tv", price: "18000" },
  { productId: 4, productName: "refrigator", price: "12000" },
];
const answer = userCart.some((cartItem) => cartItem.price < 100000);
console.log(answer);
