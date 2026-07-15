Lesson.bindRun("btn-arrow", () => {
  const user1 = {
    firstName: "Lalit",
    age: 18,
    about: () => {
      return `${this.firstName}, age ${this.age}`;
    }
  };

  const result = user1.about();
  Lesson.log("out-arrow",
    "Arrow function in object method:",
    "\nuser1.about():", result,
    "\n(this refers to outer scope, not user1)"
  );
});

Lesson.bindRun("btn-use", () => {
  const logs = [];
  const counter = {
    count: 0,
    start() {
      for (let i = 1; i <= 3; i++) {
        this.count++;
        logs.push(`Count: ${this.count}`);
      }
    }
  };
  
  counter.start();
  Lesson.log("out-use", logs.join("\n") + "\n(Arrow would preserve counter's this)");
});
