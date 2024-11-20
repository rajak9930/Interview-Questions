// write a function that calculates and prints the sum of the digit of a given number

function SumOfDigit(num) {
  if (num < 0) {
    throw new Error("Input must be a non-negative integer");
  }
  let sum = num
    .toString() // Convert the number to a string
    .split("") // Split the string into individual digits
    .map(Number) // Convert each string digit back to a number
    .reduce((a, b) => a + b, 0); // Sum up the digits
  return sum;
}

console.log(SumOfDigit(124)); // Output: 7
console.log(SumOfDigit(456)); // Output: 15
console.log(SumOfDigit(0)); // Output: 0
//----------------------------------------------------------------------------------------------//
function SumNum(num) {
  let splitNum = num.toString().split("");
  let sum = 0;
  splitNum.forEach((a) => (sum += parseInt(a)));
  return sum;
}

console.log(SumNum(12));
