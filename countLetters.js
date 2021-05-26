const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// const countLetters = function(string) {
//   const results = {};
//   for (let letter of string) {
//     if (letter !== " ") {
//       results[letter] = 0;
//     }
//   }
//   for (let letter of string) {
//     if (letter !== " ") {
//       results[letter]++;
//     }
//   }
//   return results;
// };


const countLetters = function(string) {
  const results = {};
  for (let letter of string) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};


console.log(countLetters('lighthouse in the house'))
const result1 = countLetters("lighthouse in the house");
assertEqual(result1["l"],1);
assertEqual(result1["e"],3);
assertEqual(result1["u"],2);