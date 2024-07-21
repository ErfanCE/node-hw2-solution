const { unlink, access, constants } = require('node:fs');

access('./third-text.txt', constants.F_OK, (err) => {
  if (!!err) return console.info('[i] file not exist');

  unlink('./third-text.txt', (err) => {
    if (!!err) return console.error('[-] unlink', err.message);

    console.info('[i] file removed successfully.');
  });
});
