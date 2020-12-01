const findKey = require("./findKey");

const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`❗️Assertion Failed:  ${actual} !== ${expected}`);
    }
  };

  const findKeyByValue = function(object, value){
    let result = undefined;
    for(const i in object){
        if(object[i] === value){
            result = i;
        }
    }
    return result;
}


  //Test Conditions
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

  module.exports = findKeyByValue;