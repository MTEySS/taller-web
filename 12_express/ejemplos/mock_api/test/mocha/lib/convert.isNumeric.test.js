// mocha test
var root = __dirname + '/../../../';
var convert = require(root + 'lib/convert');

var assert = require('assert');
describe('convert module', function() {

  describe('convert.isNumeric', function() {

    it('should return false when no value is specified', function() {
      assert.equal(convert.isNumeric(), false);
    });

    it('should return true when a numeric value is specified', function() {
      assert.equal(convert.isNumeric('123.45'), true);
    });

  });

});
