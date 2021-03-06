const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('should return ["Lighthouse, "Labs"] when passed ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('should return ["Lighthouse"] when passed ["Hello", "Lighthouse"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse"]), ["Lighthouse"]);
  });

});