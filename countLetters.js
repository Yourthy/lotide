const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`❗️Assertion Failed:  ${actual} !== ${expected}`);
    }
  };

  const countLetters = function(string){
    let result = {};
    for(let i of string){
        console.log(string[i]);
        if(result[i]){
            result[i]++;
        }else{
            result[i] = 1;
        }
    }
    return result;
}



  const result1 = countLetters("lighthouse in the lab");
  console.log(result1);
