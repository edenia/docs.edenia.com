---
id: devops
title: What is DevOps ?
sidebar_label: DevOps
description: DevOps is the process of putting together a team to build a system that is efficient, reliable, and secure.
keywords: [DevOps, What is DevOps for, EOS, EOS Costa Rica, Why DevOps ]
---

DevOps es la práctica y la cultura de aplicar principios de manufactura esbelta (*lean manufacturing*) al flujo de valor de TI para aumentar la velocidad del desarrollo de software, reducir el desperdicio y mejorar la calidad, con énfasis en aprovechar **personas, procesos y herramientas**.

Se enfoca en unificar Desarrollo y Operaciones de TI mediante los principios de flujo, retroalimentación y experimentación.

<figure
  className="video_container">
  <iframe
   width="100%" height="315" src="https://www.youtube.com/embed/OOGFxVzW35w" frameBorder="0" allowFullScreen loading="lazy">
  </iframe>
</figure>

## Definiciones clave

- **Integración Continua (CI):** Trata de compilar el software a partir de las aportaciones de desarrolladores individuales de manera controlada y ágil. (Subir todo el código al repositorio central diariamente)  
- **Despliegue Continuo (CD):** Despliegue automatizado (o traslado) del código a producción sin pasos manuales. No todas las aplicaciones siguen este modelo.  
- **Entrega Continua (CD):** Automatización que garantiza que el despliegue esté validado, aunque aún requiere un paso manual para enviar a producción.  
- **Despliegue:** El envío (o traslado) del código a un entorno de nivel superior, hasta producción inclusive.  
- **Lanzamiento (Release):** Ámbito definido y objetivo de negocio para un conjunto de funcionalidades a entregar en un plazo determinado.  

## ¿Por qué implementar DevOps?

En 2012, el “State of DevOps Report” de Puppet Labs, que evaluó 4,039 organizaciones de TI, halló:

- Despliegues de código 30× más frecuentes  
- Tiempo de despliegue 8,000× más rápido  
- Doble tasa de éxito en cambios  
- Tiempo medio de reparación (MTTR) 12× más rápido  

***

> “*La ventaja competitiva que crea esta capacidad es enorme, permitiendo llevar nuevas funcionalidades al mercado más rápido, aumentar la satisfacción del cliente, la cuota de mercado, la productividad de los empleados y su bienestar.*” **– Phoenix Project**

***

## Áreas de énfasis

Los principios DevOps se aplican y apoyan en estas tres áreas clave que trabajan en conjunto:

- **Personas:** DevOps depende de un equipo sólido y de una cultura de experimentación, aprendizaje, colaboración y objetivos compartidos entre Desarrollo, QA y Operaciones de TI.  
- **Procesos:** DevOps se basa en Lean Agile, aplicando conceptos de manufactura esbelta a los flujos de valor de TI.  
- **Herramientas:** DevOps utiliza herramientas avanzadas y tecnologías que incluyen automatización, telemetría y colaboración.  

## ¿Cuál es el objetivo de DevOps?

Mejorar la colaboración entre todas las partes interesadas desde la planificación hasta la entrega y automatizar el proceso de entrega para:

- Aumentar la frecuencia de despliegues  
- Lograr un tiempo de salida al mercado más rápido  
- Reducir la tasa de fallos en los nuevos lanzamientos  
- Acortar el tiempo entre correcciones  
- Mejorar el tiempo medio de recuperación  

## Ejemplos de sistemas CI

