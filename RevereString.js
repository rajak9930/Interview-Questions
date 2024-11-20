//  write a function that return the revere of a string

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

function reverseStr(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(reverseStr("hello"));
