var connect = require('connect');

function setup(mode){
	var _logger = LoggerFactory.getLogger(mode);

	return function logger(req, res, next){
		_log.log('%s %s', req.method, req.url);
		next();
	}
}

connect()
	.use('/admin', logger('file'))
	.listen(3000);