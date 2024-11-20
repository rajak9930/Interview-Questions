//  write a function that tells if provided year is a leap year or not.
function CheckLeap(num) {
  if (num % 4 === 0 && num % 100 !== 0 || num % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(CheckLeap(2024));
