const { readdir, readFile, writeFile } = require('fs');
const { join } = require('path');
const { promisify } = require('util');

const inbox = join(__dirname, 'inbox');
const outbox = join(__dirname, 'outbox');

const reverseText = (str) => Promise
  .resolve(
    str
      .split('')
      .reverse()
      .join(''),
  );

// If the readdir function follows the convention of (error, data)
// It can be converted using the promisify util function
const readdirAsync = promisify(readdir);
const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

// Read and reverse contents of text files in a directory
const readReverseWrite = (file) => readFileAsync(join(inbox, file), 'utf8')
  .then(reverseText)
  .then((data) => writeFileAsync(join(outbox, file), data))
  .then(() => console.log(`${file} has been processed!`));

readdirAsync(inbox)
  .then((files) => files.map(readReverseWrite))
  .then((promises) => Promise.all(promises))
  .then(() => console.log('*** All files processed ***'))
  .catch((error) => console.log(`Error: ${error}`));
