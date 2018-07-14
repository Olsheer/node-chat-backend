const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const mongoose = require('mongoose');
//const mongooseConnection = require("./db/dbconnect").connection;
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const hostname = '127.0.0.1';
const port = 3000;
var usersController = require('./controllers/users');

var db = require('./db.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.send('hello');
});
app.get('/users', usersController.allUsers);

app.get('/users/:id', usersController.findUserById);

app.post('/users',usersController.createUser);

app.put('/users/:id',usersController.changeUser);﻿

app.delete('/users/:id', usersController.deleteUser);

//app.get('/friends/:id', usersController.userFriends);
//Messages routes

app.get('/messages', usersController.allMessages);

app.get('/messages/:id', usersController.findMessageById);

app.post('/messages',usersController.createMessage);

app.put('/messages/:id',usersController.changeMessage);﻿

app.delete('/messages/:id', usersController.deleteMessage);


//start our server
db.connect('mongodb://localhost:27017/users', function(err){
    if(err){
      return console.log(err);
    }
    app.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });
});
//{useNewUrlParser: true},
