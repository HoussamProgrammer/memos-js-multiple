const spaceShip = {
	emoji: '🚀',
	fly() {
		console.log(`🚀 fly`);
	}
};

const mouseDevice = {
	emoji: '🖱'
};

function showEmoji() {
	return this.emoji;
}

/* CALL
 * ================================= */

// showEmoji.call(targetObject as this, argument1, argument2, etc);

// call() add context to the function meaning what this you want to be, then argument after argument 


// showEmoji is standalone function, so the context is GlobalObject (window on browser or global in node?)
let result = showEmoji();
console.log(`📃 #result: `, result); // <* 📃 #result:  undefined


// now we tell to showEmoji function i want you to use spaceShip object (context) as 'this'.
let result = showEmoji.call(spaceShip);
console.log(`📃 #result: `, result); // <* 📃 #result:  🚀


/* APPLY
 * ================================= */
// same as call except it receive an array object as argument
showEmoji.apply(spaceShip, [3, 'hello']);

/* BIND
 * ================================= */	
// prepare function whitout calling it, as a copy function
let showEmojiCopy = showEmoji.bind(spaceShip);
showEmojiCopy();






/* ================================= 
 * ANOTHER EXAMPLE
 * ================================= */

// the difference between call( ) apply( ) and bind( )
// without strict mode "this" will default to the Global/Window obj
//'use strict';

let bob = function (num, str, x) {
	console.log('bob', num, str, this, x);
	return true;
}
let bill = {
	name: 'Bill Murray',
	movie: 'Lost in Translation',
	myMethod: function (fn) {
		//fn(2, 'hello');
		let n = arguments[1];
		let s = arguments[2];
		fn.apply(bill, [n, s]);
		//fn.call(bill, n, s);
	}
}

//bob(1, 'hello');
//bill.myMethod(bob);
//bob.call(bill, 2, 'goodbye');
//let arr = [3, 'hi'];
//bob.apply(bill, arr);
//bill.myMethod(bob, 4, 'ciao');

let fred = bob.bind(bill, 5, 'hasta la vista');
fred('x');
