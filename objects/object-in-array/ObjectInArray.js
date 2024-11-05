// object inside array
// very useful in real world applications

const users = [
  { user_id: 1, firstName: "Jakhar", gender: "male" },
  { user_id: 2, firstName: "Jakhar2", gender: "male" },
  { user_id: 3, firstName: "Jakhar3", gender: "male" },
];
for (let user of users) {
  console.log(user.user_id);
}
