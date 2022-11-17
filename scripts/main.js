// Our bundler automatically creates styling when imported in the main JS file!
import '../styles/style.css'

// We can use node_modules directely in the browser!
import * as d3 from 'd3';

// importing json file using d3
let katten = d3.json("../coordinates.json")
    .catch(e => console.log("laden niet gelukt"));
// console.log(katten[0]);

// importing the data from my data.json file and logging it to the console

// import myJson from '../data.json' assert {type: 'json'};
// import myJson from '../coordinates.json' assert {type: 'json'};

// console.log(myJson[0].Coordinates[0]);

// console.log(myJson);