const eqArrays = function(array1,array2) {
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
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false