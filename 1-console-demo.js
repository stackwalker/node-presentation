(function print(i){
	console.log(i);
	if(i < 100) print(++i);
})(1);
