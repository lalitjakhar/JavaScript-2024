"use strict";

// window — the global object in browsers
console.log("window object:", window);

function myFunc() {
  // In strict mode, this is undefined for a plain function call
  console.log("this inside function:", this);
}

myFunc();

// On the window object, this === window (in browsers)
console.log("this === window?", this === window);
