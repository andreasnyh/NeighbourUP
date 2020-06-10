import React from 'react';
import Form from '../../Form/Form';
import Input from '../../Input/Input';
import Button from '../../Button/Button';

const handleLogin = (event) => {
  event.preventDefault();
  const formData = document.getElementById('loginForm');
  const data = {
    email: formData.email.value,
    password: formData.password.value,
  };

  const url = 'http://localhost:5000/login';
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => console.log(result));
};

const Login = () => {
  return (
    <Form id="loginForm" text="Logga in">
      <Input type="email" placeholder="Email" name="email" />
      <Input type="password" placeholder="Lösenord" name="password" />
      <Button onClick={handleLogin}>Ok</Button>
    </Form>
  );
};

export default Login;
