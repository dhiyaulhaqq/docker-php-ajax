const http = require('http');

const hostname = '0.0.0.0';

const port = 3000;

var body = 'Hello World';

const server = http.createServer((req, res) => {

  res.statusCode = 200;

  res.setHeader('Content-Type', 'text/plain');

  res.end(body);

});

server.listen(port, hostname, () => {

  console.log(`Server running at http://${hostname}:${port}/`);

});

var options = {
  host: 'phpapp',
  port: 80,
  path: '/index.php'
};

http.get(options, function(res) {
  console.log("Got response: " + res.statusCode);

  res.on("data", function(chunk) {
    console.log("BODY: " + chunk);
    body = chunk;
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
