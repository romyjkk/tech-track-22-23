// All my javascript for the leaflet map

// Our bundler automatically creates styling when imported in the main JS file!
import '../styles/style.css'

// We can use node_modules directely in the browser!

import * as d3 from 'd3';

// importing json file using d3

d3.json("../coordinates.json").then(d => {
    makeMap(d)
    console.log(d)
})

// map

function makeMap(allCats) {
    const map = L.map('map').setView([52.377956, 4.897070], 2);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        minZoom: 2,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    function makeMarker() {
        allCats.forEach(allCats => {
            L.marker(allCats.geometry.coordinates, {icon:mapIcon}).addTo(map).bindPopup(allCats.properties.name)
        });
    }
    makeMarker();
    
    }

     // custom icons

     let mapIcon = L.icon({
        iconUrl: '../mapcat.png',

        iconSize: [35, 40],
        iconAnchor: [15, 30],
        popupAnchor: [-2, -30]
     })