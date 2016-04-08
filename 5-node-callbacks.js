login('bob', 'bob', function(err, profile){
	console.log(err || profile);
});

function login(username, password, callback){
	if (password === username.split('').reverse().join('')){
		callback(null, {firstName: 'Bob', lastName: 'Roberts', lastLogin: '2016-01-01'});
	}else{
		callback({message: 'Incorrect Password'}, null);
	}
}