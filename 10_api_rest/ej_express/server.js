var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

// Static data
var todos = [
  { id: 'A', name:'Task A', description:'Little description of Task A'},
  { id: 'B', name:'Task B', description:'Little description of Task B'},
  { id: 'C', name:'Task C', description:'Little description of Task C'},
  { id: 'D', name:'Task D', description:'Little description of Task D'},
  { id: 'E', name:'Task E', description:'Little description of Task E'},
  { id: 'F', name:'Task F', description:'Little description of Task F'},
  { id: 'G', name:'Task G', description:'Little description of Task G'},
  { id: 'H', name:'Task H', description:'Little description of Task H'},
];

// configure app to use bodyParser()
app.use(bodyParser());

// public folder 
app.use(express.static(__dirname + '/public'));

// logging all requests
app.all('/api/*', function (req, res, next) {
  console.log('API Log...');
  next();
});

  

// Routes simple way
app.get('/api/todo', function (req, res, next) {
  // return todo list
  res.send(todos);
});
  

app.post('/api/todo', function (req, res, next) {

  var newTodo = {};
  newTodo.id = req.body.id;
  newTodo.name = req.body.name;
  newTodo.description = req.body.description;

  
  console.log(newTodo);
  todos.push(newTodo);
  
  res.json({ message: 'Todo created!' });
});


app.get('/api/todo/:id', function (req, res, next) {
  var todoId = req.params.id;

  todos.forEach(function (todo) {
    if (todo['id'] === todoId) {
      // return Item
      res.json(todo);
    }
  });

});


var server = app.listen(3000, function () {
  console.log('Server listening on port: ', server.address().port);
});