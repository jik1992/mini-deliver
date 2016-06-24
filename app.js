var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var ParseServer = require('parse-server').ParseServer;

//static
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.use('/public', express.static(path.join(__dirname, 'public')));

//websocket
io.on('connection', function(socket) {
  console.log('a user connected => '+socket.id);
  io.emit('console', "连接成功！");
});

//Parse
var api = new ParseServer({
  databaseURI: 'mongodb://10.46.69.96:27017/mongorocks', // Connection string for your MongoDB database
  cloud: '/workspace/cloud/main.js', // Absolute path to your Cloud Code
  appId: 'deploy',
  masterKey: 'sercert', // Keep this key secret!
  fileKey: 'sercert',
  serverURL: 'http://120.55.191.149:9002/parse' // Don't forget to change to https if needed
});

app.use('/parse', api);


var server = http.listen(3000, function() {
  console.log('start at port:' + server.address().port);
});

