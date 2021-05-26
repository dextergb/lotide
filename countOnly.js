// Take a collection of items and return counts for a specific subset of those items.
// It won't count everything
// In order to decide what to count, will be given an idea of which items we care about and it will only count those, ignoring others.
// Items in our case will be limited to Strings.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  //console.log('this is all items', allItems)
  const results = {}; // declaring an empty object for our results
  for (const item of allItems) { // looping through each item in allItems
    if (itemsToCount[item] && !results[item]) { // checking if item is present within item to count and it's NOT present in results then initiate it to 1
      // console.log('First time encountering item', item);
      results[item] = 1; // initiates to 1
    } else if (results[item]) { // if the item is present within results add 1 to the value
      // console.log('Encountered item again', item);
      results[item] += 1; // adding 1 to the value

    }
  }
  // console.log('this is all results', results);
  return results; // returning new object
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];


const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
