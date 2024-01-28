/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // const normalizeString = (str) => str.replace(/[^\w]/g, "").toLowerCase();

  // // Normalize strings
  // str1 = normalizeString(str1);
  // str2 = normalizeString(str2);
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let map1 = {},
    map2 = {};

  for (letter of str1) {
    map1[letter] = (map1[letter] || 0) + 1;
  }
  for (letter of str2) {
    map2[letter] = (map2[letter] || 0) + 1;
  }

  for (key in map1) {
    if (!(key in map2) || map1[key] !== map2[key]) return false;
  }
  for (key in map2) {
    if (!(key in map1) || map1[key] !== map2[key]) return false;
  }

  return true;
}

module.exports = isAnagram;
