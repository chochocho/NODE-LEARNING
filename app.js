var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//  configure app

//  use middleware

app.use(function (req, res, next) {
    console.log(req.method + ' ' + req.url + ' ' + (new Date()));
    next();
});
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//  define routes

app.use(require('./todos'));
app.use('/another', require('./another'));

//  start the server

app.listen(1337, function () {
    console.log('Ready on port 1337');
});


// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(1337, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:1337/');