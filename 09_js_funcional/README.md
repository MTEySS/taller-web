# Programación funcional cno Javascript

#TODO

## Ejercicios

### 09_functions (ejercicios/09_functions)

El ejercicio consistirá en implementar varias funciones bastante conocidas en el mundo de la programación funcional y refactorizar otas para mejorar su rendimiento. Varias de estas funciones vienen provistas por la librería [underscore](http://underscorejs.org), por lo que podés mirar su documentación si tenés alguna duda.

En test/spec hay una batería de pruebas que podés correr y que te servirán para probar las funciones que vayas a implementar y para verificar que no rompas nada luego de hacer el refactor. Para ejecutar las pruebas abrí test/SpecRunner.html en un explorador.

En todos los cass hay que buscar los comentarios con '#TODO!' y efectuar los cambios necesarios.

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
