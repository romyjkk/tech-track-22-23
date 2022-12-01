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
        iconUrl: '../images/mapcat.png',

        iconSize: [35, 40],
        iconAnchor: [15, 30],
        popupAnchor: [-2, -30]
     })

// let abyssinianIcon = L.icon({
//     iconUrl: '../images/png/abyssinian.png',

//     iconSize:     [65, 80],
//     iconAnchor:   [22, 94],
//     popupAnchor:  [25, -100]
// })

// test map

// const map = L.map('map').setView([52.377956, 4.897070], 2);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     minZoom: 2,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// L.marker(myJson[0].Coordinates).addTo(map);

// geoJSON ???

// var myCoords = [{
//     "type": "Point",
//     "coordinates": [38.763611, 9.005401]
// }, {
//     "type": "Point",
//     "coordinates": [-0.118092, 51.509865]
// }, {
//     "type": "Point",
//     "coordinates": [105.3809, 62.2270]
// }, {
//     "type": "Point",
//     "coordinates": [-98.000000, 38.500000]
// }, {
//     "type": "Point",
//     "coordinates": [100.9925, 15.8700]
// }, {
//     "type": "Point",
//     "coordinates": [53.6880, 32.4279]
// }];

// var myLayer = L.geoJSON(myCoords).addTo(map);
// myLayer.addData(someGeojsonFeature);

// custom marker (doesn't work)

// var geojsonMarkerOptions = {
//     radius: 8,
//     fillColor: "#ff7800",
//     color: "#000",
//     weight: 1,
//     opacity: 1,
//     fillOpacity: 0.8
// };

// L.geoJSON(someGeojsonFeature, {
//     pointToLayer: function (points, latlng) {
//         return L.circleMarker(latlng, geojsonMarkerOptions);
//     }
// }).addTo(map);



// L.marker(myJson[0].Coordinates, {icon:abyssinianIcon}).addTo(map).bindPopup("The Abyssinian, from Ethiopia");
// L.marker(myJson[1].Coordinates, {icon:britishshorthairIcon}).addTo(map).bindPopup("The British Shorthair, from England");
// L.marker(myJson[2].Coordinates, {icon:persianIcon}).addTo(map).bindPopup("The Persian, from Iran");
// L.marker(myJson[3].Coordinates, {icon:ragdollIcon}).addTo(map).bindPopup("The Ragdoll, from the United States");
// L.marker(myJson[4].Coordinates, {icon:siameseIcon}).addTo(map).bindPopup("The Siamese, from Thailand");
// L.marker(myJson[5].Coordinates, {icon:sphynxIcon}).addTo(map).bindPopup("The Sphynx, from Canada");

// L.marker([9.005401, 38.763611]).addTo(map)
//     .bindPopup('The Abyssinian')
//     .openPopup();