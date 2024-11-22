function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// console.log(isPalindrome("raja"));
// console.log(isPalindrome("level"));

//-------------------------------------------
function checkPalindrome(str) {
  const reverse = str.split("").reverse().join('');

  return str === reverse;
}
console.log(checkPalindrome("level"));
