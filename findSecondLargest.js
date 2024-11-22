//#11. write a function that finds and prints the second largest element in an array of numbers.
function findSecondLargest(arr) {
    const uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);
    console.log(uniqueSorted[1] ?? "No second largest element found.");
  }
  
  // Example usage:
  findSecondLargest([10, 20, 4, 45, 99]); // Output: 45
  
  function findSecondLargestCheck(arr) {
    // Remove duplicates
    const uniqueArr = [...new Set(arr)];
  
    // Use reduce to find the largest element
    const largest = uniqueArr.reduce((max, current) => (current > max ? current : max), -Infinity);
  
    // Filter out the largest element and find the second largest
    const secondLargest = uniqueArr.filter(num => num !== largest).reduce((max, current) => (current > max ? current : max), -Infinity);
  
    // Check if the second largest element exists
    if (secondLargest === -Infinity) {
      console.log("No second largest element found.");
    } else {
      console.log("Second largest element:", secondLargest);
    }
  }
  
  // Example usage:
  findSecondLargestCheck([10, 20, 4, 45, 99]); // Output: 45
  