http = require('http');

const server = http.createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.write("Hello from Node.js \n");
    // res.end("<h1>Hello </h1>");
    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<h1>Welcome to Home Page</h1>");
        res.end();
    if(req.url==='/about'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<h1>Welcome to About Page</h1>");
        res.end();
    }
}
}).listen(4000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Server is running on port 4000");
    }
})