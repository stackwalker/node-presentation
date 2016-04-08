var connect = require('connect');

function setup(mode){
	//LoggerFactory is a fictitious class created by a less lazy version of me
	var _logger = LoggerFactory.getLogger(mode);

	return function logger(req, res, next){
		_log.log('%s %s', req.method, req.url);
		next();
	}
}

connect()
	.use(logger('file'))
	.listen(3000);
