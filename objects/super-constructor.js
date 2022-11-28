// no need to use new
// myObject = powerConstructor(objectBase);

function powerConstructor() {
	var that = object(objectBase);
	var privateVariable;

	function privateFunction(x) {}

	that.firstMethod = function (a, b) {
		// ...privateVariable...
	};
	that.secondMethod = function(d) {
		// ...privateFunction()...
	};

	return that;
}


let object = function(o) {
	function F() {}
	F.prototype = o;
	return new F();
}
