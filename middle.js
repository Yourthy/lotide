
const eqArrays = function(array1,array2) {
    if(array1.length !== array2.length) {
      return false;
    } else {
      for(let i = 0; i < array1.length; i++){
        if(array1[i] !== array2[i]){
          return false;
        }
      }
    }return true;
};

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

  const middle = function(array){
    let result = [];
    if(array.length <= 2){
        return result;
        
    }else if(array.length % 2 === 0){
        result.push(array[array.length/2 -1], array[array.length/2]);

    }else{
        result.push(array[Math.round((array.length - 1) / 2)]);
    }
    return result;
}


//TestCases (middle)
// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

// //Test Cases (eqArrays)
// console.log(eqArrays(middle([1]),[]));
// console.log(eqArrays(middle([1, 2]),[]));
// console.log(eqArrays(middle([1, 2, 3]),[2]));
// console.log(eqArrays(middle([1, 2, 3, 4, 5]),[3]));
// console.log(eqArrays(middle([1, 2, 3, 4]),[2, 3]));
// console.log(eqArrays(middle([1, 2, 3, 4, 5, 6]),[3, 4]));

// Test Cases (assertArraysEqual)
console.log(assertArraysEqual(middle([1]),[]));
console.log(assertArraysEqual(middle([1, 2]),[]));
console.log(assertArraysEqual(middle([1, 2, 3]),[2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]));


