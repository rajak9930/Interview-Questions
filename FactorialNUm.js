// #5. write a function that calculate factorial of a number.

function factorialNum(num) {
    if(num <0){
        throw new Error("Factorial is not defined for negative numbers");
    }
  let result = 1;
  for (let i = 1; i <= num; i++) {
    //result = result * i;
    result*=i
  }
  return result
}
console.log("! factorial of number "+factorialNum(5));

