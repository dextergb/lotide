const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const eqArrays = function(firstArray, secondArray) {
  let test = true;
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      test = false;
    }
  }
  return test;
};

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);