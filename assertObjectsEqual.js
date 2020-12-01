const { assert } = require('chai');

const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect;
    if (actual === expected) {
        console.log(`✅ Assertion Passed:${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`❗️Assertion Failed:  ${inspect(actual)} !== ${inspect(expected)}`);
    }
  };




module.exports = assertObjectsEqual;