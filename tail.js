const assertEqual = require('./assertEqual')

const tail = function(array) {
  // let result = [];
  // for (let i = 1; i < array.length; i++) {
  //   result.push(array[i]);
  // }
  // return result;
  return array.slice(1);
};



// TEST CODE
console.log(assertEqual(tail([5,6,7]), 5));
console.log(assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual(tail([5,6,7]), [6,7]));
