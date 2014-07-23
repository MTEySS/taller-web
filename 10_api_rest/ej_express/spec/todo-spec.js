

describe('Testing Todo Endpoint Webserice',function(){
  
  var request = require('request');
  
  jasmine.getEnv().defaultTimeoutInterval = 500;

  it('should get all todo list',function(done){
    request('http://localhost:300/api/todo',function(error,response,body){
      
      
      
      done();
    });
  });

});