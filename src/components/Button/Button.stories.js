import React from 'react';
import StyledButton from './Button';
import Colors from '../../variables';

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
      <StyledButton darkmode>Dark Mode</StyledButton>
    </div>
  );
};

export const LightModeButton = () => {
  return (
    <div style={StorybookWhiteCentered}>
      <StyledButton lightMode>Light Mode</StyledButton>
    </div>
  );
};
