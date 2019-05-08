// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function sayHello() {
  let greet = "Hello";

  function sayWorld() {
    console.log(greet, "World!");
  }
  return sayWorld;
}
let hi = sayHello();
hi();

const sayHello1 = () => greeting => `${greeting} World`;
let newHi = sayHello1();
console.log(newHi("Hello"));

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;

  function inc() {
    count++;
    return count;
  }

  return inc;
};

let increase = counter();
console.log(increase());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0;
  // Return an object that has two methods called `increment` and `decrement`.

  // `increment` should increment a counter variable in closure scope and return it.
  counterFactory.increment = function() {
    count += 1;
    return count;
  };
  // `decrement` should decrement the counter variable and return it.
  counterFactory.decrement = function() {
    count -= 1;
    return count;
  };
};
counterFactory();

console.log(counterFactory.increment());
console.log(counterFactory.increment());
console.log(counterFactory.increment());
console.log(counterFactory.decrement());
console.log(counterFactory.decrement());
console.log(counterFactory.decrement());
