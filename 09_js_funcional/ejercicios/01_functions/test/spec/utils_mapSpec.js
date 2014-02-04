describe('utils.map', function() {

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
    return this.multiplicar(item);
  };

  var valores = [1, 2, 3];
  var resultados;

  it('debería evaluar la función en el contexto adecuado', function() {

    resultados = utils.map(valores, iterator, contexto_x2);
    expect(resultados).toEqual([2, 4, 6]);

    resultados = utils.map(valores, iterator, contexto_x3);
    expect(resultados).toEqual([3, 6, 9]);

  });

  it('debería usar "window" si no se especifica el contexto', function() {

    window.multiplicar = function(item) {
      return item * 10;
    };

    resultados = utils.map(valores, iterator);
    expect(resultados).toEqual([10, 20, 30]);

  });
  
  it('debería pasar como parámetro el valor, el indice y todo el array', function() {

    var iterator = function(value, index, array) {
      return {
        valor: value,
        indice: index,
        array: array
      };
    };

    resultados = utils.map(valores, iterator);

    expect(resultados).toEqual([
      { valor: 1, indice: 0, array: [1, 2, 3] },
      { valor: 2, indice: 1, array: [1, 2, 3] },
      { valor: 3, indice: 2, array: [1, 2, 3] }
    ]);

  });

  it('debería tirar un error si no recibe un array como primer parametro', function() {
    var arrayError = new Error('array should be an array');
    expect(function() { utils.map('not_an_array', iterator); }).toThrow(arrayError);
    expect(function() { utils.map([1,2,3], iterator); }).not.toThrow();
  });

  it('debería tirar un error si no recibe una función como segundo parámetro', function() {
    var iteratorError = new Error('iterator should be a function');
    expect(function() { utils.map([1,2,3], 'not_a_function'); }).toThrow(iteratorError);
    expect(function() { utils.map([1,2,3], iterator); }).not.toThrow();
  });

});
