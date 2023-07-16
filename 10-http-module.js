// HTTP module

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page');
  }
  if (req.url === '/about') {
    res.end('A short history abour our company.');
  }
  res.end(`
  <h1>Oppps!</h1>
  <p>Something goes wrong</p>
  <a href="/">return to home page</a>
  `);
});

server.listen(5000);
