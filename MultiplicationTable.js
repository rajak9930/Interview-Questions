// write a function that generates and prints a multiplication table of a given number up to a specified range.
function multiplicationTableRange(TableOf, tableTill) {
  for (let i = 1; i <= tableTill; i++) {
    console.log(`${TableOf} * ${i} = ${i * tableTill}`);
  }
}
multiplicationTableRange(5, 12);

//-----------------------------------------------------------
function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${i} * ${num} = ${i * num}`);
  }
}
multiplicationTable(2);
