require('q');

module.exports = {
	login: function(username, password){
		var deferred = q.defer();

		if (password === username.split('').reverse().join('')){
			deferred.resolve(null, {
				firstName: 'Bob',
				lastName: 'Roberts',
				lastLogin: '2016-01-01'
			});
		}else{
			deferred.reject({message: 'Incorrect Password'}, null);
		}
	},

	isAuthorized: function(role){
		return context.currentUser.roles.includes(role);
	}
};