/*
  El ejercicio consiste en implementar la función utils.toProperCase
  y la functión utils.wordsToProperCase

  Hay que buscar y completar las etiquetas que digan #TODO!

  Luego de hacer pasar las pruebas, pueden intentar hacer un refactor
  aplicando un enfoque funcional. Para ello desarrollar la función
  utils.wordsToProperCase2 sin utiliza bucles como for y while, y en lugar
  de ellos usar las funciones split, map y join.
*/

var utils = {

  /**
  * Retorna una palabra con la primera letra en mayúscula y el resto en minúsculas
  *
  * @param {string} palabra - La palabra a pasar a proper case
  * @returns {string} Retorna la palabra convertida a proper case
  *
  * @example
  * utils.toProperCase('juan')           // retorna 'Juan'
  * utils.toProperCase(234)              // retorna ''
  */

  toProperCase: function(palabra) {
    // #TODO!
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
    // #TODO!!!
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
