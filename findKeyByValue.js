const assertEqual = require('./assertEqual')

// implement function findKeyByValue which takes in an object and a value
// scan the object
// return the first key which contains the given value
// if no key with given value is found then
// return undefined

// utilize object.keys():
// returns an array of a given object's own enumerable property names,
// iterated in the same order that a normal loop would.

const findKeyByValue = function(object, value) {
  // console.log('object.keys:', Object.keys(object))
  for (const key of Object.keys(object)) {
    // console.log(key)
    // console.log(object[key])
    if (object[key] === value) {
      return key;
    }
  }
};

// const allKeys = Object.keys(object);
// for (const key of allKeys) {

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue