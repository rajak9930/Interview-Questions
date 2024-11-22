//write a function  that return of raising a given number to a specified power

function raisingNum(base, exponent) {
  return Math.pow(base, exponent);
}
console.log(raisingNum(2, 3));

raisingNum(2, 3);

//------------------------------------------
function raisingNumber(base, exponent) {
  let result = 1;
  for (let i = 1; i <= exponent; i++) {
    result = result * base;
  }
  return result;
}
console.log(raisingNumber(2, 3));
