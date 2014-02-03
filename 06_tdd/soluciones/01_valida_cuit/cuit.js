var cuit = {

  /**
  * Valida un Cuit aplicando el algoritmo del dígito verificador
  *
  * @param {string|number} cuit - El cuit a validar
  * @returns {boolean} cuit - Retorna verdadero si el cuit es válido
  *
  * El cuit a validar puede ser un número de 11 dígitos,
  * o un string con alguno de los siguientes formatos:
  * 12345678901 o también 12-12345678-1
  *
  * Para más información acerca del algoritmo ver:
  * {@link http://www.taringa.net/posts/apuntes-y-monografias/2766561/Algoritmo-C-U-I-T-C-U-I-L-Argentino.html}
  *
  * @example
  * cuit.esValido(20249632059)           // retorna true
  * cuit.esValido('20249632059')         // retorna true
  * cuit.esValido('20-24963205-9')       // retorna true
  * cuit.esValido('2-024963205-9')       // retorna false (mal el formato)
  * cuit.esValido('99999999999')         // retorna false
  *
  */

  esValido: function (cuit) {

    if (!cuit) return false;

    var multiplicadores = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];

    cuit = cuit.toString().trim();

    // valido cuit
    // sólo acepto: 12345678901 o 12-34567890-1
    var regExp = /^\d{11}$|^\d{2}-\d{8}-\d$/;
    if (!regExp.test(cuit)) return false;

    // elimino los guiones
    cuit = cuit.replace(/-/gi, '');

    var acum = 0;

    for (var i = 0, end = cuit.length-1; i < end; i++) {
      acum += parseInt(cuit.charAt(i)) * multiplicadores[i];
    }

    var calculado = 11 - (acum % 11);

    if (calculado === 11) calculado = 0;
    else if (calculado === 10) calculado = 9;

    var verificador = parseInt(cuit.charAt(cuit.length-1));

    return (verificador === calculado);
  }
}
