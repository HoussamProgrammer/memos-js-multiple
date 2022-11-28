export function Bear(type) {
	this.type = type;
}

Bear.prototype.growl = function() {
	console.log(`🚀 The ${this.type} bear says grrrr!`);
}

export function Grizzly() {
	Bear.call(this, 'grizzlyType');
}

Grizzly.prototype = Object.create(Bear.prototype);


