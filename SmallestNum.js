// #3. write a function that find and print the smallest number in a list of numbers;

function findSmallNum(num) {
  const smallest = Math.min(...num);
  console.log("The smallest number is:", smallest);
}

findSmallNum([1, 2, 3, 4, 5, 6, 7, 8]);

function SmallNum(num) {
  let smallest = num[0];
  for (let i = 0; i < num.length; i++) {
    if (num[i] < smallest) {
      smallest = num[i];
    }
  }
  console.log("this is smallest number " + smallest);
}
SmallNum([1,1, 2, 3, 4, 5, 6, 7, 8]);
