const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it('Should return [2] when passed [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('Should return [2, 3] when passed [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});