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

var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect(
  'mongodb://localhost/cats',
  { useNewUrlParser: true }
);

// json or form submit, parse the body and add it on to the request
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

var cats = require('../routes/cat.js')(app);

/*
app.get('/', function(req, res) {
  //   res.send('Hello World!');
  res.json({ hello: 'world' });
});
*/

var server = app.listen(5000, function() {
  console.log('Server running at http://127.0.0.1:5000');
});
