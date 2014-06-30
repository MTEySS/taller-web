describe('utils.toProperCase', function() {

  it('debería retornar una palabra con la primera letra en mayúscula y las demás en minúsculas', function() {
    var resultado = [
      { value: 'sebastian', expected: 'Sebastian' },
      { value: 'ARIEL', expected: 'Ariel' },
      { value: ' pablo  ', expected: 'Pablo' }
    ]
    resultado.forEach(function(item) {
      expect(utils.toProperCase(item.value)).toEqual(item.expected);
    });
  });

  it('deberia retornar una palabra vacía si la palabra es vacía', function() {
    expect(utils.toProperCase('')).toEqual('');
  });

  it('deberia funcionar si la palabra tiene un sólo caracter', function() {
    expect(utils.toProperCase('a')).toEqual('A');
  });

  it('debería retornar una palabra vacía si la palabra pasada no es un string', function() {
    var valores = [
      null, 12, -34, undefined, true, false
    ]
    valores.forEach(function(valor) {
      expect(utils.toProperCase(valor)).toBe('');
    });
  });

});
