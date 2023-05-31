//const { expect } = require('./sumAll');
const sumAll = require('./sumAll');

describe('sumAll', () => {
  it('should sum numbers within the range', () => {
    expect(sumAll(1, 4)).to.equal(10);
  });

  it('should work with large numbers', () => {
    expect(sumAll(1, 4000)).to.equal(8002000);
  });

  it('should work with larger number first', () => {
    expect(sumAll(123, 1)).to.equal(7626);
  });

  it('should return "ERROR" with negative numbers', () => {
    expect(sumAll(-10, 4)).to.equal('ERROR');
  });

  it('should return "ERROR" with non-number parameters', () => {
    expect(sumAll(10, "90")).to.equal('ERROR');
  });

  it('should return "ERROR" with non-number parameters', () => {
    expect(sumAll(10, [90, 1])).to.equal('ERROR');
  });
});
