// #1. write a function that takes two number as input and returns their sum;
function sum(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    if (a > 0 && b > 0) {
      const Total = a + b;
      console.log("Sum of two numbers is: ", Total);
    } else {
      console.log("plz enter correct number");
    }
  } else {
    console.log("Error: Both inputs must be numbers.");
  }
}
sum(50, "hell");
