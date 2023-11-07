# web-node-template

## Description

Este es un proyecto de ejemplo para crear una Tamplate base a la hora de crear pequeños proyectos que necesiten de un frontal y un backend.

Se ha optado porque este todo escrito en JavaScript por lo que no vamos a incluir ningún otro tipo de lenguaje especifico para backend o front.

## Objective

El objetivo es tener un frontal y un backend separados que se comuniquen entre ellos y que se despliguen como una única entidad (proyecto), para así poder construir una única imagen Docker que poder desplegar y contenga en el mismo contenedor tanto el frontal como el backend.

## Structure

Para la parte frontal se ha optado por usar Vue3 pero podría usarse Angular, React,... etc
y para el backend hemos usado un NodeJs con Express para exponer los servicios.

Finalmente todo está agrupado mediante un proyecto NPM que se encargará de realizar las acciones de desplegar en local las dos instancias (front y server), compilar para PROD el frontal y copiarlo en el server y finalmente dockerizar el proyecto (??)


```txt
| - web
|   //Web create with Create-Vue...
| - server
|   - public    <= Web served by NodeJs (files from Web folder compiled)
|   - src       <= All business logic
|   - app.js    <= Entry point NodeJs Server
| - package.json
```

## Install

First of all we need to install components with npm for each proyect. So we need to execute the following commands

```bash
cd server && npm install
cd web && npm install
npm install
```


## Usages

We have diferents scripts to execute the project from the main folder.

* Run Only Web in develop mode
    ```bash
    npm run web
    ```
* Run only Server in develop mode
    ```bash
    npm run server
    ```
* Run web and server in develop mode
    ```bash
    npm run dev-all
    ```
* Build web
    ```bash
    npm run build-web
    ```
* Copy builded web to server
    ```bash
    npm run copy-prod-front
    ```
* Build web and copy files to server
    ```bash
    npm run package
    ```




