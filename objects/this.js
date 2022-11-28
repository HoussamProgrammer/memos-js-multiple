/* ================================= 
 * THIS: CURRENT CONTEXT EXECUTION
 * ================================= */

const object = {
	name: 'Space ship',
	emoji: '🚀',
	age: 99,
	hello: function () {
		
		// 🔦 in this first function 'this' refers to the object that it's DEFINED on.

		console.log(`📃 anonyme function  => #this: `, this); // <*  {name: 'Space ship', emoji: '🚀', age: 99, hello: ƒ, hello2: ƒ} 
	},
	hello2: () => {
		
		// 🔦 in arrow function it doesn't have its own bindings to 'this' which means
		// it bypasses our custom function and 'this' become the global object
		 
		console.log(`📃 lambda            => #this: `, this); // <* Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
	}
}

//return this for each call to enable chaining

const standardObject = (function (){
	
	
	this.loadTemplate()
		.extractReferencesElements()
		.createAnimationJob();
	

	function loadTemplate() {
		// some work
		return this;
	}

	function extractReferencesElements() {
		// some work
		return this;
	}

	function createAnimationJob() {
		// some work
		return this;
	}

})();
