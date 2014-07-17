/*
  El ejercicio consiste en implementar las pruebas unitarias para validar
  que la funcion utils.wordsToProperCase funciona correctamente

  Hay que buscar y completar las etiquetas que digan #TODO!
*/

describe('utils.wordsToProperCase', function() {

  it('debería retornar una oración con la primera letra de cada palabra en mayúscula y las demás en minúsculas', function() {
    var resultado = [
      { value: 'gran ejemplo, muy bueno', expected: 'Gran Ejemplo, Muy Bueno' },
      { value: '  buen   intento    ', expected: '  Buen   Intento    ' }
    ]
    resultado.forEach(function(item) {
      expect(utils.wordsToProperCase(item.value)).toEqual(item.expected);
    });
  });

  it('deberia retornar una palabra vacía si la oración es vacía', function() {
    // #TODO!!!
    expect('#TODO').toBe('#DONE');
  });

  it('deberia funcionar si la oración tiene una sola palabra', function() {
    // #TODO!!!
    expect('#TODO').toBe('#DONE');
  });

  it('deberia preservar los espacios y signos de puntuación', function() {
    // #TODO!!!
    expect('#TODO').toBe('#DONE');
  });

  /*
  debería comprobar distintos valores, como pueden ser
    - valores extraños (null, undefined, false, -1, etc...)
    - un número, un objecto, true, false
    - y los que se les ocurran
  */
  it('debería retornar una oración vacía si la oración pasada no es un string', function() {
    // #TODO!!!
    expect('#TODO').toBe('#DONE');
    expect('#TODO').toBe('#DONE');
  });

});
