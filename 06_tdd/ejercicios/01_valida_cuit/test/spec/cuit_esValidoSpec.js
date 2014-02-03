/*
  El ejercicio consiste en implementar las pruebas unitarias para validar
  que la funcion cuit.esValido funciona correctamente

  Hay que buscar y completar las etiquetas que digan #TODO!
*/

describe('cuit.esValido', function() {

  it('deberia reconocer un cuit válido', function() {
    expect(cuit.esValido('30-61954014-6')).toBe(true);
  });

  /*
    En las pruebas podemos ejecutar cualquier código JavaScript
    En este ejemplo hacemos un bucle para testear varios cuits válidos
  */
  it('deberia reconocer varios casos cuits válidos', function() {
    var validos = [
      '30-61954014-6', '30-65276194-8', '30-61580178-6', '30-56292411-2',
      '30-63380097-5', '30-67437645-2', '30-56197068-4', '20-24963205-9'
    ];
    validos.forEach(function(valido) {
      expect(cuit.esValido(valido)).toBe(true);
    });
  });

  it('deberia reconocer un cuit válido aunque no tenga guiones', function() {
    expect(cuit.esValido('#TODO!')).toBe(true);
  });

  it('deberia reconocer un cuit válido pasado como número', function() {
    expect(cuit.esValido('#TODO!')).toBe(true);
  });

  /*
  debería comprobar distintos valores, como pueden ser
    - un cuit bien formateado pero con un dígito verificador erróneo
    - un cuit pasado como número pero con un dígito verificador erróneo
    - valores extraños (null, undefined, false, -1, etc...)
    - un string que no tenga números
    - y los que se les ocurran
  */
  it('deberia reconocer un cuit no válido', function() {
    //'#TODO!';
    expect('#TODO').toBe('#DONE');
  });

  // un cuit válido pero que tiene mal ubicados los guiones
  it('deberia validar que los guiones sean los correctos', function() {
    expect(cuit.esValido('#TODO!')).toBe(false);
  });

});
