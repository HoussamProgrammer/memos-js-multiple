// for..of ==> iterate over data
// currentScreenSize = 1600;
let allData = [320, 375, 425, 768, 1024, 1044, 2560, 4000, 5600];
for (let it of allData) {
	console.log('🔁 #it:', it);
	if (currentScreenSize > it) {
		previousScreenSize = it;
	} else {
		console.log(`🚫 else`);
		break;
	}
}

///////////////////////
// for..in ==> iterate over index (meaning all keys)
Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

const iterable = [3, 5, 7];
iterable.foo = 'hello';

for (const i in iterable) {
  console.log(i); // logs "0", "1", "2", "foo", "arrCustom", "objCustom"
}

for (const i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // logs "0", "1", "2", "foo"
  }
}

for (const i of iterable) {
  console.log(i); // logs 3, 5, 7
}