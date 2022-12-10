window.myapp = (function () {
	// var scope of function so ok here
	var privateVariable = 10; 
	
	function privateFunction(x)  {
		// ...privateVariable...
		console.log(`📦 privateFunction() #privateVariable ${privateVariable} #x: ${x}`);
	}

	return {
		firstMethod: function (a, b) {
			// ...privateVariable...
			var value = a + privateVariable;
			console.log(`👍 firstMethod() #value: ${value}`);
		},
		secondMethod: function (c) {
			// ...privateFunction...
			privateFunction(c);
		},
		printPrivateVariable: function() {
			console.log(`#privateVariable: ${privateVariable}`);
		}
	};
})(); 