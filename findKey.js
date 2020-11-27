const findKey = function(object, callback){
    let result = '';
    for(const i in object){
        if(callback(object[i])){
            return result = i;
        }
    }
}


findKey({
        "Blue Hill": { stars: 1 },
        "Akaleri":   { stars: 3 },
        "noma":      { stars: 2 },
        "elBulli":   { stars: 3 },
        "Ora":       { stars: 2 },
        "Akelarre":  { stars: 3 }
      }, x => x.stars === 2) // => "noma"
      

const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
        } else {
          console.log(`❗️Assertion Failed:  ${actual} !== ${expected}`);
        }
}

console.log(assertEqual(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2), "noma"));
