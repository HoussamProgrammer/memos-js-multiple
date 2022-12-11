// --------------------------------------------------------------------------------------------------
// 🔹 How prototype works in js
// --------------------------------------------------------------------------------------------------

// we define a shape/definition for all instances with a Function constructor
// In each new instance
// 	if not created an Singleton instance 'InstanceZero' as prototype is created 
// 	and affected as reference in prototype property for the new instance

// 🔹FnConstructor 		
// const element = new FnConstructor():
// 	|---------------------------> InstanceZero	
//	|----> obj_01.prototype 	= InstanceZero 
//	|----> obj_02.prototype 	= InstanceZero 
//	|----> obj_03.prototype 	= InstanceZero 
//	|----> .			 		= InstanceZero 
//	|----> . 					= InstanceZero 
//	|----> .			 		= InstanceZero 
//	|----> obj_N.prototype 		= InstanceZero


// 🔹constructor is a property in prototype
// 	\---------------------------> InstanceZero.constructor = FnConstructor


// 🔸Prototype chaining
// 	---> InstanceZero.prototype = Object
// 			\---> Object.prototype = null;



// --------------------------------------------------------------------------------------------------
// 🔹 CLASS IN ES6
// --------------------------------------------------------------------------------------------------
class Element {
	// --------------------------------------------------------------------------------------------------
	// 🔹 ALL VARIABLES THAT MUST BE ADDED TO EACH NEW INSTANCE 📦
	// --------------------------------------------------------------------------------------------------
	point;
	position;

	static parentShape;

	constructor(point, position) {
		// we use the context of the current instance with 'this' to initialize values
		this.point = point;
		this.position = position;
	}

	// --------------------------------------------------------------------------------------------------
	// 🚨 ALL METHODS ARE PRESENT IN THE UNIQUE INSTANCE (🖇 PROTOTYPE) NOT THE NEW INSTANCES OF ELEMENT
	// --------------------------------------------------------------------------------------------------
	loadShape() { }
	getShapeForm() { }


	// --------------------------------------------------------------------------------------------------
	// 🔸 ADD VARIABLE OR ADD METHOD TO THE FUNCTION CONSTRUCTOR 'as the property of function object'  
	// --------------------------------------------------------------------------------------------------
	static loadParentShape() { }
}

class Fichier {
	nom; 						// variable on each new instance
	size; 						// variable on each new instance

	static parentFolder;		// variable in Function Constructor -> Fichier.parentFolder = '/home/user';
	static loadParentFolder 	// function in Function Constructor -> Fichier.loadParentFolder();

	getAttributes();			// function in prototype instance
	getCreatedAt();				// function in prototype instance
}

// we can not add a property to an prototype via class not implemented yet.
// we do it as a old way
Fichier.prototype.type = 'SymbolicLink';


let elementOne = new Element();
let elementTwo = new Element();


/* ====================================================================================================== 
 * In ES5 PSEUDO CLASSICAL INHERITANCE
 * ====================================================================================================== */
function Element(id) {
	// engine create a new instance and bind 'this' to this new instance

	// add to this new instance id property and value
	this.id = id;
	// return new instance created
}

Element.prototype.loadShape = function () { };
Element.prototype.getShapeForm = function () { };

// Element is function but a function is also an object!
Element.parentShape;
Element.loadParentShape = function () { };
