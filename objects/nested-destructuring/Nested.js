// nested destructuring

const users = [
  { user_id: 1, firstName: "Jakhar", gender: "male" },
  { user_id: 2, firstName: "Jakhar2", gender: "male" },
  { user_id: 3, firstName: "Jakhar3", gender: "male" },
];

const [{ firstName: user1firstName, user_id }, , { gender: user3gender }] =
  users;
console.log(user1firstName);
console.log(user3gender);
