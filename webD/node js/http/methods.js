const http = require("http");
const server = http.createServer((req,res)=>{
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200,"Content-Type","text/plain");
        res.end("Welcome to home page");
    }else if (req.url === "/about" && req.method === "POST"){
        res.writeHead(200,"Content-Type","application/json");
        res.end(JSON.stringify({message:"About page"}));

    }
})

server.listen(5000,()=>{
    console.log("Server is running on port 5000");
})