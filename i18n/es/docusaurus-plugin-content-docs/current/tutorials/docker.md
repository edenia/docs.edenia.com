---
id: docker
title: Docker
sidebar_label: Docker
description: Conceptos, definición y funcionalidades de Docker
keywords: [Docker, Docker, Aprender Docker, Qué es Docker, Para qué sirve Docker, Cómo funciona Docker, Cómo usar docker]
---

# Docker


import useBaseUrl from '@docusaurus/useBaseUrl';

Docker es una herramienta que permite crear, probar y desplegar aplicaciones rápidamente. La idea detrás de Docker es crear "contenedores" que sean ligeros y portátiles para que las aplicaciones puedan ejecutarse en cualquier máquina con Docker instalado, independientemente del sistema operativo.

Por ejemplo, cada nodo de la red blockchain o servicio/aplicación desarrollada se compilará en una imagen Docker que contiene todas sus dependencias y se despliega en uno de los varios proveedores de infraestructura con Docker disponible.

<div style={{  textAlign: "center" }}>
<img alt="Diagrama comparativo de contenedorización Docker vs máquinas virtuales tradicionales mostrando diferencias en eficiencia de recursos y despliegue"   src={ useBaseUrl( '/img/documentation-images/Docker-containerized-and-vm-transparent-bg.webp' )} />
</div>

Además de Docker, utilizamos una herramienta de "orquestación" de contenedores llamada Kubernetes (K8s).

Kubernetes te ayuda a gestionar los contenedores en los que se alojan tus aplicaciones de forma fácil, rápida y escalable. Además, también dispone de monitorización y balanceo de carga. Sobre los servidores virtuales. Para más información visite [Kubernetes y Docker](https://docs.edenia.com/es/docs/devops#introducci%C3%B3n-a-kubernetes-y-docker).

## Docker Engine

Docker Engine es una tecnología de contenedores de código abierto para construir y "containerizar" sus aplicaciones. Docker Engine actúa como una aplicación cliente-servidor con:

- Un servidor con un proceso daemon de larga duración [dockerd](https://docs.docker.com/engine/reference/commandline/dockerd).
- APIs que especifican interfaces que los programas pueden utilizar para hablar con el daemon Docker y darle instrucciones.
- Una interfaz de línea de comandos (CLI) [docker](https://docs.docker.com/engine/reference/commandline/cli/).

La CLI utiliza [Docker APIs](https://docs.docker.com/engine/api/) para controlar o interactuar con el daemon Docker a través de scripts o comandos directos de la CLI. Muchas otras aplicaciones de Docker utilizan la API y la CLI subyacentes. El demonio crea y gestiona objetos Docker, como imágenes, contenedores, redes y volúmenes.

Para más detalles, véase [Arquitectura Docker](https://docs.docker.com/get-started/overview/#docker-architecture).

Para tener una configuración inicial de Docker, necesitamos establecer tres cosas principales:

1. **Dockerfile**: Define los pasos necesarios para crear la imagen y ejecutarla. Cada instrucción en un Dockerfile crea una capa en la imagen.
1. **Imagen**: Una imagen es una plantilla de sólo lectura con instrucciones para crear un contenedor Docker.
1. **Contenedor**: Un contenedor es una instancia ejecutable de una imagen. Puedes crear, iniciar, detener, mover o eliminar un contenedor utilizando la API de Docker o la CLI.

## Docker Compose

Compose es una herramienta para definir y ejecutar aplicaciones Docker multi-contenedor. Con Compose, usted utiliza un archivo YAML para configurar los servicios de su aplicación. Luego, con un solo comando, creas e inicias todos los servicios desde tu configuración.

El uso de Compose es básicamente un proceso de tres pasos:

1. Define el entorno de tu aplicación con un Dockerfile para que pueda ser reproducido en cualquier lugar.
1. Define los servicios que componen tu app en docker-compose.yml para que puedan ejecutarse juntos en un entorno aislado.
1. Ejecuta docker-compose y Compose inicia y ejecuta toda tu app.

Un docker-compose.yml tiene el siguiente aspecto:
```yml
version: "3.9"  # optional since v1.27.0
services:
  web:
    build: .
    ports:
      - "5000:5000"
    volumes:
      - .:/code
      - logvolume01:/var/log
    links:
      - redis
  redis:
    image: redis
volumes:
  logvolume01: {}
```

### Cómo Iniciar

Para iniciar nuestro primer proyecto Docker, vamos a crear la configuración necesaria para que arranque y diga `Hola mundo, somos Edenia`. En primer lugar, necesitamos la configuración principal, así que sigue los siguientes pasos para obtenerla.

### Estructura del proyecto

```
/
├──  node_modules
├── src
│   ├── index.js
├── .dockerignore
├── .gitignore
├── Dockerfile
├── package.json
└── yarn.lock
```

### Desglose del código

#### Dockerfile

```Dockerfile
FROM node:12
WORKDIR /app
COPY package*.json ./
RUN yarn
COPY . .
ENV PORT=8080
EXPOSE 8080
CMD [ "yarn", "start" ]
```

#### .dockerignore

`node_modules`

#### .gitignore

`node_modules`

#### src/index.js

```js
const app = require('express')();
 
app.get('/', (req, res ) => 
    res.json({ message: 'Hello world, we are Edenia' }) 
);
 
const port = process.env.PORT || 8080;
 
app.listen(port, () => console.log(`app listening on http://localhost:${port}`) );
```

#### package.json

```json
{
  "name": "docker-demo",
  "version": "1.0.0",
  "description": "Hello world, we are Edenia",
  "main": "index.js",
  "scripts": {
    "start": "node src/index.js"
  },
  "keywords": [],
  "author": "EOS Costa Rica",
  "license": "MIT",
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

### Comandos

#### Construir Imagen

`docker build -t edenia/helloworld:1.0 .`

#### Correr contenedor

`docker run -p 5000:8080 <image-id>`

### Docker Compose Example

#### docker-compose.yml 

```yml
version: '3'
services:
  web:
    build: .
    ports:
      - "8080:8080"
  db:
    image: "mysql"
    environment: 
      MYSQL_ROOT_PASSWORD: password
    volumes:
      - db-data:/foo
volumes:
  db-data:
```

### Ejecutar Multiples Contenedores

#### Comando

`docker-compose up`
