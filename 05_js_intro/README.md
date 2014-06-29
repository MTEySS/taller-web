# Introducción a Javascript

## JavaScript es

* lenguaje de programación dinámico
* débilmente Tipado
* basado en prototipos
* presente en cualquier explorador web
* con funciones de primera clase (first-class functions)
* multi-paradigma (imperativo, orientado a objetos y funcional)

* sintaxis similar a C y Java
* ¡pero no tiene NADA QUE VER con Java!

## Historia de JavaScript

* creado en 1995 por [Brenda Eich](https://es.wikipedia.org/wiki/Brendan_Eich)
* para ser incluido como lenguaje de scripting en el navegador Netscape
* por razones comerciales se lo quiso emparentar con Java (¡pero no tiene NADA que ver!)
* desde 1997 es un estándar internacional bajo el nombre de ECMAScript.

* en 2005, con el surgimiento de [AJAX](https://es.wikipedia.org/wiki/AJAX) JavaScript recibe nuevo impulso
* se comienza a estudiar el lenguaje y se desarrollan librerías y frameworks
* en 2009 comienza el desarrollo de [node.js](http://nodejs.org/), una plataforma para crear servicios de red ejecutando JavaScript del lado del servidor.

A mediados de 2013 JavaScript encabezaba la lista de lenguajes más usados en github, con más de 200.000 repositorios creados tan sólo en 2013 ([ver números](http://adambard.com/blog/top-github-languages-for-2013-so-far/)), mientras que en enero de 2014 [redmonk](http://redmonk.com/sogrady/2014/01/22/language-rankings-1-14/) lo situaba al tope de la lista, seguido muy de cerca por Java.

Más información en [wikipedia](https://es.wikipedia.org/wiki/JavaScript)

## Características de JavaScript

* Imperativo y estructurado

Soporta gran parte de la programación estructurada al estilo C (sentencias if, for, switch).

* Tipado dinámico

Las variables pueden cambiar de tipo.

* Basado en objetos

Casi todo son objetos en JavaScript. Los objetos en JavaScript son arrays asociativos con soporte de prototipos.

Ejemplo de un objeto como un array asociativo
```javascript
var miObjeto = {
  nombre: 'objeto',
  edad: 22,
  deciHola: function() {
    alert('hola');
  },
  otroObjeto: {
    nombre: 'anidado',
    edad: 10
  }
};

miObjeto.nombre      // retorna 'objeto'
miObjeto['nombre']   // también retorna 'objeto', sintaxis alternativa

```

* Funciones de primera clase

Las funciones son un tipo más de datos, poseen propiedades y métodos. Cada función es creada como una clausura (clousure), reteniendo el valor de su contexto de ejecución.

* Basado en prototipos

JavaScript usa prototipos en vez de clases para soportar herencia y reutilizar funcionalidad.

* Funciones variádicas

Las funciones pueden recibir una cantidad no especificada de parámetros.

* Funciones como métodos

Los métodos son funciones almacenadas como propiedades de un objeto.

```javascript

var myFunction = function() { return 'hello world'; }   // esto es una función

var myObject = {
  helloWorld: myFunction
};

// myObject.helloWord es un método

myObject.helloWorld();   // retorna 'hello world'
```

* Arrays y definiciones de objectos literales

Los arrays y objetos pueden ser creados con una sintaxis abreviada

```javascript
var a1 = new Array(1,2,3);

var a1 = [1, 2, 3];           // definido de manera literal

var o1 = new Object();
o1.nombre = 'Juan'

var o1 = { nombre: 'Juan'}   // definido de manera literal
```

## Ejecutando JavaScript en el browser

Hay tres maneras de ejecutar JavaScript desde una página web.

**Desde un archivo externo.**

Simplemente incluimos un tag &lt;script> con un atributo src apuntando al archivo que queremos incluir.

```html
<html>
  <head>
    <title></title>
  </head>
  <body>
    <script type='text/javascript' src='js/helper.js'></script>
  </body>
</html>
```

**Desde un tag &lt;script>.**

Incluimos el código JavaScript entre tags &lt;script>.

```html
<html>
  <head>
    <title></title>
  </head>
  <body>
    <script type='text/javascript'>
    function fromScriptTag {
      console.log('running from script tag!');
    }
    </script>
  </body>
</html>
```

**Embebido en el html**

Incluimos el código JavaScript en un atriuto de un elemento html. Esta forma no es recomendada ya que nos queda mezclado el código JavaScript con nuestro html. Más adelante veremos que hay mejores formas de hacer esto.

```html
<html>
  <head>
    <title></title>
  </head>
  <body>
    <a href='#' onclick='alert("hola desde html!");'>en el html (MUY FEO!!!)</a>
  </body>
</html>
```

Ver este [ejemplo](ejemplos/01_ejecutando_js/test.html).

Recursos útiles

http://radar.oreilly.com/2011/06/time-to-learn-javascript.html

[JavaScript, the good parts](http://shop.oreilly.com/product/9780596517748.do)

