import React from 'react';
import MainMenuItem from './MainMenuItem';

export default { title: 'MainMenuItem' };

const StorybookWhiteCentered = {
  display: 'flex',
  padding: '100px',
  justifyContent: 'center',
  height: '130vh',
  width: '50%',
  margin: '0 auto',
};

export const MainMenuItemStory = () => {
  return (
    <div style={StorybookWhiteCentered}>
      <MainMenuItem />
    </div>
  );
};
