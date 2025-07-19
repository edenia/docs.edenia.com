---
id: boilerplate
title: What is a Boilerplate ?
sidebar_label: Project Boilerplate
description: What is a Boilerplate?, definition of Boilerplate
keywords: [Boilerplate, Project Boilerplate, EOSIO, EOS, EOS Costa Rica, eosio.io, What is a Boilerplate, What is the EOS Costa Rica Project Boilerplate, What is a Boilerplate for]
---

## ¿Qué es un Boilerplate?

Un boilerplate es un marco o plantilla para el desarrollo de un proyecto. Es una estructura de proyecto ya definida de antemano que sirve para agilizar la organización y el desarrollo del software. Acelera la integración de soluciones y formatos que impulsan el proyecto hacia producción.

En EOS Costa Rica hemos creado tres repositorios boilerplate: **Front-End Boilerplate**, **Back-End Boilerplate** y **Full-Stack Boilerplate**.

## EOS Boilerplates

- [Full Stack Boilerplate](https://github.com/eoscostarica/full-stack-boilerplate)
- [Front End](https://github.com/eoscostarica/backend-boilerplate)
- [Back End](https://github.com/eoscostarica/backend-boilerplate)

## WAX Boilerplates

- [WAX WebApp](https://github.com/edenia/wax-webapp-boilerplate)
- [Wax Full Stack Boilerplate](https://github.com/edenia/wax-full-stack-boilerplate)

## Proton Boilerplate

- [Proton Full Stack Boilerplate](https://github.com/edenia/proton-full-stack-boilerplate)

## Boilerplates Generales

- [WebApp Boilerplate](https://github.com/eoscostarica/webapp-boilerplate)
- [Hapi Boilerplate](https://github.com/eoscostarica/hapi-boilerplate)
- [Hasura Boilerplate](https://github.com/eoscostarica/hasura-boilerplate)

## Front-End Boilerplate

[**EOS Costa Rica Front-End Boilerplate**](https://github.com/eoscostarica/webapp-boilerplate)

“Front-end” se refiere a la interfaz de usuario y, en el contexto de una aplicación web, es la parte que se ejecuta en el navegador del usuario.

Usamos [React JS](https://guide.eoscostarica.io/docs/tutorials/react-tutorial), una biblioteca de JavaScript para crear interfaces de usuario basadas en componentes de alto rendimiento, que facilita el desarrollo de interfaces complejas con código predecible y fácil de depurar.

### Stack tecnológico de Front-End

- [React](https://reactjs.org/)
- [Apollo Client](https://www.apollographql.com/docs/react/v3.0-beta/)
- [Material UI](https://material-ui.com/)
- [i18next](https://react.i18next.com/)

### Colección de Componentes React

Hemos desarrollado una colección de componentes en React para EOSIO. Puedes ver los componentes que hemos construido en nuestro [Storybook de Componentes React de EOS Costa Rica](https://guide.eoscostarica.io/docs/tutorials/react-tutorial#components-in-eos-costa-rica).  
Para más información sobre los componentes visita el [repositorio de componentes](https://github.com/eoscostarica/eoscr-components).

## Back-End Boilerplate

[**EOS Costa Rica Back-End Boilerplate**](https://github.com/eoscostarica/backend-boilerplate)

“Back-end” se refiere a la aplicación del servidor; puede describirse como la capa de acceso a datos de una aplicación que contiene la lógica de negocio para gestionar la información.

### Stack tecnológico de Back-End

- [Hasura](https://hasura.io/)
- [Hapi](https://hapi.dev/)
- [IPFS](https://ipfs.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [EOSIO](https://eos.io/)

### Infraestructura

- [Docker](https://www.docker.com/)
- [K8s](https://kubernetes.io/)

### GraphQL / Hasura

El motor GraphQL de Hasura genera automáticamente tu esquema GraphQL y los resolvers basados en tus tablas/vistas en Postgres. No necesitas escribir un esquema GraphQL ni resolvers.

La consola de Hasura te ofrece herramientas de interfaz de usuario que agilizan el modelado de datos o el trabajo con tu base de datos existente. La consola también genera automáticamente migraciones o archivos de metadatos que puedes editar directamente y versionar.

El motor GraphQL de Hasura te permite hacer todo lo que normalmente harías con Postgres, proporcionando GraphQL sobre constructos nativos de Postgres.

Obtén más información en [Hasura](https://guide.eoscostarica.io/docs/developer-tools/#hasura).

### API HTTP (HAPI)

hapi.js (comúnmente conocido como hapi) es la abreviatura de HTTP API. Es un framework completo para crear aplicaciones y servicios. Fue diseñado originalmente para el desarrollo rápido de servicios API RESTful en JavaScript, pero se ha convertido en un framework web con funcionalidades integradas, validación de entradas, autenticación, caché y soporte para aplicaciones en tiempo real con websockets.

Obtén más información en [hapi](https://guide.eoscostarica.io/docs/developer-tools/#hapi).

### EOSIO

EOSIO es una blockchain de tercera generación que busca proporcionar un registro inmutable, permanente, rastreable y verificable de toda la actividad en almacenes de contenedores. Estos datos serán públicos y podrán ser consumidos por cualquier tercero externo.

Obtén más información en [componentes de EOSIO](https://guide.eoscostarica.io/docs/eos-learn/eosio-components).

### PostgresDB

*"PostgreSQL es un potente sistema de base de datos relacional de objetos de código abierto con más de 30 años de desarrollo activo, lo que le ha otorgado una sólida reputación de fiabilidad, robustez y rendimiento".*

PostgreSQL incluye muchas características pensadas para ayudar a los desarrolladores a construir aplicaciones, a los administradores a proteger la integridad de los datos y crear entornos tolerantes a fallos, y a gestionar los datos sin importar el tamaño del conjunto.  
Obtén más información en [PostgresDB](https://guide.eoscostarica.io/docs/developer-tools#postgresdb).

## Full-Stack Boilerplate

[**EOS Costa Rica Full-Stack Boilerplate**](https://github.com/eoscostarica/full-stack-boilerplate)

El Full-Stack Boilerplate contiene tanto el software cliente como el servidor. Hemos creado un esqueleto altamente escalable con mejores prácticas, un monorepo fullstack que incluye nuestros boilerplates de front-end y back-end.

### Diagrama Full-Stack

![full-stack-boilerplate](https://user-images.githubusercontent.com/5632966/106770009-2cf32780-6603-11eb-98dd-c1a6a9aa8451.png)