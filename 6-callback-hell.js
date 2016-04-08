init(function(err, state){
	if(err){
		console.log('System failed to initialize');
	}else{
		login('bob', 'bob', function(err, profile){
			if(err){
				console.log('Login failed');
			}else{
				retrieveData(state, profile.language, function(err, data){
					if(err){
						console.log('Data retrieval failed');
					}else{
						renderResult();
					}
				})
			}
		});
	}
});
