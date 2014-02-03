// jasmine test
var root = __dirname + '/../../../';
var convert = require(root + 'lib/convert');

describe('convert module', function() {

  describe('convert.isNumeric', function() {

    it('should return false when no value is specified', function() {
      expect(convert.isNumeric()).toBe(false);
    });

    it('should return true when a numeric value is specified', function() {
      expect(convert.isNumeric('123.45')).toBe(true);
    });

    it('should return true when number is passed', function() {
      expect(convert.isNumeric(13 * 2)).toBe(true);
    });

  });

});
