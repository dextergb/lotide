const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);


const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')


assertArraysEqual(eqArrays(results1, ['g', 'c', 't']), true);
assertArraysEqual(eqArrays(results1, ['g', 'f', 'r']), false);

module.exports = map;
