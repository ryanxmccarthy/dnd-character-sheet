var expect = require('chai').expect;
var pass = require('../public/js/test.js');

describe('disemvowel', () => {
  it('should trim the string', () => {
    expect(pass('hello ')).to.equal('hello');
    expect(pass(' hello')).to.equal('hello');
  });
});