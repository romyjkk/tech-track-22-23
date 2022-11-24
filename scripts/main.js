// Our bundler automatically creates styling when imported in the main JS file!
import '../styles/style.css'

// We can use node_modules directely in the browser!

import * as d3 from 'd3';

// importing json file using d3

d3.json("../coordinates.json").then(d => {
    makeMap(d)
    console.log(d)
})

// d3.json("../popularity.json").then(d => {
//     makeChart(d)
//     updateChart(d)
//     filterData(d)
//     console.log(d)
// })

// d3 barchart

// var objSet;
// var sqrtScale;

// function updateChart(categoryNumber) {
//     categoryNumber = Number(categoryNumber);
//     const catPopularity = filterData(categoryNumber);
//     makeChart(catPopularity);
// }

// function filterData(categoryNumber) {

//     objSet = catPopularity.filter((d) => d.category === categoryNumber);

//     sqrtScale = d3.scaleSqrt()
//         .domain([0, d3.max(catPopularity, (d) => d.breed)])
//         .range([0, 10]);

//         return objSet;
// }

// function makeChart(catPopularity) {

//     const margin = 60;
//     const width = 1000 - 2 * margin;
//     const height = 600 - 2 * margin;

//     const svg = d3.select("svg");

//     const chart = svg.append("g")
//         .attr("transform", `translate(${margin}, ${margin})`);

//     const yScale = d3.scaleLinear()
        // .range([height, 0])
        // .domain([0, 10]);

        // chart.append('g')
        // .call(d3.axisLeft(yScale));


//     const xScale = d3.scaleBand()
//         .range([0, width])
//         .domain(catPopularity.map((d) => d.place))
//         .padding(0.2)

//     chart.append("g")
//         .attr("transform", `translate(0, ${height})`)
//         .call(d3.axisBottom(xScale))

//     chart.selectAll()
//         .data(catPopularity)
//         .enter()
//         .append("rect")
//         .attr("x", (d) => xScale(d.place))
//         .attr("y", (d) => yScale(d.place))
//         .attr("height", (d) => height - yScale(d.place))
//         .attr("width", xScale.bandwidth())
//         .attr("fill", '#fdcbd2')
//             .on("mouseover touchstart", (e, d) =>
//             d3
//                 .select("#tooltip")
//                 .transition()
//                 .duration(200)
//                 .style("opacity", 1)
//                 .text(`${d.breed}`)
//                 )

//             .on("mousemove", (e) =>
//                 d3
//                     .select("#tooltip")
//                     .style("left", e.pageX + 15 + "px")
//                     .style("top", e.pageY + 15 + "px")
//                     )

//             .on("mouseout", e => d3.select("#tooltip").style("opacity", 0)
//                     );

//     svg.append("text")
//         .attr("x", width / 2 + margin)
//         .attr("y", 600)
//         .attr("text-anchor", "middle")
//         .text("Cat Breeds")
// }

// function ticked() {
//     window.addEventListener("DOMContentLoaded", (e) => {
//         d3.selectAll("button").on("click", (e) =>
//         updateChart(e.target.value));
//         updateChart(1);
//     });
// }

// map

function makeMap(allCats) {
const map = L.map('map').setView([52.377956, 4.897070], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 2,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// // custom icons

// let abyssinianIcon = L.icon({
//     iconUrl: '../images/png/abyssinian.png',

//     iconSize:     [65, 80],
//     iconAnchor:   [22, 94],
//     popupAnchor:  [25, -100]
// })

// L.marker(allCats[1].geometry.coordinates).addTo(map).bindPopup(allCats[1].properties.name)

function makeMarker() {
    allCats.forEach(allCats => {
        L.marker(allCats.geometry.coordinates).addTo(map).bindPopup(allCats.properties.name)
    });
}
makeMarker();

}