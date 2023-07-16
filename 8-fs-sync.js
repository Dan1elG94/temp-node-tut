// FILE SYSTEM module sync
const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync(
  './content/result-sync.txt',
  `This is a result: ${first}, ${second}`,
  { flag: 'a' } // this means append text to the existing text in the file, not overwrite
);

console.log(first, second);
