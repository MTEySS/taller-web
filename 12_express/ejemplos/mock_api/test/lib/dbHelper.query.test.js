// mocha test
var root = __dirname + '/../../';
var db = require(root + 'lib/dbHelper');

var _ = require('lodash');

var should = require('chai').should();

describe('dbHelper module', function() {

  describe('dbHelper.query', function() {

    var original = [
      { name: 'ernesto', age: 30 },
      { name: 'carlos', age: 20 },
      { name: 'fidel', age: 60 },
      { name: 'abel', age: 10 },
      { name: 'daniel', age: 50 },
      { name: 'braulio', age: 40 },
      { name: 'gerardo', age: 70 }
    ];

    var copy = _.cloneDeep(original);

    // defensive test
    // original should NEVER be modified
    afterEach(function() {
      original.should.eql(copy);
    });

    it('should return the same data when no params are specified', function() {
      var data = db.query(original);
      data.should.have.members(original);
    });

    it('should return the first "len" elements', function() {
      var data = db.query(original, { len: 3 });
      data.should.have.length(3);
      data.should.have.members(original.slice(0,3));
      data.should.eql([
        { name: 'ernesto', age: 30 },
        { name: 'carlos', age: 20 },
        { name: 'fidel', age: 60 },
      ]);
      // original[0].name = 'modified';   // just to test that touching original fails tests
    });

    it('should return the first element when len equals 1', function() {
      var data = db.query(original, { len: 1 });
      data.should.have.length(1);
      data.should.eql([{ name: 'ernesto', age: 30 }]);
    });

    it('should return the first "len" elements ordered by age', function() {
      var data = db.query(original, { order: 'age', len: 3 });
      data.should.have.length(3);
      data.should.eql([
        { name: 'abel', age: 10 },
        { name: 'carlos', age: 20 },
        { name: 'ernesto', age: 30 }
      ]);
    });

    it('should return the first "len" elements ordered by age in descending order', function() {
      var data = db.query(original, { order: 'age', sort: 'desc', len: 3 });
      data.should.have.length(3);
      data.should.eql([
        { name: 'gerardo', age: 70 },
        { name: 'fidel', age: 60 },
        { name: 'daniel', age: 50 }
      ]);
    });

    it('should return the second page', function() {
      var data = db.query(original, { len: 3, page: 2 });
      data.should.have.length(3);
      data.should.eql([
        { name: 'abel', age: 10 },
        { name: 'daniel', age: 50 },
        { name: 'braulio', age: 40 }
      ]);
    });

    it('should return a partial third page', function() {
      var data = db.query(original, { len: 3, page: 3 });
      data.should.have.length(1);
      data.should.eql([
        { name: 'gerardo', age: 70 }
      ]);
    });

    it('should return an empty array if we passed the end of data', function() {
      var data = db.query(original, { len: 3, page: 4 });
      data.should.have.length(0);
      data.should.eql([]);
    });

    it('should sort and then paginate', function() {
      var data = db.query(original, { order: 'name', sort: 'desc', len: 3, page: 2 });
      data.should.have.length(3);
      data.should.eql([
        { name: 'daniel', age: 50 },
        { name: 'carlos', age: 20 },
        { name: 'braulio', age: 40 }
      ]);
    });

    it('should filter and then sort', function() {
      var data = db.query(original, { order: 'name', sort: 'desc', q: 'el' });
      data.should.have.length(3);
      data.should.eql([
        { name: 'fidel', age: 60 },
        { name: 'daniel', age: 50 },
        { name: 'abel', age: 10 }
      ]);
    });

    it('should correctly read params from a res.query object', function() {
      var data = db.query(original, { query: { order: 'name', sort: 'desc', len: 3, page: 2 } });
      data.should.have.length(3);
      data.should.eql([
        { name: 'daniel', age: 50 },
        { name: 'carlos', age: 20 },
        { name: 'braulio', age: 40 }
      ]);
    });

  });

});
