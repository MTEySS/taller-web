# Javascript básico

## Herramientas necesarias

* google chrome

* firefox

* node

## Igualdad y verdad

En JavaScript hay dos maneras de comparar objetos. Una es estricta, usando el operador ===, y que se comporta como lo esperaríamos, y otra más laxa, que utiliza el operador ==, y es la que se utiliza también en la sentencia if y el operador ternario.

Valores que son interpretados como falso:

false, null, undefined, 0, '', NaN

Cualquier otro valor es interpretado como verdadero.

Consejo: para evitar utilizar siempre el operador ===

Ejemplo:

```javascript
function alCuadrado(valor) {
  if (!value) throw new Error('valor no puede estar vacío');
  return valor * valor
};
```

Si pasamos el valor 0, que es un valor válido, nos va a tirar un error. Podemos arreglar la función de esta manera:

## Scope y asignación

## Control structures

Las típicas, if, for, switch

Algunas nuevas: [forEach](https://developer.mozilla.org/es/docs/Referencia_de_JavaScript_1.5/Objetos_globales/Array/forEach)

Para recorrer las propiedades de un objeto:

```javascript
var o = {
  nombre: 'juan',
  apellido: 'perez'
};

var o2 = Object.create(o);
o2.edad = 23;

for (property in o2) {
  console.log(property);
}
edad
nombre
apellido

for (property in o2) {
  if (o2.hasOwnProperty) {
    console.log(property);
  }
}
edad
```

## Strings (cadenas de texto)

Las cadenas de texto soportan comillas simples y dobles. Escapamos los caracteres usando el caracter '\' (como en C).

```javascript
var s1 = 'hola, acá viene una "comilla" doble';
var s2 = "hola, acá viene una \"comilla\" doble";

s1 === s2       // true
```

## Numbers

```javascript
var a = 1/0;      // Infinity

a === Infinity   // true

var b = 1/'x'    // NaN

b === NaN        // false... mmmm

NaN === NaN      // false.... WHAT?

isNaN(b)         // true
```

## Objects

Notación literal de objetos:

```javascript
var o = {
  nombre: 'juan',
  apelldo: 'perez',
  saluda: function() {
    return 'Hola, yo soy ' + this.nombre;
  }
};

o.nombre === o['nombre']      // true

o.saluda        // function...
o.saluda()      // "Hola, yo soy juan"
```

## Arrays

Notación literal de arrays:

```javascript
var a = [1, 2, 3];

typeof(a);          // 'object'... los arrays son Objetos!
a.length            // 3
a.join('..')        // '1..2..3'   los arrays tienen métodos
a.reverse()         // [3, 2, 1]   ¡Atención, algunos métodos son destructivos!
a                   // [3, 2, 1]
a.reverse()         // lo dejamos como estaba antes
a.push(4)           // push y pop ponen y sacan del final del array, como una pila
a                   // [1, 2, 3, 4]
a.pop()             // 4
a                   // [1, 2, 3]
a.unshift(0)        // inserta un elemento al principio
a                   // [0, 1, 2, 3]
a.shift()           // 0
a                   // [1, 2, 3]  shift lo saca del principio
```

## Regular expressions

## Functions

En JavaScript cada función genera un nuevo contexto de ejecución. Esto quiere decir que cualquier variable y función definida en una función sólo pueden ser accedidas desde ese contexto, pero no fuera de él. Es por eso que crear una función es una manera de crear privacidad para esas variables.

Las variables tienen un scope (alcance) definido por las funciones.

```javascript
var var1 = 'outer';
var var2 = 'outer';

var f1 = function() {
  var var1 = 'inner';         // tapa a var1 = 'outer'

  var f11 = function() {
    var var1 = 'inner inner';
    console.log( 'el valor de var1 en f11 es :' + var1);
    console.log( 'el valor de var2 en f11 es :' + var2);
  };

  f11();
  console.log( 'el valor de var1 en f1 es :' + var1);
}

var f2 = function() {
  console.log( 'el valor de var1 en f2 es :' + var1);
}

f1();
f2();

console.log('el valor de var1 afuera de todo es: ' + var1);
// --

el valor de var1 en f11 es :inner inner
el valor de var2 en f11 es :outer
el valor de var1 en f1 es :inner
el valor de var1 en f2 es :outer
el valor de var1 afuera de todo es: outer
```

Por esta razón es común que se usen funciones para definir un nuevo scope y evitar pisar variables ya existentes.

Un ejemplo de clousure:

```javascript
var crearContador = function() {
  var contadorInterno = 0;
  return function sumarContador(valor) {
    valor = valor || 1;
    contadorInterno += valor;
    return contadorInterno
  };
};

var contador = crearContador();

contador();     // 1
contador();     // 2
contador(3);    // 5
```

La función contador() mantiene un referencia a contadorInterno, eso es parte de su contexto de ejecución. contadorInterno no es accesible de ningún otro lado, más que desde la función contador().

```javascript
var contador2 = crearContador()

contador2()  // 1
contador()   // 6
```

#TODO!!!

arguments
apply y call

Más información acerca de [Immediately invoked function expressions](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)

## Ejercicios

### 01_koans (ejercicios/01_koans)

Los koans son series de pruebas unitarias preparadas con fines didácticos. Básicamente, nos encontramos con una cantidad de pruebas que fallan, y a medida que nosotros vamos escribiendo funciones que las hagan pasar, vamos aprendiendo el lenguaje.

El ejercicio consiste en:

1. Abrir en un explorador el archivo ejercicios/01_koans/jskoans.js, allí nos encontraremos con una serie de pruebas unitarias que están fallando. Por ejemplo, la primera en fallar es *what will satisfy the ok assertion?* del archivo *topics/about_asserts.js*. Abrimos dicho archivo y vamos completando el texto **__** con las expresiones necesarias para hacer que el test se cumpla.

De esta manera vamos completando todas las pruebas hasta que no haya ninguna que falle.

Podés pegarle una mirada a la solución a estos koans está en soluciones/01_koans/topics.


## Recursos:

http://www.verious.com/tutorial/java-script-koans/

https://github.com/mrdavidlaing/javascript-koans

http://blog.bittersweetryan.com/2011/08/learn-some-javascript-completely-on.html

https://github.com/liammclennan/JavaScript-Koans

https://github.com/liammclennan/coffeescript-koans

http://www.lauradhamilton.com/learn-a-new-programming-language-today-with-koans
