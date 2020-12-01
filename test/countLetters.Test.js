const countLetters = require('../countLetters');
const { assert } = require('chai');

  describe("#head", () => {
    it("returns '{l: 2, i: 2, g: 1, h: 3, t: 2, o: 1, u: 1, s: 1, e: 2, ' ': 3, n: 1, a: 1,b: 1}' for 'lighthouse in the lab' ", () => {
      assert.deepEqual(countLetters("lighthouse in the lab"), {
        l: 2,
        i: 2,
        g: 1,
        h: 3,
        t: 2,
        o: 1,
        u: 1,
        s: 1,
        e: 2,
        " ": 3,
        n: 1,
        a: 1,
        b: 1,
      });
    });
  });