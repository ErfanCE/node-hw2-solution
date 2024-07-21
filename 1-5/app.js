// 1st solution
// const { readFile } = require('node:fs');

// function adultUsers(users) {
//   return users.filter((user) => user.age > 18).map((user) => user.username);
// }

// readFile('./user-data.json', 'utf-8', (err, usersJSON) => {
//   if (!!err) return console.error('[-] readFile', err.message);

//   const users = JSON.parse(usersJSON);

//   console.log(adultUsers(users));
// });

// 2nd solution
const users = require('./user-data.json');

const adultUsers = (users) => {
  return users.filter((user) => user.age > 18).map((user) => user.username);
};

console.log(adultUsers(users));
