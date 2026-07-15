Lesson.bindRun("btn-get", () => {
  class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }

    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  const person = new Person("lalit", "jakhar", 18);
  Lesson.log("out-get",
    "person.fullName:", person.fullName,
    "\n(getter, no parentheses needed)"
  );
});

Lesson.bindRun("btn-set", () => {
  class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }

    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName) {
      const [firstName, lastName] = fullName.split(" ");
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }

  const person = new Person("lalit", "jakhar", 18);
  person.fullName = "aman sharma";
  
  Lesson.log("out-set",
    "After setting fullName to 'aman sharma':",
    "\nperson.firstName:", person.firstName,
    "\nperson.lastName:", person.lastName,
    "\nperson.fullName:", person.fullName
  );
});
