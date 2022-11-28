/*
 * A JavaScript Promise object can be:
 * 
 * Pending
 * Fulfilled
 * Rejected
 * The Promise object supports two properties: state and result.
 * 
 * > While a Promise object is "pending" (working), 🚩 the result is undefined.
 * 
 * > When a Promise object is "fulfilled", the result is a value.
 * 
 * > When a Promise object is "rejected", the result is an error object.
 * 
 * 
 */

/* SKELETON 
 * ================================= */

let myPromise = new Promise(
	function (myResolve, myReject) {
		// 'Producing Code' (May take some time)

		myResolve(); // when 👍 
		myReject();  // when 🚫
	}
);

// 'Consuming Code' (Must wait for a fulfilled Promise)
myPromise
	.then(function (result) { /* code if successful */ })
	.then(function (error) { /* code if some error */ });

// Promise.then() takes two arguments, a callback for success and another for failure.
// Both are optional, so you can add a callback for success or failure only.

/* EXAMPLE
 * ================================= */
function myDisplayer(some) {
	document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function (myResolve, myReject) {
	let x = 0;

	// The producing code (this may take some time)
	if (x == 0) {
		myResolve("OK");
	} else {
		myReject("Error");
	}
});

myPromise.then(
	function (value) { myDisplayer(value); },
	function (error) { myDisplayer(error); }
);

/* Another Example
 * ================================= */
let myPromise = new Promise(function (myResolve, myReject) {
	// 🚩 the logic is inside because it takes time 
	let req = new XMLHttpRequest(); 
	req.open('GET', "mycar.htm");
	req.onload = function () {
		if (req.status == 200) {
			// when ok call function added as first argument
			myResolve(req.response);
		} else {
			// not ok so call function added as second argument
			myReject("File not Found");
		}
	};
	req.send();
});

myPromise.then(
	function (value) { myDisplayer(value); },
	function (error) { myDisplayer(error); }
);