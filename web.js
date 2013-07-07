var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var txt = new Buffer(fs.readFileSync('index.html'));

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  response.send(txt.toString('utf-8'));

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
