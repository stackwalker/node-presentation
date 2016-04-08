var connect = require('connect');

function logger(req, res, next){
	console.log('%s %s', req.method, req.url);
	next();
}

connect()
	.use(logger)
	.listen(3000);

//var app = connect();
//app.use(logger);
//app.listen(3000);