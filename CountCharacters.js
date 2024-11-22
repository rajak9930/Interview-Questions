//write a program that counts the occurrences of each  character in a string.

function count_chars(str) {
    str=str.toLowerCase()
  let char_count = {};
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    if (!char_count[str[i]]) {
      char_count[str[i]] = 0;
    }
    char_count[str[i]]++;
  }
  return char_count;
}
console.log(count_chars("Hell rajaah"));

