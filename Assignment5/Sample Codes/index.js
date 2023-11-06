import http from "http";
// const http = require('http');
let count = 0;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<h1 style="color: blue; font-family: 'Arial', sans-serif; text-align: center;">${++count}. Hello from the server!</h1>`);
    console.log('Connection made');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});