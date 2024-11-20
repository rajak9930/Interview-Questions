// #2. write a function that tells if a given number is even or odd;

function CheckEvenOdd(num) {
  const remainder = num % 2;
  if (remainder === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(CheckEvenOdd(2));

function EvenOdd(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 == 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }
}

EvenOdd(1, 10);
