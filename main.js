const users = [
  {
    fullname: 'behnam mahmoodi',
    username: 'behnam-mahmoodi',
    password: '123456789'
  },
  {
    fullname: 'anita ahmadi',
    username: 'anita-ahmadi',
    password: '123456789'
  },
  {
    fullname: 'amin fotoohi',
    username: 'amin-fotoohi',
    password: '123456789'
  }
];

const user = {
  fullname: 'erfan ghazimoradi',
  username: 'erfance',
  password: '2393ip;ls',
  age: 20
};

function usernameValidation(username) {
  if (username === null) return [false, 'username: required']; // tuple
  if (typeof username !== 'string') return [false, 'username: use type string'];
  if (username.trim().length < 4) {
    return [false, 'username: must be length > 4'];
  }
  if (username.trim().length > 40) {
    return [false, 'username: must be length < 40'];
  }

  return [true, null];
}

function passwordValidation(password) {
  if (password === null) return [false, 'password: required']; // tuple
  if (typeof password !== 'string') return [false, 'password: use type string'];
  if (password.trim().length < 8) {
    return [false, 'password: must be length > 8'];
  }
  if (password.trim().length > 50) {
    return [false, 'password: must be length < 50'];
  }

  return [true, null];
}

function addUser({ fullname = null, username = null, password = null }) {
  // validation
  const [isUsernameValid, usernameValidationError] =
    usernameValidation(username);
  if (!isUsernameValid) return usernameValidationError;

  const [isPasswordValid, passwordValidationError] =
    passwordValidation(password);
  if (!isPasswordValid) return passwordValidationError;

  // sanitization
  users.push({ fullname, username, password });
  return 'user added successfully';
}

console.log(addUser(user));

console.log(users);

const firstname = 'erfan';
