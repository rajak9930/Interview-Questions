//#11. write a function that finds and prints the second largest element in an array of numbers.
function findSecondLargest(arr) {
    const uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);
    console.log(uniqueSorted[1] ?? "No second largest element found.");
  }
  
  // Example usage:
  findSecondLargest([10, 20, 4, 45, 99]); // Output: 45
  
 function findSecondLargest(arr) {
  if (arr.length < 2) {
    console.log("Array must have at least two numbers");
    return;
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest; // Update second largest
      largest = num; // Update largest
    } else if (num > secondLargest && num < largest) {
      secondLargest = num; // Update second largest
    }
  }

  if (secondLargest === -Infinity) {
    console.log("No second largest element found");
  } else {
    console.log("Second Largest Element:", secondLargest);
  }
}

// Example usage:
findSecondLargest([10, 20, 4, 45, 99]); // Output: Second Largest Element: 45
findSecondLargest([5]); // Output: Array must have at least two numbers
findSecondLargest([10, 10, 10]); // Output: No second largest element found

  
