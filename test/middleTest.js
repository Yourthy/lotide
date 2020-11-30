const middle = require('../middle');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');


//TestCases (middle)
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

//Test Cases (eqArrays)
console.log(eqArrays(middle([1]),[]));
console.log(eqArrays(middle([1, 2]),[]));
console.log(eqArrays(middle([1, 2, 3]),[2]));
console.log(eqArrays(middle([1, 2, 3, 4, 5]),[3]));
console.log(eqArrays(middle([1, 2, 3, 4]),[2, 3]));
console.log(eqArrays(middle([1, 2, 3, 4, 5, 6]),[3, 4]));

// Test Cases (assertArraysEqual)
console.log(assertArraysEqual(middle([1]),[]));
console.log(assertArraysEqual(middle([1, 2]),[]));
console.log(assertArraysEqual(middle([1, 2, 3]),[2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]));