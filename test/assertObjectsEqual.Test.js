const assertObjectsEqual = require('../assertObjectsEqual');
const eqArrays = require('../eqArrays');
const eqObjects = require('../eqObjects');


//Test Cases

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(eqObjects(ab, ba), true)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(eqObjects(ab, abc), false)); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(eqObjects(cd, dc), true)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(eqObjects(cd, cd2), false)); // => false