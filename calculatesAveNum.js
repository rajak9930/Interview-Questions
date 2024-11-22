// write a function that calculates and returns the average of a set of numbers.

function average(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  let result =sum/num.length;
  return result;
}

console.log(average([2, 3, 4, 6, 8]));
