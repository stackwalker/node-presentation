var http = require('http');

var server = http.createServer(function(req, res){
	console.log(req.url);
	console.log(req.method);
	console.log(req.headers);
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<html><body><h1>I am the server</h1></body>');
	res.end();
});

server.listen(3000);
console.log("It's alive!");