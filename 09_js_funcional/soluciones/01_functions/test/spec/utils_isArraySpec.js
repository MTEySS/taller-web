describe('utils.isArray', function() {

  it('debería retornar true al recibir un array', function() {
    var valores = [
      [], [1, 2], new Array(1,2)
    ]
    valores.forEach(function(item) {
      expect(utils.isArray(item)).toBe(true);
    });
  });

  it('debería retornar falso si no recibe un array', function() {
    var valores = [
      1, '1', null, undefined, { val: 1 }
    ]
    valores.forEach(function(item) {
      expect(utils.isArray(item)).toBe(false);
    });
  });

});
