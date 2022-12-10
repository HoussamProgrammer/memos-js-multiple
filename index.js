


//// tag template string example
//doTagStringTemplateTask();


//  // creating objects with function constructor
//  const person1 = new Person('John', 23, 'male');
//  const person2 = new Person('Sam', 25, 'female');

//  let mybubble = {...bubble}
// //  {
// // 	x: 300,
// // 	y: 200,
// // 	display: [Function: display],
// // 	move: [Function: move]
// //   }

// mybubble.z = -10;
// mybubble.showChildren = function showChildren() {
// 	console.log('show children');
// }

// mybubble.x = 212221;

// Array.prototype.division = function () {
// 	console.log(`📦 division done!`);
// }


// let bb = {...bubble}
// delete bb['z'];
// console.log({bb, mybubble});

// let arr = [];
// arr.division();

// delete Array.prototype['division'];

// console.log(`🚀 --- FUNCTION ---`);

// let showText = function (text) {	
// 	console.log(text);
// }

// showText('hello');
// showText.essai = 'essai';

// showText(showText.essai);



//  // accessing properties
//  console.log(person1.name); // "John"
//  console.log(person2.name); // "Sam"

// let grizzly = new Grizzly('grizzly');
// let polar = new Bear('polar');

//console.log(grizzly.growl(), polar.growl(), Bear.growl);

// let componentWithInnerHtml = new ComponentWithInnerHtml();
// console.log(`🚀 `, tsbutton);

//objectInheritanceMain();

//singletonPrivateMembersMain();
//crockfordObjectsStyleMain();

//Demo_02_PrototypalInheritance();
//Demo_03_ModulePattern();

console.log(`🚀 Start()`);



console.log(`🚀 Start()`);

let personPrototype = {
	firstName: '',
	lastName: ''
};

let employeePrototype = Object.create(personPrototype);
employeePrototype.hireDate = '';
employeePrototype.terminateDate = '';

let ben = Object.create(employeePrototype);

// Update Object.prototype

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


















