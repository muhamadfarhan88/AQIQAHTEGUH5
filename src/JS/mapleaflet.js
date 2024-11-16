// src/JS/mapleaflet.js

$(document).ready(function() {
    // Koordinat untuk lokasi Teguh Aqiqah
    var mapCenter = [-6.276247154826614, 106.87525804336683]; // Koordinat Teguh Aqiqah

    // Inisialisasi Peta
    var map = L.map('map', {
        center: mapCenter,
        zoom: 16,
        maxZoom: 20
    });

    // Layer Peta
    var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution: '&copy; <a href="https://www.google.com/maps?q=teguh aqiqah">teguhaqiqah</a> contributors'
    }).addTo(map);

    var osmHotLayer = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution: '&copy; <a href="https://www.google.com/maps?q=teguh aqiqah">teguhaqiqah</a> contributors'
    });

    // Kontrol Layer
    var baseMaps = {
        "OpenStreetMap": osmLayer,
        "OpenStreetMap HOT": osmHotLayer
    };

    L.control.layers(baseMaps).addTo(map);
    osmLayer.addTo(map); // Set layer default

    // Marker untuk lokasi Teguh Aqiqah
    var marker = L.marker(mapCenter).addTo(map);
    marker.bindPopup("<b>Teguh Aqiqah</b>").openPopup();
});