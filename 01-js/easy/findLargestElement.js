/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let biggestElement = numbers[0];
    for (Element of numbers) {
        if (biggestElement < Element)
            biggestElement = Element
    }
    return biggestElement
}

module.exports = findLargestElement;