const assert = require('chai').assert;
const eqArrays = require('../eqArrays')

describe('#eqArrays', () => {
  it('Should return true when comparing [1, 2, 3] to [1, 2, 3]', () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
  });

  it('Should return false when comparing [1, 2, 3] to [3, 2, 1]', () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)
  });

  it('Should return false when comparing ["1", "2", "3"] to ["1", "2", "3"]', () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)
  });

});