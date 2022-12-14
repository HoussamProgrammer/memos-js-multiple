/* ================================= 
 * THIS: CURRENT CONTEXT EXECUTION
 * ================================= */

const object = {
	name: 'Space ship',
	emoji: 'π',
	age: 99,
	hello: function () {
		
		// π¦ in this first function 'this' refers to the object that it's DEFINED on.

		console.log(`π anonyme function  => #this: `, this); // <*  {name: 'Space ship', emoji: 'π', age: 99, hello: Ζ, hello2: Ζ} 
	},
	hello2: () => {
		
		// π¦ in arrow function it doesn't have its own bindings to 'this' which means
		// it bypasses our custom function and 'this' become the global object
		 
		console.log(`π lambda            => #this: `, this); // <* WindowΒ {0: Window, window: Window, self: Window, document: document, name: '', location: Location,Β β¦}
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
