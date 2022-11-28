
/* ================================= 
 * DECLARATION OF CLASS
 * ================================= */
class Bubble {

	constructor() {
		/* 
		 * 'this' can have multiple meaning according to context
		 *  BUT in constructor/class this mean CURRENT instance NOT class; 
		 *  also if x or/and y does not exist, it will added to this instance.
		 *  In javascript we add attributes and function to an object.
		 */
		this.x = 200;
		this.y = 200;
	}

	move() {
		/*
		 * In java/kotlin: 
		 * 		we can use variables of instance without this (it's implicit);
		 * 
		 * In javascript:
		 *      we MUST use keyworkd 'this' to refere variables of instance. 
		 * 		/!\ otherwise it's gonna look for OUTSIDE variables with same name /!\
		 * 
		 */
		this.x = this.x + random(-5, 5);
		this.y = this.y + random(-5, 5);
	}

	printValues() {
		
		/* =====================================
		 * BEHAVIOUR WITH USAGE OF THIS OR NOT
		 * ===================================== */

		//=== WITHOUT 'this':
		/*
		 * printValues() { 
		 * 			console.log(`#x: ${x} #y: ${y}`); 
		 * } 
		 * 
		 * > let bubbleOne = new Bubble();
		 * > bubbleOne.printValues();
		 * < VM903:26 Uncaught ReferenceError: x is not defined
    	 *	at Bubble.printValues (<anonymous>:26:22)
   		 *  at <anonymous>:1:11
		 * 
		 */

		//=== WITH 'this':
		/*
		 *
		 * printValues() { 
		 * 			console.log(`#x: ${this.x} #y: ${this.y}`); 
		 * }
		 * 
		 * > bubbleOne.printValues();
		 * < VM1023:38 #x: 200 #y: 200
		 * 
		 */
		


		//=== WITH 'this' AND ONE VARIABLE NOT IN CLASS AND WITHOUT USAGE OF THIS
		/* 
		 * printValues() {
		 *			console.log(`#x: ${this.x} #y: ${this.y} #outsideValue: ${outsideValue}`); 
		 * }
		 * 
		 * > let outsideValue = "external data not in class hi hi! 🚨";
		 * > bubbleOne.printValues();
		 * < VM1121:51 #x: 200 #y: 200 #outsideValue: external data not in class hi hi! 🚨
		 * 
		 */
	}

}

// > let bubble = new Bubble();
// > console.log(bubble);
// < Bubble {x: 200, y: 200}
