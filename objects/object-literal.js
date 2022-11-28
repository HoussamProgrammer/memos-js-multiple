

/* 1. Literal Object declaration/definition
 * ========================================= */
// Like classes, objects litterals are just blueprint / definition
// we need 'this' to refer at the target instance.
export let bubble = {
	x: 300,
	y: 200,
	display: function() {
		console.log('display() called 🚀')
	},	
	move: function() {
		this.x = this.x + 20;
		this.y = this.y + 10;
	}	
}	






/* 2. With only Constructor Function
 * ================================== */

// constructor function [developper convention, first letter of cuntion is Capital]
export function Person (person_name, person_age, person_gender) {

	// assigning  parameter values to the calling object
	 this.name = person_name,
	 this.age = person_age,
	 this.gender = person_gender,
 
	 this.greet = function () {
		 return ('Hi' + ' ' + this.name);
	 }
 }
 



