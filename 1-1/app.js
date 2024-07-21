const { appendFile } = require('node:fs');

const text = 'new content added.';

appendFile('./text.txt', '\n'.concat(text), (err) => {
  if (!!err) return console.error('[-] appendFile', err.message);

  console.info('[i] new content added successfully.');
});
