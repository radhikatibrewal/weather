const http = require('http');
const fs=require("fs");
var requests=require("requests");

const homeFile = fs.readFileSync("home.html","utf-8");
const server = http.createServer((req,res)=>{
if(req.url="/")
{
    requests("https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=5037044a881667b433c66274dbf62d91")
}
    
});