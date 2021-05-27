const eqArrays = function(firstArray, secondArray) {
  let test = true;
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      test = false;
      return test;
    }
  }
  return test;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array) {
  const middleIndex = Math.floor(array.length / 2);
  const arr = [];
  if (array.length <= 2) {
    return arr;
  } else if (array.length % 2 === 0) {
    arr.push(array[middleIndex - 1]);
    arr.push(array[middleIndex]);
  } else {
    arr.push(array[middleIndex]);
  }
  return arr;
};
