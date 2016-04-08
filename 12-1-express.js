var express = require('express');
var app = express();

app.get('/', function(req,res){
	res.send('Express!');
});

app.get('/json', function(req, res){
	res.json({boo: 'yah'});
});

app.listen(3000);