const assertArraysEqual = function(array1,array2) {
    if(array1.length !== array2.length) {
      console.log(`Assertion Failed: ${array1.length} !== ${array2.length}`);
      return;
    } else {
      for(let i = 0; i < array1.length; i++){
        if(array1[i] !== array2[i]){
          console.log(`Assertion Failed: ${array1} !== ${array2} `);
          return
        }
      }
    }console.log(`Assertion Passed: ${array1} === ${array2}`);
};


  
  const eqArrays = function(array1,array2) {
      if(array1.length !== array2.length) {
        return false;
      } else {
        for(let i = 0; i < array1.length; i++){
          if(array1[i] !== array2[i]){
            return false;
          }
        }
      }
      return true;
  };


const map = function(arr, callback) {
    const results = [];
    for (let item of arr) {
      results.push(callback(item));
    }
    return results;
  }

  



const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
//console.log(results1);
//console.log(assertArraysEqual(map(words, word => word[0]),results1))
console.log(assertEqual(map(words, word => word[0]),results1))
 //console.log(eqArrays(map(words, word => word[0]),results1))
