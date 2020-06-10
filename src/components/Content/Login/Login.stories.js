import React from 'react';
import Login from './Login';

export default { title: 'Login' };

const LoginStory = {
  display: 'flex',
  justifyContent: 'center',
};
export const LoginPageStory = () => {
  return (
    <div style={LoginStory}>
      <Login />
    </div>
  );
};
