const orders = [500, 30, 99, 15, 223];


/* ================================= 
 * OF
 * ================================= */
// 'of' is for array because it is iterable
for (let order of orders) {
	// 500, 30, 99, 15, 223
}


const equine = { horse: '🐴', zebra: '🦓', unicorn: '🦄'}

// /!\ 🚨 an Object is not iterable by default /!\
for (const key of equine) {
	// << undefined is not a function
}


/* ================================= 
 * IN
 * ================================= */

// 🔦 SOLUTION use 'in' to loop over all keys 
//and use the key to get the value of the object

for (const key in equine) {
    if (equine.hasOwnProperty(key)) {
        console.log(equine[key]);
    }
}

// or get the value from object for usage of 'of'
for (const v of Object.values(equine)) {

}
