import React from 'react';
import Storybook from 'storybook.style';
import Button from './Button';

export default { title: 'Buttons' };

export const DarkModeButton = () => {
  return (
    <Storybook darkmode>
      <Button darkmode>Dark Mode</Button>
    </Storybook>
  );
};

export const LightModeButton = () => {
  return (
    <Storybook>
      <Button lightMode>Light Mode</Button>
    </Storybook>
  );
};
