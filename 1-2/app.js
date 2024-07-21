const { writeFile } = require('node:fs');

const text = 'new content added.';

writeFile('./second-text.txt', text, (err) => {
  if (!!err) return console.error('[-] writeFile', err.message);

  console.info('[i] new file and content added.');
});
