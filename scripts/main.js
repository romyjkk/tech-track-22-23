// Our bundler automatically creates styling when imported in the main JS file!
import '../styles/style.css'

// We can use node_modules directely in the browser!
import * as d3 from 'd3';

// importing json file using d3
// let allCats = d3.json("../coordinates.json");

// console.log(allCats[0]);


// let allCats = d3.json("../coordinates.json", function(error, data){
//     console.log("allCats"[0]);
// }).catch(e => console.log("laden niet gelukt"));

// importing the data from my data.json file and logging it to the console

// import myJson from '../data.json' assert {type: 'json'};
import myJson from '../coordinates.json' assert {type: 'json'};
console.log(myJson);
console.log(myJson[0].Coordinates[0]);

// map

const map = L.map('map').setView([52.377956, 4.897070], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 2,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// custom icons

// let abyssinianIcon = L.icon({
//     iconUrl: '../images/png/abyssinian.png',

//     iconSize:     [65, 80],
//     iconAnchor:   [22, 94],
//     popupAnchor:  [25, -100]
// })

// let britishshorthairIcon = L.icon({
//     iconUrl: '../images/png/britishshorthair.png',

//     iconSize:     [80, 80],
//     iconAnchor:   [22, 94],
//     popupAnchor:  [15, -100]
// })

// let ragdollIcon = L.icon({
//     iconUrl: '../images/png/ragdoll.png',

//     iconSize:     [90, 80],
//     iconAnchor:   [22, 94],
//     popupAnchor:  [28, -100]
// })

// let sphynxIcon = L.icon({
//     iconUrl: '../images/png/sphynx.png',

//     iconSize:     [80, 80],
//     iconAnchor:   [22, 94],
//     popupAnchor:  [40, -100]
// })

// let persianIcon = L.icon({
//     iconUrl: '../images/png/persian.png',

//     iconSize:     [80, 80],
//     iconAnchor:   [22, 94],
//     popupAnchor:  [43, -100]
// })

// let siameseIcon = L.icon({
//     iconUrl: '../images/png/siamese.png',

//     iconSize:     [80, 80],
//     iconAnchor:   [22, 94],
//     popupAnchor:  [20, -100]
// })

// L.marker(myJson[0].Coordinates, {icon:abyssinianIcon}).addTo(map).bindPopup("The Abyssinian, from Ethiopia");
// L.marker(myJson[1].Coordinates, {icon:britishshorthairIcon}).addTo(map).bindPopup("The British Shorthair, from England");
// L.marker(myJson[2].Coordinates, {icon:persianIcon}).addTo(map).bindPopup("The Persian, from Iran");
// L.marker(myJson[3].Coordinates, {icon:ragdollIcon}).addTo(map).bindPopup("The Ragdoll, from the United States");
// L.marker(myJson[4].Coordinates, {icon:siameseIcon}).addTo(map).bindPopup("The Siamese, from Thailand");
// L.marker(myJson[5].Coordinates, {icon:sphynxIcon}).addTo(map).bindPopup("The Sphynx, from Canada");