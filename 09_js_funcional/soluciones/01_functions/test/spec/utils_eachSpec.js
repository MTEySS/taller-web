describe('utils.each', function() {

  var contexto1 = { nombre: 'contexto1' };

  var resultados = []
  var valores = [1, 2, 3];
  var iterator = function(value) {
    resultados.push({
      contexto: this.nombre,
      valor: value
    });
  };

  beforeEach(function() {
    resultados = [];
  });

  it('debería evaluar la función en el contexto adecuado', function() {

    utils.each(valores, iterator, contexto1);

    expect(resultados).toEqual([
      { contexto: 'contexto1', valor: 1 },
      { contexto: 'contexto1', valor: 2 },
      { contexto: 'contexto1', valor: 3 }
    ]);

  });

  it('debería usar "window" si no se especifica el contexto', function() {

    window.nombre = 'contexto window';

    utils.each(valores, iterator);

    expect(resultados).toEqual([
      { contexto: 'contexto window', valor: 1 },
      { contexto: 'contexto window', valor: 2 },
      { contexto: 'contexto window', valor: 3 }
    ]);

  });

  it('debería pasar como parámetro el valor, el indice y todo el array', function() {

    var iterator = function(value, index, array) {
      resultados.push({
        valor: value,
        indice: index,
        array: array
      });
    };

    utils.each(valores, iterator);

    expect(resultados).toEqual([
      { valor: 1, indice: 0, array: [1, 2, 3] },
      { valor: 2, indice: 1, array: [1, 2, 3] },
      { valor: 3, indice: 2, array: [1, 2, 3] }
    ]);

  });

  it('debería tirar un error si no recibe un array como primer parametro', function() {
    var arrayError = new Error('array should be an array');
    expect(function() { utils.each('not_an_array', iterator); }).toThrow(arrayError);
    expect(function() { utils.each([1,2,3], iterator); }).not.toThrow();
  });

  it('debería tirar un error si no recibe una función como segundo parámetro', function() {
    var iteratorError = new Error('iterator should be a function');
    expect(function() { utils.each([1,2,3], 'not_a_function'); }).toThrow(iteratorError);
    expect(function() { utils.each([1,2,3], iterator); }).not.toThrow();
  });


});
