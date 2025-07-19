---
id: developer-tools
title: Our Tools for Software Development
sidebar_label: Our Favorite Tools
description: Tools that EOS Costa Rica uses to develop software.
keywords: [ Development Tools, Tools EOS, EOS Costa Rica, Tools for Software Development, Tools EOS Costa Rica ]
---

## Apollo

### ¿Qué es Apollo?

Apollo es un conjunto de herramientas para crear un servidor GraphQL y consumir una API GraphQL. Apollo cuenta con un equipo y una comunidad que construyen sobre GraphQL y ofrecen distintas utilidades que facilitan el desarrollo de tus proyectos.

### ¿Por qué usamos Apollo?

1. **Documentación:** El equipo y la comunidad mantienen la documentación siempre actualizada y aportan consejos prácticos sobre cómo construir aplicaciones.  
2. **Librerías:** Apollo provee múltiples librerías para implementar un stack GraphQL eficaz en aplicaciones JavaScript, todas de código abierto.  
3. **Funciones integradas:** Apollo incluye características que abstraen la complejidad de la interacción entre cliente y servidor.

### Instalación de Apollo

[Instalación de Apollo CLI](https://www.apollographql.com/docs/devtools/cli/)  
[Repositorio de Apollo en GitHub](https://github.com/apollographql)

---

## Axios

### ¿Qué es Axios?

Axios es una popular librería JavaScript para hacer peticiones HTTP, que funciona tanto en el navegador como en Node.js. Es compatible con todos los navegadores modernos, incluyendo IE8 en adelante.

### ¿Por qué usamos Axios?

1. Soporte para navegadores antiguos.  
2. Permite abortar una petición.  
3. Permite establecer un tiempo de espera (timeout) en la respuesta.  
4. Incluye protección CSRF integrada.  
5. Soporta seguimiento de progreso al subir archivos.  
6. Realiza transformación automática de datos JSON.  
7. Funciona en Node.js.

### Instalación de Axios

[Instalación de Axios](https://www.npmjs.com/package/axios)  
[Repositorio de Axios en GitHub](https://github.com/axios/axios)

---

## EOSIO

### ¿Qué es EOSIO?

EOSIO es un software de código abierto que permite lanzar redes blockchain altamente configurables donde desarrolladores y emprendedores pueden ejecutar aplicaciones descentralizadas de alto rendimiento. Para más información visita [Learn EOS](https://guide.eoscostarica.io/docs/eos-learn/eosio-protocol).

### ¿Por qué usamos EOSIO?

1. **Escalabilidad:** Puede procesar más de 4.000 transacciones por segundo en su red pública, hasta 200 veces más rápido que otros protocolos.  
2. **Velocidad:** Las aplicaciones EOSIO ofrecen al usuario final una experiencia rápida y segura, sin percibir lentitud por ser blockchain.  
3. **Costo casi nulo:** No hay tarifas de transacción para el usuario, lo que reduce costos para desarrolladores y consumidores.  
4. **Eficiencia energética:** A diferencia de otros protocolos, su consumo es muy bajo, reduciendo el impacto ambiental.

> Para más detalles, visita [Razones para usar EOSIO](https://block.one/news/four-reasons-why-developers-and-enterprises-are-looking-at-the-eosio-blockchain-protocol/#:~:text=Unlike%20other%20blockchain%20protocols%2C%20EOSIO,apps%20are%20free%20to%20use.)

### Instalación de EOSIO

Guía de inicio en el mundo EOSIO: [Componentes de EOSIO](https://guide.eoscostarica.io/docs/eos-learn/eosio-components)

---

## jq

### ¿Qué es jq?

jq es un procesador JSON de línea de comandos ligero y flexible. Es como `sed` para datos JSON: permite filtrar, mapear y transformar estructuras de datos con la misma facilidad que `sed`, `awk` o `grep` para texto.

### ¿Por qué usamos jq?

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/EvpwhGeiH0U" frameBorder="0" allowFullScreen loading="lazy"></iframe>
</figure>

>[Tutorial de jq](https://stedolan.github.io/jq/tutorial/)

### Instalación de jq

Instala jq desde la [página oficial de jq](https://stedolan.github.io/jq/).

#### **Video para Windows**

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/rrjIVepRqPI" frameBorder="0" allowFullScreen loading="lazy"></iframe>
</figure>

[Entorno web JQPlay](https://jqplay.org/) para probar jq online.  
[Repositorio de jq en GitHub](https://github.com/stedolan/jq)

---

## React JS

### ¿Qué es React JS?

React es una librería JavaScript de código abierto para construir interfaces de usuario. La mantiene Facebook y una comunidad de desarrolladores. React se usa como base para aplicaciones de página única o móviles.

#### **PropTypes**

JavaScript no es fuertemente tipado, lo que puede causar problemas. PropTypes ayuda a verificar los tipos de las props según una especificación previa. [Documentación de PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

### ¿Por qué usamos React JS?

1. **Curva de aprendizaje rápida:** Es una librería sencilla que solo gestiona la capa de vista.  
2. **Componentes reusables:** Su arquitectura basada en componentes permite construir piezas pequeñas (botones, menús) y luego componerlas.  
3. **Virtual DOM:** Actualiza el DOM de forma eficiente usando un DOM virtual en memoria.  
4. **Excelentes herramientas:** Extensiones como React Developer Tools y Redux DevTools facilitan la depuración.

> Más información: [Por qué usar React](https://stories.jotform.com/7-reasons-why-you-should-use-react-ad420c634247)

### Instalación de React JS

Instrucciones en nuestro tutorial de React JS.  
[Repositorio de React en GitHub](https://github.com/facebook/react)

---

## HAPI

### ¿Qué es HAPI?

Hapi es un framework de Node.js de código abierto para crear aplicaciones y servicios. Permite a los desarrolladores centrarse en la lógica de negocio en lugar de la infraestructura.

### ¿Por qué usamos HAPI?

1. **Respaldo corporativo:** Empresas como npm y Walmart usan Hapi, garantizando soporte a futuro.  
2. **Arquitectura de plugins:** Facilita el trabajo en equipos distribuidos sin necesidad de conocer toda la API.  
3. **Configuración clara:** El framework se encarga de la configuración y deja el código de negocio limpio.

### Instalación de HAPI

[Tutorial e instalación de HAPI](https://hapi.dev/tutorials/?lang=en_US)  
[Repositorio de HAPI en GitHub](https://github.com/hapijs/hapi)

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/2lprC0yYeFw" frameBorder="0" allowFullScreen loading="lazy"></iframe>
</figure>

---

## Hasura

### ¿Qué es Hasura?

El motor GraphQL de Hasura es un servidor GraphQL ultrarrápido que ofrece APIs en tiempo real sobre Postgres, con triggers por eventos de base de datos y esquemas remotos para lógica de negocio.

### ¿Por qué usamos Hasura?

1. Encapsula la estructura de tablas tras una interfaz consistente.  
2. Mejora la legibilidad: una consulta nombrada es más clara que SQL en línea.  
3. Permite vistas con permisos independientes, restringiendo filas y columnas según el usuario.

### Instalación de Hasura

[Instalación del CLI de Hasura](https://hasura.io/docs/1.0/graphql/core/hasura-cli/install-hasura-cli.html)  
[Repositorio de Hasura en GitHub](https://github.com/hasura)

---

## HTTPie

### ¿Qué es HTTPie?

Cliente HTTP de línea de comandos moderno: alternativa a curl con interfaz intuitiva, soporte JSON, resaltado de sintaxis, descargas tipo wget, extensiones, etc.

### ¿Por qué usamos HTTPie?

1. Sintaxis de comandos HTTP simple e intuitiva.  
2. Salida formateada y coloreada.  
3. Soporte JSON nativo.  
4. Formularios y subidas de archivos.  
5. Permite cabeceras personalizadas y datos arbitrarios.  
6. Compatible con Linux, macOS y Windows.  
7. Plugins para ampliar funcionalidades.

### Instalación de HTTPie

[Instalación de HTTPie](https://httpie.io/docs#installation)  
[Repositorio de HTTPie en GitHub](https://github.com/httpie/httpie)

<iframe width="100%" height="315" src="https://www.youtube.com/embed/SUWCS0FCb9s" frameBorder="0" allowFullScreen loading="lazy"></iframe>

---

## PostgresDB

### ¿Qué es PostgresDB?

PostgreSQL es un sistema de base de datos relacional de objetos de código abierto, que extiende SQL y ofrece numerosas características para almacenar y escalar cargas de datos complejas de forma segura.

### ¿Por qué usamos PostgresDB?

1. Compatible con múltiples plataformas y lenguajes.  
2. Mecanismo de bloqueo sofisticado.  
3. Soporte de control de concurrencia multiversión.  
4. Funcionalidad madura de programación en servidor.  
5. Cumple con el estándar ANSI SQL.  
6. Arquitectura cliente-servidor completa.

### Instalación de PostgresDB

[Instalación de PostgresDB](https://www.2ndquadrant.com/en/blog/pginstaller-install-postgresql/)  
[Repositorio de PostgreSQL en GitHub](https://github.com/postgres/postgres)

---

## Postman

### ¿Qué es Postman?

Herramienta que permite a desarrolladores probar llamadas a APIs; envía datos a un servidor y muestra la respuesta al usuario.

### ¿Por qué usamos Postman?

1. **Fácil de usar:** Interfaz gráfica para configurar peticiones HTTP y enviarlas con un clic.  
2. **Automatización:** Tests en JavaScript, suites de pruebas dinámicas y encadenamiento de datos.  
3. **Económico:** Plan gratuito con funcionalidades suficientes para muchos casos.

### Instalación de Postman

[Instalación de Postman](https://www.softwaretestingmaterial.com/install-postman/)  
[Repositorio de Postman en GitHub](https://github.com/postmanlabs)

<iframe width="100%" height="315" src="https://www.youtube.com/embed/juldrxDrSH0" frameBorder="0" allowFullScreen loading="lazy"></iframe>

---

## Vault

### ¿Qué es Vault?

Vault de HashiCorp es una herramienta de código abierto para almacenar y gestionar datos sensibles y secretos de forma segura en entornos cloud dinámicos.

### ¿Por qué usamos Vault?

1. Reduce la necesidad de credenciales estáticas y en código.  
2. Centraliza contraseñas usando identidades de confianza.  
3. Encripta datos en tránsito y reposo con claves gestionadas de forma central.

### Instalación de Vault

[Instalación de Vault](https://learn.hashicorp.com/tutorials/vault/getting-started-install)  
[Repositorio de Vault en GitHub](https://github.com/hashicorp/vault)

<iframe width="100%" height="315" src="https://www.youtube.com/embed/xyx9K_j_HXg" frameBorder="0" allowFullScreen loading="lazy"></iframe>

---

## IPFS

<p align="left">
  <a href="https://ipfs.io/">
    <img alt="IPFS logo" src="https://miro.medium.com/max/1400/1*RpQmoRu1D-rvWL1dfpDHgQ.png" width="30%"/>
  </a>
</p>

> Protocolo peer-to-peer de hipermedia diseñado para preservar y expandir el conocimiento humano, haciendo la web más resistente, actualizable y abierta.

- **Sitio web**: [IPFS](https://ipfs.io/)

## Almacenamiento Descentralizado – IPFS

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/5Uj6uR3fp-U" frameBorder="0" allowFullScreen loading="lazy"></iframe>
</figure>

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/HUVmypx9HGI" frameBorder="0" allowFullScreen loading="lazy"></iframe>
</figure>