# ejercicio_02

## publicando nuestro propio fork de taller-web

Vamos a

1. Registrar una cuenta en github

2. Hacer un fork del proyecto del taller web

3. Clonarlo localmente en nuestra estacion de trabajo

4. Publicar las pruebas para ir mostrando como las vamos resolviendo


## Registrar una cuenta en github:

Ir a https://github.com/join y crear una cuenta en github

## Hacer un fork del proyecto del taller web

Ir al repositorio del taller-web : https://github.com/MTEySS/taller-web

y hacer click en "Fork"

Luego copiar la direccion del repo

https://github.com/<tu nombre de usuario>/taller-web.git

(prestar atencion y utilizar https y no git@github...)

en mi caso:

https://github.com/sscarano/taller-web.git

## Clonarlo localmente

crear una carpeta /dev/apps y posicionarse alli

luego ejecutar

```
git clone https://github.com/sscarano/taller-web.git
cd taller-web
```

seleccionar la rama gh-pages

```
git checkout gh-pages
```

efectuar alguna modificacion en algun archivo (por ejemplo index.html)
y luego commitear los cambios con

```
git commit -am 'publish'
```

## Publicar las pruebas

Subir los cambios a nuestro fork en github

```
git push
(ingresar usuario y clave)
```

Finalmente, ir a: http://sscarano.github.io/taller-web/

y ya tenemos publicado nuestro sitio.

Luego iremos resolviendo los ejericios allí propuestos y los iremos commiteando y subiendo al servidor para publicar nuestras soluciones.
