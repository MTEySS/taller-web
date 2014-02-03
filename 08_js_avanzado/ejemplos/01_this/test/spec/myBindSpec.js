describe("myBind", function() {

  var realThis = {
    name: 'john',
    surname: 'smith',
    saluda: function(pre, post) {
      pre = pre || 'Hello';
      post = post || '!';
      return pre + ' ' + this.name + ' ' + this.surname + post;
    }
  };

  var saludaFunction = realThis.saluda;

  var fakeThis = {
    name: 'jim',
    surname: 'morrison'
  };

  it("should be able to bind the corrext context", function() {

    var binded = myBind(saludaFunction, realThis);
    expect(binded()).toEqual(realThis.saluda());

  });

  it("should be able to bind a different context", function() {

    var binded = myBind(saludaFunction, fakeThis);
    expect(binded()).toEqual('Hello jim morrison!');

  });

  it("should handle parameters", function() {

    var binded = myBind(saludaFunction, realThis);
    expect(binded('Good morning', '...')).toEqual(realThis.saluda('Good morning', '...'));

  });

  it("should behave just like javascript's bind function", function() {

    var binded = myBind(saludaFunction, realThis);
    var jsBinded = saludaFunction.bind(realThis);
    expect(binded('Good morning', '...')).toEqual(jsBinded('Good morning', '...'));

  });

});
