const http = require("http");
const url = require("url");

const server = http.createServer((req,res)=>{
    const queryObj = url.parse(req.url,true).query;
    res.writeHead(200,{"Content-Type":"text/plain"}  )
    res.end(`Hello, ${queryObj.name || "Guest"}!`)
})

server.listen(4000,()=>{
    console.log('http://localhost:4000')
}
)