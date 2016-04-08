function getCampaigns(){
	var d = q.defer();

	request({
		url: config.url + '/campaigns/cpnmp/en-us/10.7?hw.key=' + config.hwKey,
		strictSSL: false
	}, function (err, res, body) {
		if (err) {
			d.reject(err);
		} else {
			d.resolve(body);
		}
	});

	return d.promise;
}

