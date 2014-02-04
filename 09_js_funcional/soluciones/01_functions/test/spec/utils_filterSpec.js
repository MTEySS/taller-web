describe('utils.filter', function() {

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
    return this.multiplicar(item) >= 6;
  };

  var valores = [1, 2, 3];
  var resultados;

  it('debería evaluar la función en el contexto adecuado', function() {

    resultados = utils.filter(valores, iterator, contexto_x2);
    expect(resultados).toEqual([3]);

    resultados = utils.filter(valores, iterator, contexto_x3);
    expect(resultados).toEqual([2, 3]);
  });

  it('debería usar "window" si no se especifica el contexto', function() {

    window.multiplicar = function(item) {
      return item * 10;
    };

    resultados = utils.filter(valores, iterator);
    expect(resultados).toEqual([1, 2, 3]);
  });

  it('debería pasar como parámetro el valor, el indice y todo el array', function() {

    var iterator = function(value, index, array) {
      return value === 2 && index === 1 && array.length === 3;
    };

    resultados = utils.filter(valores, iterator);

    expect(resultados).toEqual([2]);
  });

  it('debería tirar un error si no recibe un array como primer parametro', function() {
    var arrayError = new Error('array should be an array');
    expect(function() { utils.filter('not_an_array', iterator); }).toThrow(arrayError);
    expect(function() { utils.filter([1,2,3], iterator); }).not.toThrow();
  });

  it('debería tirar un error si no recibe una función como segundo parámetro', function() {
    var iteratorError = new Error('iterator should be a function');
    expect(function() { utils.filter([1,2,3], 'not_a_function'); }).toThrow(iteratorError);
    expect(function() { utils.filter([1,2,3], iterator); }).not.toThrow();
  });

});
