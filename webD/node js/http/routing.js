const http = require('http');

const server = http.createServer((req, res) => {  // Fix: Use parentheses around the function parameters
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("<h1>Welcome to Home Page</h1>");
        res.end();
    }
    if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("<h1>Welcome to About Page</h1>");
        res.end();
    }
});

server.listen(5000, () => {
    console.log("Server is running on port 5000");
});
