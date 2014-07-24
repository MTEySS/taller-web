var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

// Configurar bodyParser:
// Nos permite obtener los valores en req.body al recibir un POST
app.use(bodyParser());

// Configura carpeta publica:
// Permite alojar archivos, sitio web, etc
app.use(express.static(__dirname + '/public'));


// Datos de pueba para ofrecer en el servicio
var todos = [
  { id: 1 , name:'Pasaje', description:'Comprar pasajes a St. Thomas' , done:false },
  { id: 2 , name:'Documentacion', description:'Verificar pasaportes y visas', done:false },
  { id: 3 , name:'Reservar Excursiones', description:'Reservar clases de buceo', done:false }
]; 

// Ruteos GET, POST, DELETE, PUT de las entidades
app.get('/todo',function(req,res,next){
  res.json(todos);
});

app.get('/todo/:id',function(req,res,next){
  var idTodo = req.params.id;

  var todoFiltrado = todos.filter(function(todo){
    return todo.id.toString() === idTodo;
  });
  
  if (todoFiltrado.length>0){ // encontre elementos en el array
    res.json(todoFiltrado[0]);  
  }else
    res.status(404).send('Not Found');
});

app.post('/todo',function(req,res,next){
  var newTodo ={};
  
  newTodo.id = req.body.id;
  newTodo.name = req.body.name;
  newTodo.description = req.body.description;
  
  // agrego el item al array
  todos.push(newTodo);
  res.send('Se ha generado correctamente');
});

app.delete('/todo/:id',function(req,res,next){
  var idTodo = req.params.id;
  var id =-1;
  
  todos.forEach(function(todo,index){
    if ( todo.id.toString() === idTodo){
      id = index;
    }
  });
  
  // encontro el elemento a eliminar
  if (id!==-1){
    todos.splice(id,1);
    res.send('Se ha BORRADO correctamente');
  }
  else
    res.status(404).send('Not Found - al eliminar');
});


var server = app.listen(3000, function () {
  console.log('Server listening on port: ', server.address().port);
});