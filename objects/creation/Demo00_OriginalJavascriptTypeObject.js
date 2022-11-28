/* ========================================== 
 * Example of original Javascriot type Object
 * ========================================== */

function Person(first, last, age) {
	this.firsName = first;
	this.lastName = last;
	this.personAge = age;
	return this;
}

Person.prototype.getFullName = function () {
	return `${this.firsName} ${this.lastName}`;
};

Person.prototype.description = function () {
	console.log(`${this.firsName} ${this.lastName} is ${this.personAge} years old`);
};

const person = new Person('John', 'Smith', 89);
const fullName = person.getFullName();

console.log(fullName);
person.description();