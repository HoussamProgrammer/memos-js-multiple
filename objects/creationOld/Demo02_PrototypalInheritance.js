/* ================================= 
 * Prototypal Inheritance
 * ================================= */

// /!\ 🚨 BETTER BUT NOT RECOMMADED STYLE LIKE CLASS STYLE AND WITHOUT CONTROL OF TYPES /!\ 

/* Creation of newConstructor function
 * ==================================== */

// same functionality as 'new' except we don't use 'new'

function newConstructor(extend, initializer, methods) {
	//// This creates a new object (instance) 
	//// whose prototype (actually the __proto__ variable) is set to Superclass' prototype. 
	//// Any changes to p_constructor.prototype now makes no changes to the Superclass' behaviour.

	// p_constructor.prototype = Object.create(Superclass.prototype);
	
	let func, prototype = Object.create(extend && extend.prototype);

	if (methods) {
		Object.keys(methods).forEach(function (key) {
			prototype[key] = methods[key];
		});
	}

	func = function () {
		let that = Object.create(prototype);
		if (typeof initializer === 'function') {
			initializer.apply(that, arguments);
		}
		return that;
	};

	func.prototype = prototype;
	prototype.constructor = func;
	return func;
}



/* Usage of newConstructor function
 * ================================= */

// base object is Object , then we add the method toString
let gizmoConstructor = newConstructor(
	Object,
	function (id) { this.id = id; },
	{
		toString: function () {
			return "gizmo " + this.id;
		}
	}
);

// we want extends gizmo, so we passed gizmo instead of Object
// to get all variables-methods, then we extends with our method
let hoositConstructor = newConstructor(
	gizmoConstructor,
	function (id) { this.id = id; },
	{
		test: function (id) {
			return this.id === id;
		}
	}
);

export function Demo_02_PrototypalInheritance() {
	console.log('🚀 Demo_02_PrototypalInheritance()');
	// first object as gizmo
	let gizmoInstance = gizmoConstructor(12);

	console.log({gizmoInstance});

	let hoositInstance = hoositConstructor(35);
	console.log({hoositInstance});
}