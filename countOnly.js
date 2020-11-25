const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`❗️Assertion Failed:  ${actual} !== ${expected}`);
    }
  };


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
  const countOnly = function(allItems, itemsToCount){
      const results = {};
      for(let i of allItems){
        //   console.log(itemsToCount[item]);
        //   console.log(item);
          if(itemsToCount[i]){
              if(results[i]){
                  results[i] +=1;
              }else{
                  results[i] = 1;
              }
          }
      }
      return results;
  }

  


  //Test Cases
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  console.log(result1);
  assertEqual(result1["Jason"], 1);
  assertEqual(result1["Karima"], undefined);
  assertEqual(result1["Fang"], 2);
  assertEqual(result1["Agouhanna"], undefined);