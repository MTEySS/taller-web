// attention
// check http://webapplog.com/express-js-and-mongoose-example-building-hackhall/

var express = require('express');
var app = express();

app.configure(function() {
  app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
  app.use(express.logger('dev'));                 // log every request to the console
  app.use(express.bodyParser());                  // pull information from html in POST
  app.use(express.methodOverride());              // simulate DELETE and PUT
});

// config
var root = '/api/';
var port = 3000;

// utils
var err = require('./lib/err');
var db = require('./lib/dbHelper');
var httpStatus = require('./lib/httpStatus');
var _ = require('lodash');

app.get(root + 'ping', function(req, res) {
  console.log(req.query);
  res.send('pong');
});

var data = {};

// check this: https://npmjs.org/package/readdir
data.usuarios = require('./data/usuarios/data.js');

app.get(root + 'usuarios', function(req, res, next) {

  var result = db.query(data.usuarios, req);
  res.json(result);
});

app.get(root + 'usuarios/:id', function(req, res) {

  var entity = app.findById(req, res, data.usuarios);

  res.json(entity);
});

app.put(root + 'usuarios/:id', function(req, res) {

  var entity = app.findById(req, res, data.usuarios);

  var updateEntity = req.body;
  delete updateEntity.id;         // prevent id from being modified

  _.extend(entity, updateEntity);    // WARNING: modifying data.usuarios

  res.json(entity);
});

app.post(root + 'usuarios', function(req, res) {

  var id = db.nextId(data.usuarios);  // #todo: return error if not found

  var newEntity = req.body;
  newEntity.id = id;

  data.usuarios.push(newEntity);

  res.json(httpStatus.CREATED, newEntity);
});

app.delete(root + 'usuarios/:id', function(req, res) {

  var entity = app.findById(req, res, data.usuarios);

  db.deleteById(data.usuarios, entity.id);

  err.raise(res, err.OK, 'record successfully deleted');
});

app.findById = function(req, res, data, entityName) {
  var convert = require('./lib/convert');

  entityName = entityName || 'record';

  var id = convert.toNumber(req.params.id);
  if (!id) err.raise(res, err.BAD_REQUEST, 'id should be a valid number');

  var entity = db.byId(data, id);
  if (!entity) {
    err.raise(res, err.NOT_FOUND, 'could not find ' + entityName + ' with id ' + id.toString());
  }

  return entity;
}

app.listen(port);
console.log('app started, listening on port ' + port);

module.exports = app;
