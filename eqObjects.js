const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  for (const key of Object.keys(object1)) {
    if (object1[key] !== object2[key]) {
      return false
    }
  }
  return true
  
  // for (key of object1Keys)
  // // if (object1Keys === object2Keys)
  // loop through Object through the keys
  // find object1[key]
  // find object2[key]
  // compare object1[key] to object2[key]
  // if object1[key] does not equal object2[key]
  // return false
  // if object1[key] equals object2[key] continue the loop
  // when loop ends and it hasn't returned false
  // return true
};






const dc = {d: ["2", 3], c: "1"}
const cd = {c: "1", d: ["2", 3]};
const cd2 = { c: "1", d: ["2", 3, 4] };
const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
const abc = {a: "1", b: "2", c: "3"};

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);