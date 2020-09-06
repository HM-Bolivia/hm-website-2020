# Hackmeeting Yacuiba 2020

Sitio Web para el Hackmeeting 2020, escrito en markdown y procesado con [Hugo Framework](https://gohugo.io/).

## Estructura de Repositorio

```bash
    Ramas (branch)
        |-- master
        |	`-- Hugo Framework
        |-- deploy
        	`-- Carpeta public (Sitio Estatico Generado con Hugo Framework)
```

## Clonar el repositorio para pruebas en local

Para agregar nuevo contenido se debe clonar el proyecto y crear la carpeta **public**: 

```bash
    $ git clone --recurse-submodules git@github.com:Hackmeeting-Bolivia/hm-website-2020.git
    $ cd hm-website-2020
    $ mkdir public
    $ git worktree add -B deploy public origin/deploy
```

## Agregar nuevo contenido

Luego de clonar el repositorio podemos agregar contenido en la carpeta /content.

```bash
    $ hugo new post/charlas.md
    $ hugo server --watch -D        # (*)
    $ hugo -D
```

(*) Creará un servidor de desarrollo en [http://localhost:1313/](http://localhost:1313/).

## Subir los cambios

Luego de editar el contenido podemos subir los datos al reposiorio.

```bash
    # Para la rama master con Hugo
    $ git add .
    $ git commit -m 'New post'
    $ git push origin master

    # Para la rama deploy, sitio estático
    $ cd public
    $ git add .
    $ git commit -m 'New post static'
    $ git push origin deploy
```
