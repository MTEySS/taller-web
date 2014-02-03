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

  wordsToProperCase: function(palabras) {
    if (typeof(palabras) !== 'string') return '';

    var resultado = '';
    var palabrasArray = palabras.split(' ');

    for (var i = 0, end = palabrasArray.length; i < end; i++) {
      resultado += ' ' + utils.toProperCase(palabrasArray[i]);
    }

    return resultado.substring(1);
  },

  // versión funcional, usando map
  wordsToProperCase2: function(palabras) {
    if (typeof(palabras) !== 'string') return '';

    return palabras.split(' ').map(function(palabra) {
      return utils.toProperCase(palabra);
    }).join(' ');
  },

  // otra versión, utilizando expresiones regulares
  wordsToProperCase3: function(palabras) {
    if (typeof(palabras) !== 'string') return '';

    return palabras.replace(/\w+/g, utils.toProperCase);
  },

}
