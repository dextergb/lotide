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
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const without = function (originalArray, removedItems){
  let newArray = [];
  for(const arr of originalArray){
    newArray.push(arr);
  }
  for (let i = 0; i < removedItems.length; i++){
    for (let j = 0; j < originalArray.length; j++){
      if (removedItems[i] === originalArray[j]){
        newArray.splice(j, 1);
      }
    }
  }
  return newArray;
}

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));