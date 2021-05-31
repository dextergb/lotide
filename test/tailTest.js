const assertEqual = require('../assertEqual');
const tail = require('../tail')

console.log(assertEqual(tail([5,6,7]), 5));
console.log(assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual(tail([5,6,7]), [6,7]));