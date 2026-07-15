Lesson.bindRun("btn-props", () => {
  function hello() {
    console.log("hello world");
  }

  hello.myOwnProperty = "very unique value";
  
  Lesson.log("out-props",
    "hello.name:", hello.name,
    "\nhello.myOwnProperty:", hello.myOwnProperty,
    "\nhello.prototype:", JSON.stringify(hello.prototype)
  );
});

Lesson.bindRun("btn-proto", () => {
  function hello() {}

  hello.prototype.abc = "abc";
  hello.prototype.xyz = "xyz";
  hello.prototype.sing = function () {
    return "lalalla";
  };

  Lesson.log("out-proto",
    "hello.prototype.abc:", hello.prototype.abc,
    "\nhello.prototype.xyz:", hello.prototype.xyz,
    "\nhello.prototype.sing():", hello.prototype.sing()
  );
});
