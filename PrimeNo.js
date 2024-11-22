//write a function that tells if the given number is a prime number or not.
function isPrime(num) {
  let result = true;
  if (num <= 1) {
    throw new Error("Input must be a positive integer.");
  }
  for (let i = 2; i < num; i++) {
    console.log(num, "%", i, "=", num % i);

    if (num % i === 0) {
      // return false
      result = false;
     break;
    }
  }
  return result;
}

console.log(isPrime(8));
