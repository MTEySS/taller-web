# TDD - Test Driven Development

#TODO

## Ejercicios

### 01_valida_cuit (ejercicios/01_valida_cuit)

El ejercicio consta de una pantalla de alta de usuario ficticia (valida_cuit.html), en la cual se valida el CUIT ingresado. Para verificar que el cuit es correcto, se usa la función cuit.esValido que implementar el algoritmo de verificación. Inicialmente la función simplemente retorna verdadero si el cuit es 1.

El ejercicio consiste en:

1. Desarrollar las correspondiente pruebas unitarias de jasmine en test/spec/cuit_esValidoSpec.js para verificar que la función cuit.esValido funciona correctamente.

2. Implementar correctamente la función cuit.esValido en cuit.js.

Luego de realizar esto, valida_cuit.html debería validar correctamente el cuit y las pruebas de test/SpecRunner.html deberían pasar sin errores.

La solución del ejercicio está en soluciones/01_valida_cuit. Una vez que hayas desarrollador tu propia implemenación de cuit.esValido podés ponerla a prueba agregando los tests de soluciones/01_valida_cuit/test/spec/cuit_esValidoSpec.js

En cada uno de los archivos a completar hay más instrucciones y algunas ayudas para poder resolverlos.

### 02_properCase (ejercicios/02_properCase)

En ejercicios/02_properCase/utils.js hay una función utils.toProperCase que toma una palabra y la retorna con la primera letra en mayúscula y las demás en minúsculas. En ejercicios/02_properCase/test/spec/utils_toProperCaseSpec.js hay una serie de pruebas unitarias que verifican esta funcionalidad.

El ejercicio consiste en desarrollar la función utils.wordsToProperCase de manera tal que reciba una oración con varias palabras y retorne una oración donde cada palabra tiene su primera letra en mayúscula y las demás en minúsculas.

Para ello habrá que:

1. Desarrollar las correspondiente pruebas unitarias de jasmine en test/spec/utils_wordsToProperCaseSpec.js para verificar que la función cuit.esValido funciona correctamente.

2. Implementar correctamente la función utils.wordsToProperCase en utils.js.

3. Luego de hacer pasar las pruebas unitarias, vamos a hacer un refactor de la función para hacerla con programación funcional (evitaremos actualizar una variable en el bucle for).

Nota: todavía no vimos la parte de programación funcional, así que no hay problema si esperan al siguiente encuentro.

