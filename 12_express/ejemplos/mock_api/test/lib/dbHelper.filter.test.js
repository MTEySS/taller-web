// mocha test
var root = __dirname + '/../../';
var db = require(root + 'lib/dbHelper');

var _ = require('lodash');

var should = require('chai').should();

describe('dbHelper module', function() {

  describe('dbHelper.filter', function() {

    var original = [
      { name: 'john', surname: 'malcovich', age: 30 },
      { name: 'robert', surname: 'de niro', age: 35 },
      { name: 'vittorio', surname: 'gasman', age: 23 },
      { name: 'antonio', surname: 'banderas', age: 54 },
      { name: 'woody', surname: 'allen', age: 67 },
      { name: 'tom', surname: 'hanks', age: 23 },
      { name: 'tom', surname: 'cruise', age: 84 }
    ];

    var copy = _.cloneDeep(original);

    // defensive test
    // original should NEVER be modified
    afterEach(function() {
      original.should.eql(copy);
    });

    it('should return the same data when no params are specified', function() {
      var data = db.filter(original);
      data.should.have.members(original);
    });

    it('should return no elements if no match is found', function() {
      var data = db.filter(original, 'no match');
      data.should.have.length(0);
      data.should.eql([]);
    });

    it('should return a single match', function() {
      var data = db.filter(original, 'woody');
      data.should.have.length(1);
      data.should.eql([
        { name: 'woody', surname: 'allen', age: 67 }
      ]);
    });

    it('should return multiple matches', function() {
      var data = db.filter(original, 'a');
      data.should.have.length(5);
      data.should.eql([
        { name: 'john', surname: 'malcovich', age: 30 },
        { name: 'vittorio', surname: 'gasman', age: 23 },
        { name: 'antonio', surname: 'banderas', age: 54 },
        { name: 'woody', surname: 'allen', age: 67 },
        { name: 'tom', surname: 'hanks', age: 23 }
      ]);
    });

    it('should look only in the fields specified', function() {
      var data = db.filter(original, 'a', 'name');
      data.should.have.length(1);
      data.should.eql([
        { name: 'antonio', surname: 'banderas', age: 54 }
      ]);
    });

    it('should match by number fields', function() {
      var data = db.filter(original, '54');
      data.should.have.length(1);
      data.should.eql([
        { name: 'antonio', surname: 'banderas', age: 54 }
      ]);
    });

  });

});
