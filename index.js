/**
 * Created by Luca on 20.06.2015.
 */


var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var router = express.Router();

app.use(express.static(__dirname + '/public'));
app.get("/ajax", require('./routes/ajax.js'));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());



http.createServer(app).listen(3000);