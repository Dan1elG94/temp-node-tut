// PATH module
const path = require('path');

// return path separator
const pathSeparator = path.sep;
console.log(pathSeparator);

// return path to the file as a string
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

// return base name of the file path
const base = path.basename(filePath);
console.log(base);

// return absolute path to the file
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
