var __ = require('lodash');

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

var DEFAULT_PAGE_LEN = 3;

var todos = [
  { id: 1, task: 'The first task',   done: false },
  { id: 2, task: 'The second task',  done: true  },
  { id: 3, task: 'The third task',   done: false },
  { id: 4, task: 'The fourth task',  done: true  },
  { id: 5, task: 'The fifth task',   done: false },
  { id: 6, task: 'The sixth task',   done: true  },
  { id: 7, task: 'The seventh task', done: false }
];

app.get('/api/todos', function(req, res, next) {
  var page = parseInt(req.query.page || 1);
  var pageLen = parseInt(req.query.page_len || DEFAULT_PAGE_LEN);
  var start = (page-1) * pageLen;

  var data = todos;

  // /([\+\-]?)(.*)/.exec('+name')
  // ["+name", "+", "name"]
  var sortParsed = /([\+\-]?)(.*)/.exec(req.query.sort || '');
  var sort = sortParsed[2];
  var order = sortParsed[1] || '+';

  if (sort) {
    data = __.sortBy(todos, sort);
    if (order === '-') data = data.reverse();
  }

  res.json(data.slice(start, start + pageLen));
});

app.get('/api/todos/count', function(req, res, next) {
  res.send(todos.length.toString());
});

app.get('/api/todos/:id', function(req, res, next) {
  var id = parseFloat(req.params.id);
  var todo = __.find(todos, { id: id });
  if (!todo) return res.status(404).send('not found');
  return res.json(todo);
});

app.put('/api/todos/:id', function(req, res, next) {
  var id = parseFloat(req.params.id);
  var todo = __.find(todos, { id: id });
  if (!todo) return res.status(404).send('not found');

  // do not overwrite id
  var updateTodo = __.omit(req.body, 'id');

  __.assign(todo, updateTodo);
  return res.json(todo);
});

app.post('/api/todos', function(req, res, next) {
  var body = req.body;

  var id = parseFloat(body.id || 0);
  if (id === 0) {
    id = todos.length === 0 ? 1 : __.max(todos, 'id').id + 1;
  } else {
    var index = __.findIndex(todos, { id: id });
    if (index !== -1) return res.status(409).send("there's already a todo with that id");
  }

  var task = body.task || 'New task';
  var done = body.done === undefined ? false : body.done;

  var todo = { id: id, task: task, done: done }

  todos.push(todo);
  return res.json(todo);
});

app.delete('/api/todos/:id', function(req, res, next) {
  var id = parseFloat(req.params.id);
  var index = __.findIndex(todos, { id: id });
  if (index === -1) return res.status(404).send('not found');

  todos.splice(index, 1);
  return res.send('todo deleted successfully');
});

app.listen(3000);
console.log('app started');
