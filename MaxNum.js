//write a function that finds and prints the maximum element in an array of numbers.

function find_max_element(arr) {
  let maxNum = Math.max(...arr);
  return maxNum;
}

console.log(find_max_element([3, 5, 4, 10, 15, 77, 99, 110]));

//--------------------------------------

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max
}

console.log(findMax([2, 6, 8, 7, 10, 15, 19]));
