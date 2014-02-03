var httpStatus = require('./httpStatus');

var e = {
  OK: 0,
  NOT_FOUND: 1,
  BAD_REQUEST: 2,
  INVALID_VALUE: 3,
  UNAUTHORIZED: 4,
  DUPLICATE_KEY: 5
};

e.raise = function(res, code, message) {

  var status = httpStatus.SERVER_ERROR;

  switch(code) {

  case e.OK:
    status = httpStatus.OK;
    message = message || 'operation successful';
    break;

  case e.NOT_FOUND:
    status = httpStatus.NOT_FOUND;
    message = message || 'record not found';
    break;

  case e.BAD_REQUEST:
    status = httpStatus.BAD_REQUEST;
    message = message || 'bad request';
    break;

  case e.INVALID_VALUE:
    status = httpStatus.INVALID_VALUE;
    message = message || 'invalid value specified';
    break;

  case e.UNAUTHORIZED:
    status = httpStatus.UNAUTHORIZED;
    message = message || 'unauthorized';
    break;

  case e.DUPLICATE_KEY:
    status = httpStatus.DUPLICATE_KEY;
    message = message || 'duplicate key';
    break;

  }

  var error = {
    status: status,
    message: message
  };

  res.json(status, error);

};

module.exports = e;
