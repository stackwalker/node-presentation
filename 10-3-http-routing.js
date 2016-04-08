var http = require('http');

var server = http.createServer(function(req, res){
	var html;
	switch(req.url){
		case '/one':
			html = '<html><body><h1>One! ah ah ah</h1></body>';
			break;
		case '/two':
			html = '<html><body><h1>Two! ah ah ah</h1></body>';
			break;
		case '/three':
			html = '<html><body><h1>Three! ah ah ah</h1></body>';
			break;
		default:
			html = '<html><body><h1>I am the server</h1></body>';
			break;
	}
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(html);
	res.end();
});

server.listen(3000);
console.log("It's alive!");