var _ = require('lodash');
var convert = require('./convert');

var dbHelper = {

  byId: function(array, id) {
    return _(array).findWhere({ id: id }) || null;
  },

  deleteById: function(array, id) {
    for (var index = 0; index < array.length; index++) {
      if (array[index].id === id) {
        array.splice(index, 1);     // remove the element
        return true;
      }
    }
    return false;       // could not delete it, item not found
  },

  nextId: function(array) {
    var next = 0;

    _(array).each(function(element) {
      if (element.id > next) next = element.id;
    });

    return next + 1;

    // if (array.length === 0) return 1;

    // return _.chain(array)
    //   .map(function(item) { return item.id }) // an array of ids
    //   .max()   // get the max id
    //   .value() // get the value
    //   + 1;     // add one

    // return _(array).max(function(item) {
    //   return item.id;
    // }).id + 1;
  },

  query: function(array, options) {

    options = options || {};

    // received the req object, extract the query
    if (options.query) options = options.query;
    var filtered = dbHelper.filter(array, options.q, options.fields);
    var ordered = dbHelper.orderBy(filtered, options.order, options.sort);
    var paginated = dbHelper.paginate(ordered, options.page, options.len);

    return paginated;
  },

  orderBy: function(array, order, sort) {

    // if order not specified, just return a shallow copy of the array
    if (!order) return _(array).clone(array);

    sort = (sort || 'asc').toLowerCase();
    if (sort !== 'asc' && sort !== 'desc') sort = 'asc';

    var ordered = _.sortBy(array, order);
    if (sort === 'desc') ordered = ordered.reverse();   // change order

    return ordered;
  },

  paginate: function(array, page, len) {

    page = convert.toNumber(page, 1);
    len = convert.toNumber(len, 10);

    var start = (page-1) * len;
    var end = start + len;

    var paginated = array.slice(start, end);

    return paginated;
  },

  filter: function(array, q, fields) {
    // if query not specified, just return a shallow copy of the array
    if (!q) return _(array).clone(array);

    var isMatching = function(data, q, fields) {
      for (var prop in data) {
        if (data.hasOwnProperty(prop)) {
          if (!fields || fields.indexOf(prop) !== -1) {
            if (data[prop].toString().indexOf(q) !== -1) return true;
          }
        }
      }
      return false;
    }

    fields = fields || undefined;
    if (fields) fields = fields.split(',');

    return _.filter(array, function(data) {
      return isMatching(data, q, fields);
    });
  }

};

module.exports = dbHelper;
