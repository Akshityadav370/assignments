/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  let len = cleanStr.length;

  return helper(cleanStr, 0, len - 1);
}
function helper(str, start, end) {
  if (start >= end) return true;
  if (str[start] !== str[end]) return false;
  return helper(str, start + 1, end - 1);
}

module.exports = isPalindrome;
