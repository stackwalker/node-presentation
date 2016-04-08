var express = require('express');
var bodyParser = require('body-parser');

//var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/guitarists');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next){
	req.db = db;
	next();
});

app.get('/guitarists', function(req, res){
	var guitarists = req.db.get('guitarists');
	guitarists.find({}, {}, function(e, docs){
		res.json(docs);
	});
});

app.post('/guitarists', function(req, res){
	var guitarists = req.db.get('guitarists');
	guitarists.insert(req.body, function(err, doc){
		if(err){
			res.send(err);
		}else{
			res.json(doc);
		}
	});
});

module.exports = app;
console.log('Servin up the goods on 3000');
app.listen(3000);