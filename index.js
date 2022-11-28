import doTagStringTemplateTask from "./es6/tag-template-string.js"
import { Demo_02_PrototypalInheritance } from "./objects/creation/Demo02_PrototypalInheritance.js";
import Demo_03_ModulePattern from "./objects/creation/Demo03_ModulePattern.js";
import crockfordObjectsStyleMain from "./objects/crockford-objects.js";
import { objectInheritanceMain } from "./objects/objec-inheritance.js";
import { bubble, Person } from "./objects/object-literal.js";
import { Bear, Grizzly } from "./objects/object-prototype.js";
import singletonPrivateMembersMain from "./objects/singeleton-private-variable.js";


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
Demo_03_ModulePattern();