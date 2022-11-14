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

console.log('Hello, world!');

// importing the data from my data.json file and logging it to the console

// import myJson from '../data.json' assert {type: 'json'};
import myJson from '../geoJSON.json' assert {type: 'json'};

console.log(myJson);

// test map

const map = L.map('map').setView([52.377956, 4.897070], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 2,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// geoJSON

var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404, 39.75621]
    }
};

// icons

// let abyssinianIcon = L.icon({
//     iconUrl: '../images/png/abyssinian.png',

//     iconSize:     [50, 80],
//     iconAnchor:   [22, 94],
//     popupAnchor:  [-3, -76]
    
//     iconSize: [60, 62],
//     iconAnchor:   [5, 40],
//     popupAnchor:  [-10, 5]
// })

// L.marker([9.005401, 38.763611], {icon:abyssinianIcon}).addTo(map).bindPopup("The Abyssinian");

// L.marker([9.005401, 38.763611]).addTo(map)
//     .bindPopup('The Abyssinian')
//     .openPopup();

// practising with greensock

// const tl = gsap.timeline()
//     .from(".title", {xPercent:-150, ease:"back", duration:1})
//     .from(".cartooncat", {xPercent:150, ease:"back", duration:1})