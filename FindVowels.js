//write a function that count count and print the number of vowels in a given string.
function CheckVowels(str){
    let vowels= 'aeiou'
    let count = 0;
    for (let i=0; i<=str.length;i++){
         if(vowels.includes(str[i])){
            count++;
         }
    }
return count;
}
console.log(CheckVowels('aeiouu'));
