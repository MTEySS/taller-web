
var global = window;

var utils = {

  /**
  * Retorna verdadero si la variable pasada como parámetro es un array
  *
  * @param {*} value - El valor a verificar si es un array
  * @returns {Boolean} Retorna si efectivamente se trata de un array
  *
  * @example
  * utils.isArray([1, 2, 3])            // retorna true
  * utils.isArray(123)                  // retorna false
  *
  * @see http://stackoverflow.com/a/4775737/47633
  */
  isArray: function(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
  },

  /**
  * Itera sobre un array de elementos, ejecutando para cada uno de ellos
  * la función iterator pasándole como parámetro el elemento.
  *
  * Si se especifica context, la función iterator estará ligada (bound)
  * a ese contexto, sino tendra el objeto window como contexto.
  *
  * Cada invocación a la función iterator recibirá tres argumentos:
  * (elemento, indice, array)
  *
  * @param {Array} array - Array a iterar
  * @param {Function} iterator - Función a ejecutar para cada elemento de array
  * @param {Object} [iterator=window] - iterator estará ligado a context
  * @returns {undefined} La función no retorna ningún valor
  *
  * @example
  *
  * // imprime 1, 2 y 3 por consola y retorna undefined
  * var res = [];
  * utils.each([1,2,3], function(item) { res.push(item*3) }); // retorna undefined
  * // res -> [3, 6, 9]
  */
  each: function(array, iterator, context) {
    if (!utils.isArray(array)) throw new Error('array should be an array');
    if (typeof(iterator) !== 'function') throw new Error('iterator should be a function');

    context = context || global;

    for (var i=0, end=array.length; i < end; i++) {
      iterator.call(context, array[i], i, array);
    }
  },

  /**
  * Produce un nuevo array de valores con el resultado de ejecutar
  * la función iterator para cada elemento.
  *
  * Si se especifica context, la función iterator estará ligada (bound)
  * a ese contexto, sino tendra el objeto window como contexto.
  *
  * Cada invocación a la función iterator recibirá tres argumentos:
  * (elemento, indice, array)
  *
  * @param {Array} array - Array a iterar
  * @param {Function} iterator - Función a ejecutar para cada elemento de array
  * @param {Object} [iterator=window] - iterator estará ligado a context
  * @returns {Array.<*>} Retorna el array con los resultados de iterator
  *
  * @example
  *
  * utils.map([1,2,3], function(item) { return item * 2 })  // retorna [2, 4, 6]
  */
  map: function(array, iterator, context) {
    // #TODO!!!
    // consejo: usar utils.each
  },

  /**
  * Recorre cada elemento del array, retornando un array con todos los
  * elementos para los cuales la función iterator retorna true.
  *
  * Si se especifica context, la función iterator estará ligada (bound)
  * a ese contexto, sino tendra el objeto window como contexto.
  *
  * Cada invocación a la función iterator recibirá tres argumentos:
  * (elemento, indice, array)
  *
  * @param {Array} array - Array a iterar
  * @param {Function} iterator - Función a ejecutar para cada elemento de array
  * @param {Object} [iterator=window] - iterator estará ligado a context
  * @returns {Array.<*>} Retorna el array con los elementos para los cuales
  *                      iterator retornó true
  *
  * @example
  *
  * // filtramos únicamente los elementos pares
  * utils.filter([1,2,3,4], function(item) { return item % 2 === 0 })
  * // retorna [2, 4]
  */
  filter: function(array, iterator, context) {
    // #TODO!!!
    // consejo: utilizar utils.each
  },

  /**
  * Recorre cada elemento del array, retornando el primer elemento
  * para el cual la función iterator retorna true. Si ningún elemento
  * cumple con esa condición, la función retona undefined.
  *
  * Si se especifica context, la función iterator estará ligada (bound)
  * a ese contexto, sino tendra el objeto window como contexto.
  *
  * Cada invocación a la función iterator recibirá tres argumentos:
  * (elemento, indice, array)
  *
  * @param {Array} array - Array a iterar
  * @param {Function} iterator - Función a ejecutar para cada elemento de array
  * @param {Object} [iterator=window] - iterator estará ligado a context
  * @returns {Array.<*>} Retorna el array con los elementos para los cuales
  *                      iterator retornó true
  *
  * @example
  *
  * // buscamos el primer elemento par
  * utils.filter([1,2,3,4], function(item) { return item % 2 === 0 })
  * // retorna 2
  *
  * // buscamos el primer elemento múltiplo de 5
  * utils.filter([1,2,3,4], function(item) { return item % 5 === 0 })
  * // retorna undefined
  */

  // la versión más simple, usamos filter y retornamos el primer elemento
  find: function(array, iterator, context) {

    // #TODO: hacer un refactor de esta función para evitar recorrer todo el array
    // tip: usar utils.each como modelo

    // esta es la versión simple, que usa filter y recorre todo el array
    /*
    var resultados = utils.filter(array, iterator, context);
    return resultados.length === 0 ? undefined : resultados[0];
    */

  },

  /**
  * Retorna true si la función iterator retorna true para ALGUN elemento
  * del array. Si no hay ninguno para el que se cumpla, retorna false.
  *
  * Si se especifica context, la función iterator estará ligada (bound)
  * a ese contexto, sino tendra el objeto window como contexto.
  *
  * Cada invocación a la función iterator recibirá tres argumentos:
  * (elemento, indice, array)
  *
  * @param {Array} array - Array a iterar
  * @param {Function} iterator - Función a ejecutar para cada elemento de array
  * @param {Object} [iterator=window] - iterator estará ligado a context
  * @returns {Array.<*>} Retorna el array con los elementos para los cuales
  *                      iterator retornó true
  *
  * @example
  *
  * // hay algún item igual a 3?
  * utils.any([1,2,3,4], function(item) { return item === 3 })
  * // retorna true
  *
  * // hay algún item igual a 5?
  * utils.any([1,2,3,4], function(item) { return item === 5 })
  * // retorna false
  */

  any: function(array, iterator, context) {

    // #TODO: hacer un refactor de esta función para evitar recorrer todo el array
    // tip: usar utils.find

    // esta es la versión simple, que usa filter y recorre todo el array
    /*
    return utils.filter(array, iterator, context).length > 0;
    */

  },

  /**
  * Retorna true si la función iterator retorna true para TODOS los elementos
  * de array. Si hay alguno para el que no se cumpla, retorna false.
  *
  * Si se especifica context, la función iterator estará ligada (bound)
  * a ese contexto, sino tendra el objeto window como contexto.
  *
  * Cada invocación a la función iterator recibirá tres argumentos:
  * (elemento, indice, array)
  *
  * @param {Array} array - Array a iterar
  * @param {Function} iterator - Función a ejecutar para cada elemento de array
  * @param {Object} [iterator=window] - iterator estará ligado a context
  * @returns {Array.<*>} Retorna el array con los elementos para los cuales
  *                      iterator retornó true
  *
  * @example
  *
  * // son todos los items menores a 5?
  * utils.all([1,2,3,4], function(item) { return item < 5 })
  * // retorna true
  *
  * // son todos los items menores a 4?
  * utils.all([1,2,3,4], function(item) { return item < 4 })
  * // retorna false
  */
  all: function(array, iterator, context) {
    return utils.filter(array, iterator, context).length === array.length;
  },

  // usando find, versión más eficiente
  all_refactored: function(array, iterator, context) {
    context = context || global;
    if (typeof(iterator) !== 'function') throw new Error('iterator should be a function');

    // #TODO: hacer un refactor de esta función para evitar recorrer todo el array
    // tip: usar utils.find, negando el iterator
    // es decir, si encuentro alguno que no cumpla, all retorna false
    // para negar iterator,
    // hay que crear una nueva funcion que a su vez llame a iterator negado
    var iteratorNegated = function(value, index, array) {
      return '#TODO!'
    }

    return utils.find(array, iteratorNegated, context) === undefined;
  },

};
