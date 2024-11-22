//write a function that count and print the number of words in a sentence.

function count_words(str) {
  let words = str.split(" ");
  console.log(words);
  let nonEmpty = words.filter((elm) => elm != "");
  return nonEmpty.length;
}
console.log(count_words("hello word raja"));
