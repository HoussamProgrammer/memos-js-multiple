/*
 * 1. Make an object.
 * 		* Object literal
 * 		* new
 * 		* Object.create
 * 		* call another power constructor
 * 
 * 2. Define some variables and functions.
 * 		* These become private members.
 * 
 * 3. Augment the object with privileged methods.
 * 
 * 4. Return the object.
 */


// step 1
function constructor(spec) {
	var that = otherMaker(spec);

	// step 2 private members
	var member;
	//
	that.method = method;
	return that;
}

