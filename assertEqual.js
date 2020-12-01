const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    return actual;
  } else {
    console.log(`❗️Assertion Failed:  ${actual} !== ${expected}`);
    return false;
  }
  
};

module.exports = assertEqual;