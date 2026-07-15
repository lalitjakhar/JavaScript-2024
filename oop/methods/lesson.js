Lesson.bindRun("btn-method", () => {
  function personInfo() {
    return `${this.firstName} is ${this.age} years old`;
  }

  const person1 = {
    firstName: "harsh",
    age: 8,
    about: personInfo
  };

  const person2 = {
    firstName: "mohit",
    age: 18,
    about: personInfo
  };

  Lesson.log("out-method",
    "person1.about():", person1.about(),
    "\nperson2.about():", person2.about()
  );
});

Lesson.bindRun("btn-factory", () => {
  const userMethods = {
    about() {
      return `${this.firstName} is ${this.age} years old.`;
    },
    is18() {
      return this.age >= 18;
    }
  };

  function createUser(firstName, age) {
    const user = { firstName, age };
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
  }

  const user1 = createUser("lalit", 9);
  const user2 = createUser("Aman", 29);

  Lesson.log("out-factory",
    "user1.about():", user1.about(),
    "\nuser1.is18():", user1.is18(),
    "\nuser2.about():", user2.about(),
    "\nuser2.is18():", user2.is18()
  );
});
