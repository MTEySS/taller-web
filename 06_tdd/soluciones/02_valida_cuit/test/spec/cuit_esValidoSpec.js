describe('cuit.esValido', function() {

  it('deberia reconocer un cuit válido', function() {
    var validos = [
      '30-61954014-6', '30-65276194-8', '30-61580178-6', '30-56292411-2',
      '30-63380097-5', '30-67437645-2', '30-56197068-4', '20-24963205-9'
    ];
    validos.forEach(function(valido) {
      expect(cuit.esValido(valido)).toBe(true);
    });
  });

  it('deberia reconocer un cuit válido aunque no tenga guiones', function() {
    expect(cuit.esValido('20249632059')).toBe(true);
  });

  it('deberia reconocer un cuit válido pasado como número', function() {
    expect(cuit.esValido(20249632059)).toBe(true);
  });

  it('deberia reconocer un cuit no válido', function() {
    var errones = [
      '20-24963205-8',
      20249632058,
      null, undefined, false, true, 0, -1, NaN,
      'string'
    ]
    errones.forEach(function(erroneo) {
      expect(cuit.esValido(erroneo)).toBe(false);
    });

  });

  it('deberia validar que los guiones sean los correctos', function() {
    expect(cuit.esValido('2-024963205-9')).toBe(false);
  });

});
