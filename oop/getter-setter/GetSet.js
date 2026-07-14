// getter and setters
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // get — use like a property (no parentheses)
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // set — assign like a property
  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person("lalit", "jakhar", 18);

console.log(person1.fullName); // lalit jakhar (getter)

person1.fullName = "aman sharma"; // setter
console.log(person1.fullName); // aman sharma
console.log(person1);
