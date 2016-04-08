doSomething('something happened', thenDoSomethingElse);

function doSomething(something, callback){
	console.log(something);
	callback();
}

function thenDoSomethingElse(){
	console.log('something else happened');
}