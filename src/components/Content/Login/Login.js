import React from 'react';
import Form from '../../Form/Form';
import Input from '../../Input/Input';
import Button from '../../Button/Button';

const Login = () => {
  return (
    <Form id="inputform" onsubmit="login()" text="Logga in">
      <Input type="email" placeholder="Email" name="email" />
      <Input type="password" placeholder="Lösenord" name="password" />
      <Button>Ok</Button>
    </Form>
  );
};

const handleSubmit = () => {
  const data = {
    firstName: 'test',
    lastName: 'från',
    email: 'front',
    adress: 'end',
    coAdress: 'ndsa',
    password: 'secret',
    postalNumber: '12345',
    PostalAdress: 'dsalndlas',
  };

  const url = 'localhost:3000/users/add';
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    // -- or --
    // body : JSON.stringify({
    // user : document.getElementById('user').value,
    // ...
    // })
  })
    .then(
      (response) => response.json() // .json(), etc.
      // same as function(response) {return response.text();}
    )
    .then((result) => console.log(result));
};

handleSubmit();
export default Login;

/* 
fetch('http://localhost:4000/api/users/register' , {
  method: "POST",
  headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify(this.state)
})
.then((result) => result.json())
.then((resu) => { 
  console.log(resu);
 })
 */
