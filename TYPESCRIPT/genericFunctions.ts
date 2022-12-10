
const customFunction = <T>(val: T) => { return val; }

// vscode know that a is a string
let a = customFunction('Essai');

// vscode know that b is a number
let b = customFunction(23);