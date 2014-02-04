describe('utils.all', function() {

  var contexto_x2 = { 
    multiplicar: function(item) {
      return item * 2;
    }
  };

  var contexto_x3 = { 
    multiplicar: function(item) {
      return item * 3;
    }
  };

  var iterator = function(item) {
    return this.multiplicar(item) >= 3;
  };

  var valores = [1, 2, 3];
  var resultados;

  it('debería evaluar la función en el contexto adecuado', function() {
    expect(utils.all(valores, iterator, contexto_x2)).toBe(false);
    expect(utils.all(valores, iterator, contexto_x3)).toBe(true);
  });

  it('debería retornar true si todos los elementos coinciden', function() {
    var iterator = function(item) { return item !== 4 };
    expect(utils.all(valores, iterator)).toBe(true);
  });

  it('debería retornar false si algún los elemento no coincide', function() {
    var iterator = function(item) { return item === 1 };
    expect(utils.all(valores, iterator)).toBe(false);
  });

  it('debería usar "window" si no se especifica el contexto', function() {

    window.multiplicar = function(item) { return item * 10; };
    expect(utils.all(valores, iterator)).toBe(true);

    window.multiplicar = function(item) { return item * 1; };
    expect(utils.all(valores, iterator)).toBe(false);

  });

  it('debería pasar como parámetro el valor, el indice y todo el array', function() {

    var iterator = function(value, index, array) {
      return value <= 3 && index <= 2 && array.length === 3;
    };

    expect(utils.all(valores, iterator)).toBe(true);
  });

  it('debería tirar un error si no recibe un array como primer parametro', function() {
    var arrayError = new Error('array should be an array');
    expect(function() { utils.all('not_an_array', iterator); }).toThrow(arrayError);
    expect(function() { utils.all([1,2,3], iterator); }).not.toThrow();
  });

  it('debería tirar un error si no recibe una función como segundo parámetro', function() {
    var iteratorError = new Error('iterator should be a function');
    expect(function() { utils.all([1,2,3], 'not_a_function'); }).toThrow(iteratorError);
    expect(function() { utils.all([1,2,3], iterator); }).not.toThrow();
  });

});
