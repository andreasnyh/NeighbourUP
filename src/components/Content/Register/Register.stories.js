import React from 'react';
import styled from 'styled-components';
import Storybook from 'storybook.style';
import Register from './Register';

export default { title: 'Register Page' };

// Styling for storybook
const StorybookWhiteCentered = styled(Storybook)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
// End styling for storybook

export const RegisterStory = () => {
  return (
    <StorybookWhiteCentered>
      <Register />
    </StorybookWhiteCentered>
  );
};
