var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var mongoose = require('mongoose')
var SightingCtrl = require('./SightingCtrl')
var app = express();


app.use(bodyParser.json());
app.use(cors());
var port = 3000;
var mongoURI =  'mongodb://localhost:27017/mini-birds-mongoose';

mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
  console.log('connected to mongoDB at: ', mongoURI);
});

app.post('/api/sighting', SightingCtrl.create)


app.get('/api/sighting', SightingCtrl.read)

app.delete('/api/sighting/:id', SightingCtrl.delete)

app.put('/api/sighting/:id', SightingCtrl.update)

app.listen(port, function() {
  console.log("Started server on port", port);
});
