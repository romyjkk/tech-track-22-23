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