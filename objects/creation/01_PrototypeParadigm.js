console.log(`🚀 Start()`);

let personPrototype = {
	firstName: '',
	lastName: ''
};

let employeePrototype = Object.create(personPrototype);
employeePrototype.hireDate = '';
employeePrototype.terminateDate = '';

let ben = Object.create(employeePrototype);

// -----------------------------------------------------------------------------------------------------
// 🔹 Update Object.prototype with custom function (alternative to the instance of) 'hasPrototypeOf()'
// -----------------------------------------------------------------------------------------------------
Object.prototype.hasPrototypeOf = function (targetObject, prototype) {
	console.log(`🚧 hasPrototypeOf() #targetObject: ${JSON.stringify(targetObject)} #prototype: `, prototype);
	if (Object.getPrototypeOf(targetObject) === null) { return false; }

	if (Object.getPrototypeOf(targetObject) === prototype) {
		return true;
	} else {
		return hasPrototypeOf(Object.getPrototypeOf(targetObject), prototype);
	}
}

let result = Object.hasPrototypeOf(ben, Object.getPrototypeOf(personPrototype));
console.log(`🏁 ${result}`);


// console.log(`🚧 #Object.getPrototypeOf: `, Object.getPrototypeOf(ben));
// console.log(`🚧 #Object.getPrototypeOf: `, Object.getPrototypeOf(Object.getPrototypeOf(ben)));
// console.log(`🚧 #Object.getPrototypeOf: `, Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(ben))));
// console.log(`🚧 #Object.getPrototypeOf: `, Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(ben)))));













