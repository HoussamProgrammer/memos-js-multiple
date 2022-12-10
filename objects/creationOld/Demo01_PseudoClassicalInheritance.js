/* ================================= 
 * PSEUDO CLASSICAL INHERITANCE
 * ================================= */

function Gizmo(id) {
	this.id = id;
}

// Gizmo is function but a function is also an object!
Gizmo.prototype.toString = function () {
	return "Gizmo " + this.id;
};

function Hoozit(id) {
	this.id = id;
}

// inherits all methods in prototype of Gizmo 
Hoozit.prototype = new Gizmo();
// because of updating reference of prototype the prototype added has constructor of Gizmo
// we update constructor with the right one
Hozzit.prototype.constructor = Hozzit;
Hoozit.prototype.test = function(id) {
	return this.id === id;
};


