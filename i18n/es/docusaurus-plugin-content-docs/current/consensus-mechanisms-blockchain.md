---
id: blockchain-consensus-mechanism
title: Blockchain Consensus Mechanisms
sidebar_label: Consensus Mechanisms
description: Consensus explanation and definition of consensus mechanisms for the blockchain
keywords: [ Consensus Algorithm, Blockchain, POW, POS, dPOS, Consensus Mechanisms, Proof of Work, Proof of Stake, Delegated Proof of Stake ]
---

Es importante entender los mecanismos de consenso utilizados por las diferentes redes blockchain para mantener la seguridad e integridad de la red, así como conocer sus beneficios y las redes que aún los emplean.

## Proof of Work (PoW)

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/3EUAcxhuoU4" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

Es el primer mecanismo de consenso presentado por Satoshi Nakamoto en el whitepaper de Bitcoin de 2008. En este modelo, un conjunto de transacciones llamado “Mempool” es verificado por los “mineros”, quienes resuelven un problema matemático complejo (cuya dificultad aumenta conforme se validan más bloques). Esto requiere hardware especializado y un alto consumo de energía.

El primer minero que encuentra la solución y la valida el resto de la red obtiene el derecho a añadir el “Mempool” a la cadena de bloques y recibe una “recompensa de bloque”, compuesta por criptomonedas generadas por las comisiones de transacción.

Debido a los elevados requisitos de “minería”, se han formado grupos de minería o “pools” para combinar recursos y aumentar las probabilidades de éxito. La recompensa obtenida se reparte entre todos los miembros del pool.

Actualmente, las redes que usan este mecanismo de consenso incluyen:

- Bitcoin  
- Ethereum (en el futuro podría cambiar a PoS)  
- Monero  
- Entre otras  

Para más información, consulta el glosario: [Proof of Work](https://guide.eoscostarica.io/docs/tools/glossary#proof-of-work).

## Proof of Stake (PoS)

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/psKDXvXdr7k" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

Este mecanismo nació en 2011 para eliminar las limitaciones del PoW. En lugar de “mineros” con hardware caro y gran consumo energético, utiliza “validadores” que bloquean (“stake”) una cantidad de tokens como garantía. Los validadores se eligen aleatoriamente; si actúan de forma deshonesta, pierden su stake y quedan inhabilitados.

En EOSIO, se requiere una supermayoría de 2/3+1 del total de validadores para aprobar un bloque (este umbral puede variar según la red). La selección de validadores considera:

- Cantidad de tokens apostados (a más tokens, mayor probabilidad)  
- Antigüedad del stake (cuanto más tiempo bloqueados, mayor probabilidad)  
- Selección aleatoria  

Este modelo incentiva a los grandes poseedores de tokens a comportarse de forma honesta, ya que el riesgo de perder su stake es alto.

Redes que usan PoS:

- Dash  
- Ethereum (próximamente)  
- EOS / EOSIO  
- Entre otras  

## Diferencias entre los mecanismos

| Aspecto                                                   | Prueba de Trabajo (PoW)              | Prueba de Participación (PoS)                  | Prueba de Participación Delegada (DPoS)       |
| :-------------------------------------------------------- | :-----------------------------------: | :--------------------------------------------: | :--------------------------------------------: |
| Requisitos de equipo                                      | Hardware especializado               | Equipo con conexión a Internet                  | Equipo con conexión a Internet                  |
| ¿Quién valida las transacciones?                          | El primer minero que resuelve el problema | La persona elegida por el sistema               | El delegado elegido por el sistema              |
| ¿Cómo se elige al validador?                              | Competencia para resolver un problema matemático | Mayor stake o antigüedad de los tokens          | Elecciones en la comunidad y asignación de stake al delegado |
| Principales fortalezas                                    | Muy seguro                           | Más accesible y participativo                   | Mayor democracia dentro de la comunidad         |
| Principales desafíos                                      | Altísimo consumo energético          | Favorece a los grandes poseedores                | Requiere una comunidad muy activa               |

Para profundizar en Delegated Proof of Stake (DPoS), visita: [Delegated Proof of Stake](https://guide.eoscostarica.io/docs/eos-learn/consensus-mechanism#delegated-proof-of-stake-dpos).

## Otros mecanismos de consenso

Existen otros mecanismos de consenso menos populares en las comunidades blockchain:

### Prueba de Capacidad (PoC)

Funciona de forma similar al PoW, pero utiliza discos duros como principal recurso de potencia computacional. Aprovecha la alta capacidad de los discos para resolver problemas de PoW y PoS.

### Prueba de Actividad (PoA)

Combina PoW y PoS: primero valida un bloque mediante minería (PoW) y luego emplea un sistema de elección de validadores (PoS). Una vez validado, vuelve al sistema de minería.

### Prueba de Quemado (PoB)

Nació para reducir el consumo energético del PoW, “quemando” tokens para obtener más potencia de minado. A mayor cantidad de tokens quemados, mayor poder de minería disponible.

### Prueba de Historia (PoH)

Registra el tiempo exacto entre dos eventos en una función hash, creando un registro inmutable que sería prácticamente imposible de alterar en todos los nodos de la red.

### Prueba de Tiempo Transcurrido (PoET)

Desarrollada por Intel para equilibrar la ventaja de quienes tienen más recursos, funcionando como una lotería interna que elige validadores de forma equitativa.

Para conocer más mecanismos de consenso, visita: [8 blockchain consensus mechanisms you should know about](https://www.allerin.com/blog/8-blockchain-consensus-mechanisms-you-should-know-about).```
::contentReference[oaicite:0]{index=0}