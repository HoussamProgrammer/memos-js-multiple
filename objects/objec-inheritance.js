let Person = function (name) {
	this.name = name;
	this.canTalk = true;
};

Person.prototype.greet = function () {
	if (this.canTalk) {
		console.log(`🚀 Hi, I am ${this.name}`);
	}
};

let Employee = function (name, title) {
	Person.call(this, name);
	this.title = title;
}

// // DO NOT DO THAT BECAUSE IS OVERRIDEN Particel.prototype (same reference)
// Confetti.prototype = Particle.prototype;

/*
 * /!\ 🚨  /!\ 
 * If you don't set Object.prototype.constructor to Employee,
 * it will take prototype.constructor of Person (parent).
 * To avoid that, we set the prototype.constructor to Employee (child).
 */
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.greet = function() {
	if (this.canTalk) {
		console.log(`🚀 Hi, I am ${this.name}, the ${this.title}`);
	}
}

// like constrtuctor in kotlin
let Customer = function (name) {
	Person.call(this, name);
}

/*
 * /!\ 🚨  /!\  
 * If you don't set Object.prototype.constructor to Employee,
 * it will take prototype.constructor of Person (parent).
 * To avoid that, we set the prototype.constructor to Employee (child).
 */
Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;

let Mime = function (name) {
	Person.call(this, name);
	this.canTalk = false;
}


/*
 * /!\ 🚨  /!\ 
 * If you don't set Object.prototype.constructor to Employee,
 * it will take prototype.constructor of Person (parent).
 * To avoid that, we set the prototype.constructor to Employee (child).
 */
Mime.prototype = Object.create(Person.prototype);
Mime.prototype.constructor = Mime;


let Medecin = function(o) {
	function F() {}
	F.prototype = o;
	return new F();
}

//Medecin.canTalk = false;

export function objectInheritanceMain() {
	let bob = new Employee('Bob', 'Builder');
	let joe = new Customer('Joe');
	let rg = new Employee('Red Green', 'Handyman');
	let mike = new Customer('Mike');
	let mime = new Mime('Mime');

	let medecin = Medecin(bob);

	bob.greet();
	joe.greet();
	rg.greet();
	mike.greet();
	mime.greet();


	medecin.greet();

}