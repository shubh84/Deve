

const fs = require("fs");
const cheerio = require("cheerio");


let htmlKaData = fs.readFileSync("./index.html" , "utf8");



let myDocument = cheerio.load(htmlKaData);



let h1KaData = myDocument("h2").text();

console.log(h1KaData);