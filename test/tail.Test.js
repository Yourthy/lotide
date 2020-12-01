const tail = require('../tail');
//mocha chai assertions
const assert = require('chai').assert;


describe("#tail", () => {
    it("returns ['Yo Yo' ,'Lighthouse'] for ['Yo Yo','Lighthouse', 'Labs']", () => {
        const words = ['Yo Yo', 'Lighthouse', 'Labs'];
        assert.deepEqual(tail(words),['Yo Yo', 'Lighthouse']);
      });
  
  });