// All my javascript for the bar chart

// Our bundler automatically creates styling when imported in the main JS file!
import '../styles/style.css'

// We can use node_modules directely in the browser!

import * as d3 from 'd3';

function getData(filterFunction) {
    d3.json("../popularity.json").then(d => {

        if(filterFunction) {
            d = d.filter(item => {
                return item.category === filterFunction;
            })
        }

        makeChart(d)
    })
}

// d3 barchart

    const margin = 50;
    const width = screen.width - 2 * margin;
    const height = 500 - 2 * margin;

    const svg = d3.select(".barchart svg");

function initChart() {
    const chart = svg.append("g")
    .attr("transform", `translate(${margin}, ${margin})`)
    .attr("id", "container")

    chart.append("g")
    .attr("transform", `translate(0, ${height})`)
    .attr("id", "xScale")

    svg.append("text")
        .attr("x", width / 2 + margin)
        .attr("y", 500)
        .attr("text-anchor", "middle")
        .text("Cat Breeds")
        .attr("id", "title")
        .attr("font-family", "Caveat")
        .style("font-weight", 500)
}

function makeChart(catPopularity) {
    const yScale = d3.scaleLinear()

    const xScale = d3.scaleBand()
        .range([0, width])
        .domain(catPopularity.map((d) => d.place))
        .padding(0.05)

        const chart = d3.select("#container");

    chart.select("#xScale")
        .call(d3.axisBottom(xScale))

    chart.selectAll("rect")
        .data(catPopularity)
        .join("rect")
        .attr("x", (d) => xScale(d.place))
        .attr("y", (d) => yScale(d.place))
        .attr("height", (d) => height - yScale(d.place))
        .attr("width", xScale.bandwidth())
        .style("overflow", "visible")
        .attr("fill", (d) => `url(#${d.image})`)
            .on("mouseover touchstart", (e, d) =>
            d3
                .select("#tooltip")
                .transition()
                .duration(300)
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


        d3.select("#title")
            .text(catPopularity[0].category)
            .style("color", "#9e8e91")
}

window.addEventListener("DOMContentLoaded", (e) => {
    d3.selectAll("button").on("click", (e) =>
    getData(e.target.value));
    getData("De hele wereld");
});

initChart();
getData();