Lesson.bindRun("btn-window", () => {
  Lesson.log("out-window",
    "window:", typeof window === "object" ? "[object Window]" : String(window),
    "\nthis === window:", this === window
  );
});

Lesson.bindRun("btn-strict", () => {
  "use strict";
  
  function myFunc() {
    return this;
  }

  const result = myFunc();
  Lesson.log("out-strict",
    "Inside strict function:",
    "\nthis =", result === undefined ? "undefined" : String(result)
  );
});
