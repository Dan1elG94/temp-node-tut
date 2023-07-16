// MODULES
// CommonJS, every file is a module (by default)
// Modules -Encapsulated code, share minimum

const names = require('./4-names');
const sayHi = require('./5-utils');

sayHi('suzan');
sayHi(names.john);
sayHi(names.peter);
