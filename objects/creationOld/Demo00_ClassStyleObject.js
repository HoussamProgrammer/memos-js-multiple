/* ================================= 
 * Example of a class style object
 * ================================= */	

class Person {
	constructor(first, last, age) {
		this.firstName = first;
		this.lastName = last;
		this.personAge = age;
	}


	getFullName () {
		return `${this.firsName} ${this.lastName}`;
	}

	description () {
		console.log(`${this.firsName} ${this.lastName} is ${this.personAge} years old`);
	}
}

const person = new Person('John', 'Smith', 89);
const fullName = person.getFullName();

console.log(fullName);
person.description();