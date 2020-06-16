import React from 'react';
import Login from './Login';

export default { title: 'Login' };

const LoginStory = {
  display: 'flex',
  justifyContent: 'center',
  margin: '0 auto',
  width: '50%',
};
export const LoginPageStory = () => {
  return (
    <div style={LoginStory}>
      <Login />
    </div>
  );
};
