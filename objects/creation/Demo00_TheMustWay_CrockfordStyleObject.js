/* ===================================
 * Example of a Crockford style object
 * =================================== */

function createPerson(firstName, lastName, personAge) {


	function getFullName() {
		return `${this.firsName} ${this.lastName}`;
	}

	function description() {
		console.log(`${this.firsName} ${this.lastName} is ${this.personAge} years old`);
	}

	// freeze is not mandatory, but it prohibit modifying the return object
	// freeze is like const/final
	return Object.freeze({
		firstName,
		lastName,
		personAge,
		getFullName,
		description
	});
}

const person = createPerson('John', 'Smith', 89);
const fullName = person.getFullName();

console.log(fullName);
person.description();