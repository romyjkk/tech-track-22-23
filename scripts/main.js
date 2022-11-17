// variables

const meow = new Audio('sound/meow.mp3');
const playMeow = document.querySelector('header nav ul li img');

// meow sound on cartoon cat

playMeow.addEventListener('mouseover', function() {
    meow.play();
})

playMeow.addEventListener('mouseleave', function() {
    meow.pause();
})

// Our bundler automatically creates styling when imported in the main JS file!
import '../styles/style.css'

// We can use node_modules directely in the browser!
import * as d3 from 'd3';
// let katten = d3.json("../coordinates.json")
// .catch(e => console.log("laden niet gelukt"));
// console.log(katten[0]);

console.log('Hello, world!');

// importing the data from my data.json file and logging it to the console

// import myJson from '../data.json' assert {type: 'json'};
import myJson from '../coordinates.json' assert {type: 'json'};
console.log(myJson[0].Coordinates[0]);

// console.log(myJson);

// test map

const map = L.map('map').setView([52.377956, 4.897070], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 2,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

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


// custom marker

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

// icons

let abyssinianIcon = L.icon({
    iconUrl: '../images/png/abyssinian.png',

    iconSize:     [65, 80],
    iconAnchor:   [22, 94],
    popupAnchor:  [25, -100]
})

let britishshorthairIcon = L.icon({
    iconUrl: '../images/png/britishshorthair.png',

    iconSize:     [80, 80],
    iconAnchor:   [22, 94],
    popupAnchor:  [15, -100]
})

let ragdollIcon = L.icon({
    iconUrl: '../images/png/ragdoll.png',

    iconSize:     [90, 80],
    iconAnchor:   [22, 94],
    popupAnchor:  [28, -100]
})

let sphynxIcon = L.icon({
    iconUrl: '../images/png/sphynx.png',

    iconSize:     [80, 80],
    iconAnchor:   [22, 94],
    popupAnchor:  [40, -100]
})

let persianIcon = L.icon({
    iconUrl: '../images/png/persian.png',

    iconSize:     [80, 80],
    iconAnchor:   [22, 94],
    popupAnchor:  [43, -100]
})

let siameseIcon = L.icon({
    iconUrl: '../images/png/siamese.png',

    iconSize:     [80, 80],
    iconAnchor:   [22, 94],
    popupAnchor:  [20, -100]
})

L.marker(myJson[0].Coordinates, {icon:abyssinianIcon}).addTo(map).bindPopup("The Abyssinian, from Ethiopia");
L.marker(myJson[1].Coordinates, {icon:britishshorthairIcon}).addTo(map).bindPopup("The British Shorthair, from England");
L.marker(myJson[2].Coordinates, {icon:persianIcon}).addTo(map).bindPopup("The Persian, from Iran");
L.marker(myJson[3].Coordinates, {icon:ragdollIcon}).addTo(map).bindPopup("The Ragdoll, from the United States");
L.marker(myJson[4].Coordinates, {icon:siameseIcon}).addTo(map).bindPopup("The Siamese, from Thailand");
L.marker(myJson[5].Coordinates, {icon:sphynxIcon}).addTo(map).bindPopup("The Sphynx, from Canada");

// met d3 alles tegelijk inladen + join (moet kunnen)



// L.marker([9.005401, 38.763611]).addTo(map)
//     .bindPopup('The Abyssinian')
//     .openPopup();

// practising with greensock

// const tl = gsap.timeline()
//     .from(".title", {xPercent:-150, ease:"back", duration:1})
//     .from(".cartooncat", {xPercent:150, ease:"back", duration:1})

