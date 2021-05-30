const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')

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

module.exports = without;