![CI_System_image](https://user-images.githubusercontent.com/5632966/106228974-2f442480-61b2-11eb-9ceb-6d47ef5acb67.png 'Devops')

## Ejemplos de sistemas CD

![CD_System_image](https://user-images.githubusercontent.com/5632966/105532713-d0ae1080-5cb0-11eb-8d8b-5d3751b7df37.png '')

* * *

## Infraestructura como Código (IAC)

Es el proceso de gestionar y aprovisionar centros de datos mediante archivos de definición legibles por máquina, en lugar de configuración manual del hardware o herramientas interactivas.

<figure 
  className="video_container">
  <iframe 
  width="100%" height="315" src="https://www.youtube.com/embed/53X-HAw7BbA" frameBorder="0" allowFullScreen loading="lazy">
  </iframe>
</figure>

* * *

### Introducción a HashiCorp Terraform

Terraform es una herramienta de infraestructura como código desarrollada por HashiCorp. Permite a los usuarios definir y configurar la infraestructura de un centro de datos en un lenguaje de alto nivel.

<figure 
  className="video_container">
  <iframe 
  width="100%" height="315" src="https://www.youtube.com/embed/cpxKbf51ccU" frameBorder="0" allowFullScreen loading="lazy">
  </iframe>
</figure>

* * *

<figure 
  className="video_container">
  <iframe 
  width="100%" height="315" src="https://www.youtube.com/embed/h970ZBgKINg" frameBorder="0" allowFullScreen loading="lazy">
  </iframe>
</figure>

## Introducción a Kubernetes y Docker

### **Containers 101**

<figure 
  className="video_container">
  <iframe 
  width="100%" height="315" src="https://www.youtube.com/embed/VqLcWftIaQI" frameBorder="0" allowFullScreen loading="lazy">
  </iframe>
</figure>

[Más información sobre contenedores](https://www.youtube.com/channel/UCdkGV51Nu0unDNT58bHt9bg/search?query=containers)

* * *

### ¿Qué es Docker?

Docker es un proyecto de código abierto que automatiza el despliegue de aplicaciones dentro de contenedores de software, proporcionando una capa adicional de abstracción y virtualización que funciona en múltiples sistemas operativos.

[Aprende más sobre Docker](/docs/tutorials/docker)

<figure 
  className="video_container">
  <iframe
   width="100%" height="315" src="https://www.youtube.com/embed/PfTKwblbkpE" frameBorder="0" allowFullScreen loading="lazy">
  </iframe>
</figure>

* * *

### Kubernetes

Kubernetes es un sistema de código abierto para automatizar el despliegue, escalado y gestión de aplicaciones en contenedores, originalmente diseñado por Google y donado a la Cloud Native Computing Foundation. Soporta distintos entornos de ejecución de contenedores, incluido Docker.

A continuación encontrarás una serie de tutoriales muy prácticos para aprender Kubernetes desde cero:

### Kubernetes en 5 minutos

<figure 
  className="video_container">
  <iframe 
  width="100%" height="315" src="https://www.youtube.com/embed/PH-2FfFD2PU" frameBorder="0" allowFullScreen loading="lazy">
  </iframe>
</figure>

* * *

### Kubernetes vs Docker: No es cuestión de uno u otro

<figure 
  className="video_container">
  <iframe 
    width="100%" height="315" src="https://www.youtube.com/embed/2vMEQ5zs1ko" frameBorder="0" allowFullScreen loading="lazy">
  </iframe>
</figure>

* * *

## Kubernetes en EOS Costa Rica

Para probar los [tutoriales](https://kubernetes.io/docs/tutorials/kubernetes-basics/) en un entorno real, puedes usar nuestra instalación de Kubernetes en OpenStack. Si lo prefieres, también puedes crear un entorno local en tu propia máquina:

[Instala Minikube](https://computingforgeeks.com/how-to-install-minikube-on-ubuntu-debian-linux/)  

Solicita a los administradores acceso al panel de OpenStack y al proyecto Sandbox. Luego sigue estos pasos:

- Primero conéctate al nodo maestro mediante SSH:

```shell
ssh -i key.pem user@master-sandbox
```

- Obtén información del clúster:

```shell
kubectl cluster-info
```
-Muestra los nodos disponibles:

```shell
kubectl get nodes
```

##  Referencias
*“Los principios detrás de DevOps son los mismos que transformaron la manufactura. En lugar de optimizar cómo se convierten las materias primas en productos terminados, DevOps muestra cómo optimizar el flujo de valor de TI…”* - Phoenix Project

*“Imagínate un mundo DevOps, donde product owners, Desarrollo, QA, Operaciones de TI e InfoSec trabajan juntos sin descanso para ayudarse mutuamente y llevar el éxito a la organización. Permiten un flujo rápido del trabajo planificado a producción, manteniendo estabilidad, fiabilidad, disponibilidad y seguridad de clase mundial.”* -
 Phoenix Project

* [Tabla Periódica de Herramientas DevOps](https://www.notion.so/Periodic-Table-of-DevOps-Tools-4e9b29562a944132b1235cfa7e400d68)
* [Automatización](https://www.notion.so/Automation-e4dee021a4494d9cbdebb3ebc6205f4f)
* [DevOps con GitHub](https://lab.github.com/githubtraining/devops-with-github-actions)