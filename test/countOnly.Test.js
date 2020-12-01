const countOnly = require("../countOnly");
const assertEqual = require('../assertEqual');
const { assert } = require('chai');

// //Test Cases
// const firstNames = [
//     "Karl",
//     "Salima",
//     "Agouhanna",
//     "Fang",
//     "Kavith",
//     "Jason",
//     "Salima",
//     "Fang",
//     "Joe"
//   ];
// const result1 = countOnly(firstNames, {
// Jason: true,
// Karima: true,
// Fang: true,
// Agouhanna: false,
// });
  
  describe('#countOnly', ()=>{
      it("should return 1 for 'Jason'", () => {
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
        const result1 = countOnly(firstNames, {
        Jason: true,
        Karima: true,
        Fang: true,
        Agouhanna: false,
        });
        let jason = result1['Jason'];

        // console.log(assertEqual(jason, 1));
        assert.deepEqual(assertEqual(result1["Jason"], 1), 1);
        //assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false}), { Fang: 2, Jason: 1 } );
    });
  })

  
  
  
 
//   assertEqual(result1["Jason"], 1);
//   assertEqual(result1["Karima"], undefined);
//   assertEqual(result1["Fang"], 2);
//   assertEqual(result1["Agouhanna"], undefined);