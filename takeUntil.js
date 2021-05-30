// The function will return a:
// "slice of the array with elements taken from the beginning."
// It should keep going until the callback returns a truthy value.
// the callback should only be provided one value: The item in the array.

const takeUntil = function(array, callback) {
  const results = [];
  for (let arr of array) {
    if (callback(arr)) {
      return results;
    } else {
      results.push(arr);
    }
  }
  return results;
};

// test cases:

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// Expected Output
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);

module.exports = takeUntil;