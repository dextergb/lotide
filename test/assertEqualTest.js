const assert = require('chai').assert;

describe('#assertEqual', () => {
  it('should return true when comparing "Lighthouse" to "Lighthouse"', () => {
    const input = "Lighthouse";
    const expectedOutput = "Lighthouse";
    assert.equal(input, expectedOutput)
  });

  it('should return true when comparing "1" to "1"', () => {
    const input = "1";
    const expectedOutput = "1";
    assert.equal(input, expectedOutput)
  });

});