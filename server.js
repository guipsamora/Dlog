var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var mongodb = require('mongodb').MongoClient;

// gets express
var app = express();

// 
app.use(express.static('public'));

// Get user  
app.get('/', function(req, res){
   res.send("Hello World!");
});

// 
app.get('/user', function(req, res){
   res.sendStatus("ok");
});

// the port that the server is listening to
app.listen(3000, function(){
   console.log("App listening on port: 3000");
});

