//write a  function that calculates and print the simple interest of a given principal amount, rate of interest and time period.
function simpleInterest(principal, rate, time) {
 let interest = (principal * rate * time) / 100;
 console.log(`The simple interest is ${interest}`
    );

}
simpleInterest(1000,5,1)