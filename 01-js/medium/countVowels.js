/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    str = str.toLowerCase();
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let res = 0

    for (let letter of str) {
      if (vowels.includes(letter)) res+=1;
    }
    return res;
}

module.exports = countVowels;