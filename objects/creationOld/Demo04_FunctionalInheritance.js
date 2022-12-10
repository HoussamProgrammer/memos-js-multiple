
/* PUBLIC id
 * ================================= */

function gizmo(id) {
	return {
		id: id,
		toString: function() {
			return "gizmo " + this.id;
		}
	};
}

function hoozit(id) {
	var that = gizmo(id);
	that.test = function (testid) {
		return testid === id;
	};
	return that;
}

/* PRIVATE id and without 'this' with closure
 * =========================================== */	
// because the context of 'that' and closure, id still remain in heap 
// and not garbaged by the garbage collector. very usefull tips 👍
// method can also be extracted without problem because we don't use 'this'

function gizmo(id) {
	return {
		toString: function() {
			return "gizmo " + id;
		}
	};
}

function hoozit(id) {
	var that = gizmo(id);
	that.test = function (testid) {
		return testid === id;
	};
	return that;
}
