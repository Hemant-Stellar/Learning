const http = require("http");
const fs = require("fs")
const server = http.createServer((req,res)=>{
    const data = fs.readFileSync('./index.html',"utf-8");
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end(data);
});

server.listen(4000,()=>{
    console.log('listening to port http://localhost:4000')
})