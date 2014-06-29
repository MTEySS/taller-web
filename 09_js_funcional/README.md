# Programación funcional con Javascript

#TODO - Principios de programación funcional

#TODO - Introducción underscore y lodash

#TODO - Higher order functions

#Clousures

En JavaScript cada función es creada como una [clausura o clousure](https://en.wikipedia.org/wiki/Closure_%28computer_science%29), esto significa que la función retiene el valor de su contexto de ejecución.

Más precisamente una clausura es una función o referencia a una función que mantiene un contexto de referencia (una tabla que almacena una referencia a cada variable que no es local a la función, pero que es visible dentro al misma). Un clousure, a diferencia de un mero puntero a función, permite que la función pueda acceder a esas variables no locales aún cuando sea invocada en un contexto donde estas variables no sean visibles.

Esto quedará más claro con un ejemplo:

```javascript

var contexto = function() {
  var privada = 'Esta es una variable privada';
  var clousure = function() {
    alert(privada);                 // privada es visible en este contexto
  };
  return clousure;    // clousure mantiene una referencia a privada
};

var c1 = contexto();  // c1 es un clousure que mantiene una referencia a privada
var c2 = function() {
  alert(privada);     // privada no está definida en este contexto
};

c1();    // aparece una ventana mostrando: 'Esta es una variable privada'
c2();    // ReferenceError: privada is not defined
```

La variable `privada` no es una variable local de la función `clousure` pero es visible dentro de ella, por lo que decimos que pertenece a su contexto de referencia.

Cuando la función `contexto` es ejecutada retorna la función `clousure`, la cual mantiene la referencia a la variable `privada`, por más que la misma ya no sea visible fuera de la función `contexto`.

Por el contrario, la función `c2`, que en principio parecería idéntica a la función `c1`, varía en su contexto de referencia, ya que donde fue definida la varaible `privada` no existe.

Para otros ejemplos y usos más avanzados ver [este artículo](https://developer.mozilla.org/es/docs/JavaScript/Guide/Closures) en mozilla developer network.

Ejemplo de error muy común con clousures y hoisted variables: [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures#Creating_closures_in_loops.3A_A_common_mistake)

#TODO - Varaible hoisting

#Clousures

http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting
http://jamesallardice.com/explaining-function-and-variable-hoisting-in-javascript/


## Ejercicios

### 09_functions (ejercicios/09_functions)

El ejercicio consistirá en implementar varias funciones bastante conocidas en el mundo de la programación funcional y refactorizar otras para mejorar su rendimiento. Varias de estas funciones vienen provistas por la librería [underscore](http://underscorejs.org), por lo que podés mirar su documentación si tenés alguna duda.

En test/spec hay una batería de pruebas que podés correr y que te servirán para probar las funciones que vayas a implementar y para verificar que no rompas nada luego de hacer el refactor. Para ejecutar las pruebas abrí test/SpecRunner.html en un explorador.

En todos los casos hay que buscar los comentarios con '#TODO!' y efectuar los cambios necesarios.

Estas son las funciones a desarrollar y refactorizar:

1. **utils.isArray(value)** retorna verdadero si el objeto pasado como parámetro es un array. (ver [aquí](http://stackoverflow.com/a/4775737/47633)) (esta función ya está implementada)

2. **utils.each(array, iterator, [context])** (esta función ya está implementada) (ver la documentación de [underscore](http://underscorejs.org/#each))

3. **utils.map(array, iterator, [context])** (ver la documentación de [underscore](http://underscorejs.org/#map))

Consejo: utilizar utils.each

4. **utils.filter(array, iterator, [context])** (ver la documentación de [underscore](http://underscorejs.org/#filter))

Consejo: utilizar utils.each. Es muy similar a map, sólo que agregaremos el elemento actual al array de retorno sólo si la evaluación de iterator nos dio true.

5. **utils.find(array, iterator, [context])** (ver la documentación de [underscore](http://underscorejs.org/#find))

Esta función ya se encuentra implementada, peo utilizar el método filter, es decir que recorre todo el array. El ejercicio en este caso consiste en hacer un *refactor* del código para retornar un valor apenas encontramos un elemento para el cual iterator retorne true, es decir, evitamos recorrer todo el array si no es necesario. Luego de refactorizar la función, todas las pruebas unitarias deben seguir funcionando.

*Consejo: tomar como modelo la función utils.each*

6. **utils.any(array, iterator, [context])**

Esta función retorna true si existe ALGÚN elemento en el array para el cual iterator retorna true.

Al igual que el caso anterior, esta función ya está implementada utilizando el método filter.

El ejercicio consiste en hacer un refactor para evitar recorrer todo el array.

*Consejo: utilizar utils.find*

7. **utils.all(array, iterator, [context])**

Esta función retorna true si existe ALGÚN elemento en el array para el cual iterator retorna true.

Al igual que el caso anterior, esta función ya está implementada utilizando el método filter.

El ejercicio consiste en hacer un refactor para evitar recorrer todo el array.

Consejo: utilizar utils.find, sin embargo este caso no es tan simple como el anterior. Decir que TODOS los elementos cumplen una condición, es lo mismo que decir que no hay NINGUNO que NO la cumpla. Es decir, que hay que buscar un elemento para el cual la condición negada sea cierta. Para negar iterator, hay que crear una nueva función que a su vez llame a la función iterator.
