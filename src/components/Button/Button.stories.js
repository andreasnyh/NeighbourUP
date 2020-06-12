import React from 'react';
import Colors from 'variables';
import Button from './Button';

export default { title: 'Buttons' };

const StorybookWhiteCentered = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  background: Colors.Beige,
};

const StorybookBlueCentered = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  background: Colors.DarkBlue,
};

export const DarkModeButton = () => {
  return (
    <div style={StorybookBlueCentered}>
      <Button darkmode>Dark Mode</Button>
    </div>
  );
};

export const LightModeButton = () => {
  return (
    <div style={StorybookWhiteCentered}>
      <Button lightMode>Light Mode</Button>
    </div>
  );
};
