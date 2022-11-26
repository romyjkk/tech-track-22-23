// All my javascript for the bar chart

// Our bundler automatically creates styling when imported in the main JS file!
import '../styles/style.css'

// We can use node_modules directely in the browser!

import * as d3 from 'd3';

// importing json file using d3

// d3.json("../coordinates.json").then(d => {
//     makeMap(d)
//     console.log(d)
// })

function getData(filterFunction) {
    d3.json("../popularity.json").then(d => {

        if(filterFunction) {
            d = d.filter(item => {
                return item.category === filterFunction;
            })
        }
        makeChart(d)
        // updateChart(d)
        // filterData(d)
    })
}

// d3 barchart

// var objSet;
// var sqrtScale;

// function updateChart(categoryCountry) {
//     categoryCountry = String(categoryCountry);
//     const catPopularity = filterData(categoryCountry);
//     makeChart(catPopularity);
// }

// function filterData(categoryCountry) {

//     objSet = catPopularity.filter((d) => d.category === categoryCountry);

//     // sqrtScale = d3.scaleSqrt()
//     //     .domain([0, d3.max(catPopularity, (d) => d.breed)])
//     //     .range([0, 10]);

//         return objSet;
// }

function makeChart(catPopularity) {

    // console.log('werkt dit uberhaupt')

    const margin = 60;
    const width = 1000 - 2 * margin;
    const height = 600 - 2 * margin;

    const svg = d3.select(".barchart svg");

    const chart = svg.append("g")
        .attr("transform", `translate(${margin}, ${margin})`);

    const yScale = d3.scaleLinear()
        // .range([height, 0])
        // .domain([0, 10]);

        // chart.append('g')
        // .call(d3.axisLeft(yScale));


    const xScale = d3.scaleBand()
        .range([0, width])
        .domain(catPopularity.map((d) => d.place))
        .padding(0.2)

    chart.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(xScale))

    chart.selectAll()
        .data(catPopularity)
        .enter()
        .append("rect")
        .attr("x", (d) => xScale(d.place))
        .attr("y", (d) => yScale(d.place))
        .attr("height", (d) => height - yScale(d.place))
        .attr("width", xScale.bandwidth())
        // .attr("fill", (d) => `url(#${d.image})`)
            .on("mouseover touchstart", (e, d) =>
            d3
                .select("#tooltip")
                .transition()
                .duration(200)
                .style("opacity", 1)
                .text(`${d.breed}`)
                )
            .on("mousemove", (e) =>
                d3
                    .select("#tooltip")
                    .style("left", e.pageX + 15 + "px")
                    .style("top", e.pageY + 15 + "px")
                    )
            .on("mouseout", e => d3.select("#tooltip").style("opacity", 0)
                    );

    svg.append("text")
        .attr("x", width / 2 + margin)
        .attr("y", 600)
        .attr("text-anchor", "middle")
        .text("Cat Breeds")
}

window.addEventListener("DOMContentLoaded", (e) => {
    d3.selectAll("button").on("click", (e) =>
    getData(e.target.value));
    getData("The World");
});

getData();