function createThing(name) {
    function getName() {
        return name;
    }

    return Object.freeze({
        name,
        getName
    });
}

const myThing = createThing('My Thing');
// returns 'My Thing';

////////////////////////////////
function constructor(spec) {
    let {member} = spec;
    let {other} = other_constructor(spec);

    function privateMethod() {
        // member, other, privateMethod, and spec are all accessible here
        // can only be called from within constructor
        return member;
    }
    function publicMethod() {
        // member, other, privateMethod, publicMethod, and spec are all accessible here
        return privateMethod();
    }
    return Object.freeze({
        publicMethod,
        other
    });
}


// Using the prefix create is ill-advised, 
// as it's too easily confused with Object.create(), 
// so "make" is the preferred term to use instead.
// 
// The main improvements in Crockford's preferred style are:
// 
// * using separate let assignment statements, preventing maintenance problems
// * no assigning to a that variable, instead using local variables
// * returning a frozen object

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

function makeEmployee(spec) {
    let {employeeId, hourlyRate} = spec;
    let {getDisplayName} = makePerson(spec); // destructuring; return object instance Person { getDisplayName }

    function calculatePay(hoursWorked) {
        return hourlyRate * hoursWorked;
    }

    return Object.freeze(
		{
        	getDisplayName,
        	calculatePay
    	}
	);
}

const ben = makeEmployee({
    firstName: "Ben",
    lastName: "Priebe",
    hourlyRate: 120,
    employeeId: 1
});

export default function crockfordObjectsStyleMain() {
	console.log(ben.getDisplayName());
	console.log(ben.calculatePay(38));
}