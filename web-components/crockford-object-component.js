function makePerson(spec) {
    let {firstName, lastName} = spec; // deconstructing from object spec

    function getDisplayName() {
        return firstName + " " + lastName;
    }

    return Object.freeze(
		{
        	getDisplayName
    	}
	);
}

const ben = makeEmployee({
    firstName: "Ben",
    lastName: "Priebe",
    hourlyRate: 120,
    employeeId: 1
});

// function makeTSButon(spec) {
// 	let { text } = spec;
// 	let tsButton = { text };
// 	tsButton.prototype = Object.create(HTMLElement.prototype);
// 	return Object.freeze(tsButton);
// }

function TSButtonSprite(spec) {
	let { text } = spec;
}

TSButtonSprite.prototype = Object.create(HTMLElement.prototype);