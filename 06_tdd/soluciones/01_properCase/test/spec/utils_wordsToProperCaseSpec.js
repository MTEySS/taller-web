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
    expect(utils.wordsToProperCase('')).toEqual('');
  });

  it('deberia funcionar si la oración tiene una sola palabra', function() {
    expect(utils.wordsToProperCase('amigo')).toEqual('Amigo');
  });

  it('deberia preservar los espacios y signos de puntuación', function() {
    expect(utils.wordsToProperCase('  , a ver! si  todo  esto functiona'))
      .toEqual('  , A Ver! Si  Todo  Esto Functiona');
  });

  /*
  debería comprobar distintos valores, como pueden ser
    - valores extraños (null, undefined, false, -1, etc...)
    - un número, un objecto, true, false
    - y los que se les ocurran
  */

  it('debería retornar una oración vacía si la oración pasada no es un string', function() {
    var valores = [
      null, 12, -34, undefined, true, false, { id: 0 }, [1, 2, 3]
    ]
    valores.forEach(function(valor) {
      expect(utils.wordsToProperCase(valor)).toBe('');
    });
  });

});
