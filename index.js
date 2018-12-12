// var http = require('http');

// http
//   .createServer(function(req, res) {
//     res.writeHead(200, {
//       'Content-Type': 'text/plain'
//     });
//     res.end('Hello World\n');
//   })
//   .listen(3000, '127.0.0.1');

// console.log('Server running at http://127.0.0.1:3000');

var express = require('express');

var app = express();

app.get('/', function(req, res) {
  //   res.send('Hello World!');
  res.json({ hello: 'world' });
});

var server = app.listen(3000, function() {
  console.log('Server running at http://127.0.0.1:3000');
});
