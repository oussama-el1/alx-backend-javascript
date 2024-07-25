const assert = require('assert');
const calcul = require('./0-calcul')

describe('calculateNumber', function() {
  it('should be the some of the rounded value of a and b', function () {
    assert.equal(calcul(5, 5), Math.round(5) + Math.round(5));
  })
});
