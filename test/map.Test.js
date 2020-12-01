const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const map = require('../map');


//Test Cases
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
console.log(assertArraysEqual(map(words, word => word[0]),results1))
 console.log(eqArrays(map(words, word => word[0]),results1))