const eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const without = function (originalArray, removedItems) {
  let newArray = []; // creating empty array to push items into later
  for (const element of originalArray) { // going through each element of originalArray
    if (removedItems.includes(element)) { // checks if the element that we are looping is found within the removedItems array
      // console.log('element is inlcuded and wont be added', element);
    } else { // if the element is not found within removedItems then push into newArray
      newArray.push(element)
    }
  }
  return newArray;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));





// const without = function (originalArray, removedItems){
//   let newArray = [];
//   for(const arr of originalArray){
//     newArray.push(arr);
//   }
//   for (let i = 0; i < removedItems.length; i++){
//     for (let j = 0; j < originalArray.length; j++){
//       if (removedItems[i] === originalArray[j]){
//         newArray.splice(j, 1);
//       }
//     }
//   }
//   return newArray;
// }
