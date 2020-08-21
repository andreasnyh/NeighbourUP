import React from 'react';
import Storybook from 'storybook.style';
import Login from './Login';

export default { title: 'Login' };

export const LoginPageStory = () => {
  return (
    <Storybook>
      <Login />
    </Storybook>
  );
};
