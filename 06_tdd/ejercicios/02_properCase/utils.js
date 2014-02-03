/*
  El ejercicio consiste en implementar la función words.toProperCase

  Hay que buscar y completar las etiquetas que digan #TODO!

  Luego de hacer pasar las pruebas, pueden intentar hacer un refactor y utilizar
  y evitar el bucle for, utilizando las funciones split, map y join.
*/

var utils = {

  /**
  * Retorna una palabra con la primera letra en mayúscula y el resto en minúsculas
  *
  * @param {string} palabra - La palabra a pasar a proper case
  * @returns {string} Retorna la palabra convertida a proper case
  *
  * @example
  * utils.toProperCase('juan')           // retorna 'juan'
  * utils.toProperCase(234)              // retorna ''
  */

  toProperCase: function(palabra) {
    if (typeof(palabra) !== 'string') return '';
    palabra = palabra.trim();
    return palabra.charAt(0).toUpperCase() + palabra.substring(1).toLowerCase();
  },

  /**
  * Retorna una oración en la que la primera letra de cada palabra está en
  * mayúscula y el resto en minúsculas
  *
  * @param {string} palabras - La oración a pasar a proper case
  * @returns {string} Retorna la oración con cada palabra convertida a proper case
  *
  * @example
  * utils.wordsToProperCase('buen día, país') // retorna 'Buen Día, País'
  * utils.wordsToProperCase(234)              // retorna ''
  */

  /*
    Algunas funciones que resultarán útiles

    Array.split: https://developer.mozilla.org/es/docs/Referencia_de_JavaScript_1.5/Objetos_globales/String/split
  */

  wordsToProperCase: function(palabras) {
    if (typeof(palabras) !== 'string') return '';

    // #TODO!!!

    var resultado = '';
    var palabrasArray = palabras.split(' ');

    for (var i = 0, end = palabrasArray.length; i < end; i++) {
      resultado += ' ' + utils.toProperCase(palabrasArray[i]);
    }

    return resultado.substring(1);
  },

  /*
    Versión funcional: nueva versión evitando usar el bucle for

    Algunas funciones que resultarán útiles

    Array.split: https://developer.mozilla.org/es/docs/Referencia_de_JavaScript_1.5/Objetos_globales/String/split

    Array.map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

    Array.join: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  */

  // versión funcional, usando map
  wordsToProperCase2: function(palabras) {
    if (typeof(palabras) !== 'string') return '';

    // no vale usar ningún bucle,
    // con split, map y join debería alcanzarte

    // #TODO!!!
  }

}
