// ********* Array Destructuring
// const [firstname, age] = ['erfan', 24];

// const [firstname, , , age] = ['erfan', 'ghazimoradi', true, 24];

// -default
// const [firstname, age, city = 'not-set'] = ['erfan', 30];

// ********* object litral Destructuring
// const { firstname, city } = {
//   firstname: 'behnam',
//   lastname: 'mahmoodi',
//   age: 25,
//   city: 'karaj'
// };
// console.log(firstname);
// console.log(city);

// -rename
// const { lastname, city: location } = {
//   firstname: 'behnam',
//   lastname: 'mahmoodi',
//   age: 25,
//   city: 'karaj'
// };
// console.log(location);

// -default
// const { nationalityCode = null } = {
//   firstname: 'behnam',
//   lastname: 'mahmoodi',
//   age: 25,
//   city: 'karaj',
//   nationalityCode: '0022783793'
// };

// -complete edition(notation)
const { city: location = 'tehran' } = {
  firstname: 'behnam',
  lastname: 'mahmoodi',
  age: 25
};

console.log(location);
