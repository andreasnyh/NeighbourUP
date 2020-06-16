import React from 'react';
import Register from './Register';
import 'App.css';

export default { title: 'Register Page' };

// Styling for storybook
const StorybookWhiteCentered = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0px auto',
  width: '50%',
  height: '100%',
};
// End styling for storybook

export const RegisterStory = () => {
  return (
    <div style={StorybookWhiteCentered}>
      <Register />
    </div>
  );
};
