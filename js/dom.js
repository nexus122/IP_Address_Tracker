/* En esta pagina configuramos todo lo que tiene que ver con la gestion del DOM para hacerlo mas modular y simplificar el codigo. */
let DOM = {
    /* Configuracion de elementos con los que interactuamos. */
    ipAdress: document.querySelector(".ip_address"),
    location: document.querySelector(".location_value"),
    time: document.querySelector(".time_zone_value"),
    isp: document.querySelector(".isp_value"),
    ipInput: document.querySelector(".ip_input"),
    map: document.querySelector("#map"),
    main: document.querySelector("main"),

    /* Esto nos limpia el DOM */
    clear() {
        this.ipAdress.innerHTML = "-";
        this.location.innerHTML = "-";
        this.time.innerHTML = "-";
        this.isp.innerHTML = "-";
        this.ipInput.value = "";
        this.ipInput.placeholder = "IP is not valid";
    },
    drawMap(coords) {
        /* Eliminamos el mapa anterior y creamos uno nuevo */
        this.map.remove();
        this.main.innerHTML = `<div id="map"></div>`

        /* Cargamos las coordenadas de la api y colocamos una marca */
        var map = L.map('map').setView(coords, 15);
        L.marker(coords).addTo(map); // Marcador en el mapa

        /* Configuramos el mapa tal y como se nos muestra en la documentación */
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoiY2FzdGVsbGlzdCIsImEiOiJjbDFlcHN0MGMwY3BnM2lvY2F5bnZlOHh5In0.C30e0xZQCTu88E0lErby7g'

        }).addTo(map);
    },
    /* 
        La pasamos como callback y dibuja en los recuadros los datos obtenido de la api.
        Ademas dibuja el mapa utilizando las coordenadas.
    */
    drawData(respuesta) {
        console.log(respuesta);
        /* Escribimos los datos */
        DOM.ipAdress.innerHTML = respuesta.ip;
        DOM.location.innerHTML = respuesta.location.country + " " + respuesta.location.region;
        DOM.time.innerHTML = respuesta.location.timezone;
        DOM.isp.innerHTML = respuesta.isp;
        /* Dibujamos el mapa. */
        DOM.drawMap([respuesta.location.lat, respuesta.location.lng]);
    }

}