# Examen Javascript Modulo 2
## Requisitos Generales

- [x] Existeix un repositori GitHub (URL) on es pot descarregar el projecte - 3 punts
- [x] Hi ha un document en el repositori GitHub, de nom analisis-tecnic.md ; amb un anàlisis de les funcionalitats generals de l'app i com es pensen encarar - 1 punt
  - [x] Estat de la App
  - [x] Explicar a alt nivell com dur a terme les funcionalitats
  - [x] Podeu adjuntar esquemes, captures de pantalla amb anotacions, etc
## Requisitos del proyecto
### Ip Tracker
- [x] Es pot introduir una adreça IP i Es carrega la informació adequadament a les caixes d'informació - 2 punts
- [x] Si es posa una IP el qual el format no és vàlid, mostrar missatge d’error o simplement esborrar-ho de l'input, com la demo - 2 punts
- [x] Es situa l’aplicació en el punt del mapa corresponent a les coordenades GPS: - 1punt

## Analisis técnico
La funcionalida de la aplicación es introducir una IP y poder geolocalizarla, para ello debemos controlar que lo que el usuario nos envia sea una ip mediante una expresión regular.
Despues deberemos utilizar una api [Geo Ipify](https://geo.ipify.org) a la que le enviaremos la IP y nos devolvera información sobre su geolocalizacion.
Parte de esa informacion la introduciremos en el DOM para que el usuario pueda verla, las coordenadas las enviaremos a esta api: [Leafletjs](https://leafletjs.com/SlavaUkraini/), 
que a su vez realiza un solicitud en [Map](https://account.mapbox.com/), para que nos devuelva un mapa con la localizacion (mas o menos exacta) de donde esta esa IP. 

### Modularización del codigo
Hemos creado dos archivos js, en los cuales se explica la funcionalidad de cada uno de sus codigos :
- **app.js** --> Fichero que se encarga de llamar a las apis y del funcionamiento de la aplicación
- **dom.js** --> Fichero que se encarga de la gestion del dom

### Apis que hemos utilizado
- [Geo Ipify](https://geo.ipify.org)
- [Leafletjs](https://leafletjs.com/SlavaUkraini/)
- [Map](https://account.mapbox.com/)






