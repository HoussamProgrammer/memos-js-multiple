// like kotlin getter and setter are called like variables (there are implicit calls).

let car = makeCar();


function makeCar() {
	
	// private variable '_variable' underscore is convention for developpers 
	let _fuel = 'diesel';
	
	return {
		emoji: '🚗',
		set fuel(value) {
			console.log(`📥 setter called #value: ${value}`);
			_fuel = value;
		},
		get fuel() {
			console.log(`📤 getter called`);
			return _fuel;
		},
		runs() {
			console.log(`🚗 The car runs with ${this.fuel}`);
		}
	};
}

/* Getting value
 * ================================= */

// >> console.log(car.fuel);
// << 🔍 getter called
// << diesel


/* Setting value
 * ================================= */
// car.fuel = 'essence';
// 🖊 setter called #value: essence
// 'essence'



