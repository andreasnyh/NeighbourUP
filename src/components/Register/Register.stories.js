import React from 'react';
import Register from './Register';

export default { title: 'Register Page' };

// Styling for storybook
const StorybookWhiteCentered = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
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
