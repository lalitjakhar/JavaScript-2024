// Promises — a value that arrives later
// States: pending → fulfilled  OR  pending → rejected

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Waited ${ms}ms`), ms);
  });
}

wait(500).then((message) => {
  console.log(message);
});

// Creating your own promise
const canVote = (age) => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("Allowed to vote");
    } else {
      reject(new Error("Too young to vote"));
    }
  });
};

canVote(20)
  .then((msg) => console.log("Success:", msg))
  .catch((err) => console.log("Fail:", err.message));

canVote(15)
  .then((msg) => console.log("Success:", msg))
  .catch((err) => console.log("Fail:", err.message));

// Chaining
Promise.resolve(2)
  .then((n) => n * 3)
  .then((n) => n + 1)
  .then((n) => console.log("Chained result:", n)); // 7
