const { access, constants } = require('node:fs');

access('./text.txt', constants.F_OK, (err) => {
  if (!!err) return console.info('[i] file not exists');
  console.info('[i] file exists');
});
