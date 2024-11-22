// #5. write a function that calculate factorial of a number.

function factorialNum(num) {
  if (num < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }
  let result = 1;
  for (let i = 1; i <= num; i++) {
    //result = result * i;
    result *= i;
  }
  return result;
}
console.log("! factorial of number " + factorialNum(5));

// write a function that finds all the factors of a number.

function findFactors(num) {
  if (num < 1) {
    throw new Error("Number should be greater than 0");
  }
  let factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      factors.push(i);
    }
  }
  return factors;
}
console.log(findFactors(10));
