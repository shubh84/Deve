let matchLink="https://www.espncricinfo.com/series/ipl-2021-1249214/mumbai-indians-vs-chennai-super-kings-27th-match-1254084/full-scorecard";

const request=require("request");
const fs =require("fs");
const cheerio=require("cheerio");
//request(matchLink , cb);

// //function cb(error , response , data)
// {
//    //console.log("got the data!!"); 
// //console.log(data);
// //fs.writeFileSync("./match.html", data);
// }

let htmlKaData=fs.readFileSync("./match.html","utf8");
 
let myDocument=cheerio.load(htmlKaData);


let matchInfo=myDocument(".status-text span").text();
console.log(matchInfo);