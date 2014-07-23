var simpleModule = require('../simpleModule');

describe('Multiplication',function(){
  it('should multiply 2 and 3',function(){
    var product = simpleModule.multiply(2,3);
    
    expect(product).toBe(6);
  });

  
    it('should multiply 3 and 5',function(){
    var product = simpleModule.multiply(3,5);
    
    expect(product).toBe(15);
  });

  
});


describe('Spliting text',function(){
  
  it('sould return R in string "This is a simple test"',function(){
    var textStr = "drink";
    var value = simpleModule.splitValue(textStr,'',1);
    
    expect(value).toBe('r');
  });
  


});

