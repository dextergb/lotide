const eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// We'll implement a new function letterPositions which will return all the
// indices (zero-based positions) in the string where each character is found.
// For each letter, instead of returning just one number to represent its
// number of occurrences, multiple numbers may be needed to represent all the
// places in the string that it shows up.

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (! results[sentence[i]]) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
        
      }
    }
  }
  return results;
};

// const letterPositions = function(sentence) {
//   const results = {};
//   for (let letter of sentence) {
//     if (letter !== " ") {
//       results[letter] = [];
//     }
//   }
//   for (let i = 0; i < sentence.length; i++) {
//     if (sentence[i] !== " " && results[sentence[i]]) {
//       results[sentence[i]].push(i);
//     }

//   }
//   return results;
// };



console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);