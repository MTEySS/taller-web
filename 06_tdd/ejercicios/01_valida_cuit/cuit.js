/*
  El ejercicio consiste en implementar la función cuit.esValido
  para que valida un cuit controlando el dígito verificador

  Hay que buscar y completar las etiquetas que digan #TODO!
*/

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

  /*
  Algunos consejos para completar el ejercicio:

  Inicialmente la funcion cuit.esValido retorna verdadero si cuit es igual a 1.

  El ejercicio consiste en desarrollar las correspondientes pruebas unitarias en

  implementar correctamente el algoritmo de verificación de CUIT.

  El algoritmo es el siguiente:

  - el último digito es el dígito verificador
  - cada uno de los 10 primeros dígitos se multiplican
    por 5, 4, 3, 2, 7, 6, 5, 4, 3, 2
  - y se guarda su suma en la variable 'acum' (los nombres de las variables
    son orientativos)
  - se guarda el resto de dividir acum por 11 (función módulo) en la variable
    'resto'
  - se calcula 11 menos 'resto' y se la guarda en la variable 'calculado'
  - si 'calculado' es 11 el dígito verificador debe ser 0
  - si 'calculado' es 10 el dígito verificador debe ser 9
  - en cualquier otro caso el dígito veriicador debe ser igual a 'calculado'

  Estas funciones serán de utilidad para resolver el ejercicio:

  Object.toString: https://developer.mozilla.org/es/docs/Referencia_de_JavaScript_1.5/Objetos_globales/Object/toString

  RegExp.test: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
    Útil para validar el formato del cuit, si bien también puede resolverse usando operaciones de cadenas.

  String.replace: https://developer.mozilla.org/es/docs/Referencia_de_JavaScript_1.5/Objetos_globales/String/replace
    Útil para validar eliminar los guiones del cuit, si bien también puede resolverse usando operaciones de cadenas.

  String.length: https://developer.mozilla.org/es/docs/Referencia_de_JavaScript_1.5/Objetos_globales/String/length

  String.charAt: https://developer.mozilla.org/es/docs/Referencia_de_JavaScript_1.5/Objetos_globales/String/charAt

  for: https://developer.mozilla.org/es/docs/Referencia_de_JavaScript_1.5/Sentencias/for
    Útil para calcular el acumulado de los multiplicadores

  operador módulo: https://developer.mozilla.org/es/docs/Referencia_de_JavaScript_1.5/Operadores/Aritm%C3%A9ticos#.C2.A0.25_%28modular%29_
    Para calcular el resto

  parseInt: https://developer.mozilla.org/es/docs/Gu%C3%ADa_JavaScript_1.5/Funciones_predefinidas/Funciones_parseInt_y_parseFloat
  */

  esValido: function (cuit) {

    // #TODO -> implementar esta función

    // inicialmente retorna verdadero únicamente si cuit es igual a 1
    // arreglar esto!!!
    return cuit.toString().trim() === '1';

  }
}
