doSomething('something happened', function(){
	console.log('something else happened');
});

function doSomething(something, callback){
	console.log(something);
	callback();
}
