const without = function(array, remove){
    let newArray = [];
    for(const i in array){
        if(remove[i] !== array[i]){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

const assertArraysEqual = function(array1,array2) {
    if(array1.length !== array2.length) {
      return false;
    } else {
      for(let i = 0; i < array1.length; i++){
        if(array1[i] !== array2[i]){
          return "These arrays are not equal!";
        }
      }
    }return "These Arrays are equal!";
};


console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
