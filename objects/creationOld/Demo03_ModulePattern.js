/* ================================= 
 * MODULE PATTERN
 * ================================= */


/* SINGLETON EXAMPLE
 * ================================= */

// wrap function with parenteses to indicate is not a regular function statement
let singleton = (function () {
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
			console.log(`         ⛔️ #privateVariable: ${privateVariable}`);
		}
	};
})(); // /!\ 🚨 return by calling, so it return object {} instead of function reference /!\ 

export default function Demo_03_ModulePattern() {
	console.log('🚀 Demo_03_ModulePattern()');
	// even after extending singleton with another variable with same name 'privateVariable'
	// the privateVariable in firstMethod still remain intact, very cool! 👍
	// because of principal of closure, firstMethod and secondMethod are BINDING
	// with privateVariable of first function 'let singleton = funcion () {...}' even if this function is gone
	
	
	console.log(`  🚀 #privateVariable: ${singleton.privateVariable}`);
	console.log(`  🚀 attempt to access => #singleton.privateVariable: ${singleton.privateVariable}`);


	console.log(`  📥 adding variable with same name as 'privateVariable'...\n`);
	singleton.privateVariable = 3;
	console.log(`  🚀 attempt to access => #singleton.privateVariable: ${singleton.privateVariable}`);

	console.log(`  🚩 now singleton has 2 privateVariable: `);
	console.log('      * one in closure (remaining in heap):');
	singleton.printPrivateVariable();
	console.log(`      * one added above: ${singleton.privateVariable}`);
	console.log(`         🪧  #privateVariable: ${singleton.privateVariable}`);

	// singleton.printPrivateVariable();

	// singleton.firstMethod(23, 40);
	// singleton.secondMethod(50);
}