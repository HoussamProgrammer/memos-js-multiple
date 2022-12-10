// Basic
const getFruit = async (name) => {
	const fruits = {
		pineapple: '⛔️',
		peach: '🛃',
		strawaberry: '🍰'
	}
	return Promise.resolve(fruits[name]);
}

getFruit('peach').then(console.log);


// Example
const makeSmoothie = async () => {
	const a = await getFruit('pineapple');
	const b = await getFruit('strawberry');

	return [a, b];
}

const makeSmoothieConcurrent = async () => {
	const a = await getFruit('pineapple');
	const b = await getFruit('strawberry');

	// if a is not dependant of b, >> we should run it as concurrent
	return Promise.all([a, b]);
}