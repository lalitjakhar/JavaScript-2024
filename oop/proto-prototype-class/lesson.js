Lesson.bindRun("btn-factory", () => {
  function createUser(firstName, age) {
    const user = {};
    user.firstName = firstName;
    user.age = age;
    user.about = function () {
      return `${this.firstName} is ${this.age} years old.`;
    };
    user.is18 = function () {
      return this.age >= 18;
    };
    return user;
  }

  const user1 = createUser("lalit", 18);
  Lesson.log("out-factory",
    "user1.about():", user1.about(),
    "\nuser1.is18():", user1.is18()
  );
});

Lesson.bindRun("btn-class", () => {
  class User {
    constructor(firstName, age) {
      this.firstName = firstName;
      this.age = age;
    }
    
    about() {
      return `${this.firstName} is ${this.age} years old.`;
    }
    
    is18() {
      return this.age >= 18;
    }
  }

  const user = new User("lalit", 18);
  Lesson.log("out-class",
    "user.about():", user.about(),
    "\nuser.is18():", user.is18()
  );
});
