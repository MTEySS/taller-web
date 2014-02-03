var convert = {

  toNumber: function(value, defaultValue) {
    if (!convert.isNumeric(value)) return defaultValue;
    return parseInt(value);
  },

  isNumeric: function(value) {
    return !isNaN(value);
  }

};

module.exports = convert;
