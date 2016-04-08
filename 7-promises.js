init()
	.then(function(state) {
		login('bob', 'bob')
	})
	.then(function(profile){
		retrieveData(state, profile.language)
	})
	.then(function(data){
		renderResult(data);
	})
	.error(function(err){
		console.log(err);
	});
