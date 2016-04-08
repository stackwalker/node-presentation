module.exports = function(app){
	app.get('/', function(req, res){
		res.render('home');
	});

	app.get('/about', function(req, res){
		res.render('about');
	});

	var guitarists = [
			{id: 1, name: 'Jimi Hendrix', guitar: 'Fender Stratocaster' },
			{id: 2,  name: 'Danny Gatton', guitar: 'Fender Telecaster'},
			{id: 3, name: 'Sean Timm', guitar: 'Larrivee L-10'}
		];

	app.get('/api/v1/guitarists', function(req, res){
		res.json(guitarists);
	});

	app.post('/api/v1/guitarists', function(req, res){
		guitarists.push(req.body);
	});
};
