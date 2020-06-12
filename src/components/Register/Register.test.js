import '@testing-library/jest-dom';
import 'jest';

// create a new test user
const newUser = {
  firstName: 'testar',
  lastName: 'LAST',
  email: 'testar@tt.se',
  adress: 'USER ADRESS',
  coAdress: '',
  password: 'PASSWORD',
  postalNumber: '12345',
  postalAdress: 'HOMETOWN',
};

// Send a post request with a parameter to localhost
async function createUser(data) {
  const response = await fetch('http://localhost:5000/users/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

it('register a new user', async () => {
  const data1 = await createUser(newUser);
  console.log('data 1: ', data1);
  expect(data1.firstName).toEqual(newUser.firstName);
});

it('gets error when new user exists', async () => {
  const data1 = await createUser(newUser);
  console.log('data 1: ', data1);
  expect(data1).toEqual('Error saving user');
});
