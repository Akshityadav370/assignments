/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let output = [];

  for (const data of transactions) {
    let existingCategoryIndex = output.findIndex(
      (item) => item.category === data.category
    );
    if (existingCategoryIndex === -1) {
      output.push({ category: data.category, totalSpent: data.price });
    } else {
      output[existingCategoryIndex].totalSpent += data.price;
    }
  }

  return output;
}

module.exports = calculateTotalSpentByCategory;
