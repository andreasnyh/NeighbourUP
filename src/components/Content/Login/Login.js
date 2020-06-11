import React from 'react';
import Form from 'components/Form/Form';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import Header from 'components/Header/Header';
import styled from 'styled-components';

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

export const RegisterContainer = styled.div`
  display: flex;
  height: 120vh;
  justify-content: center;
`;
const Login = () => {
  return (
    <RegisterContainer>
      <Header />
      <Form id="loginForm" text="Logga in">
        <Input type="email" placeholder="Email" name="email" />
        <Input type="password" placeholder="Lösenord" name="password" />
        <Button onClick={handleLogin}>Logga in</Button>
      </Form>
    </RegisterContainer>
  );
};

export default Login;
