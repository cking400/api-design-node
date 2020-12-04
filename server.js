var express = require('express');
var app = express();
var fs = require('fs');

var jsonData = {count: 12, message: 'hey'};

app.use(express.static('.'));

app.get('/', function(req, res) {
    res.sendFile('index.html', (err)=>{
        if(err){
            res.status(500).send(err);
        }
    });
});

app.get('/file', function(req, res){
    fs.readFile('index.html', function(err, buffer){
        var html = buffer.toString();
        res.setHeader('Content-Type', 'text/html');
        res.send(html);
    });
});

app.get('/data', function(req, res) {
    res.send(jsonData);
});

var port = 8888;
app.listen(8888, function(){
    console.log('Server listening on port: ' + port);
});
// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data

