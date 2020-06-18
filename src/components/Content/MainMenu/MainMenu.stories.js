import React from 'react';
import Colors from 'variables';
import MainMenu from './MainMenu';

export default { title: 'MainMenu' };

const StorybookWhiteCentered = {
  width: '375px',
  height: '100vh',
  margin: '0 auto',
  padding: '50px 25px',
  backgroundColor: Colors.Beige,
};

export const MainMenuStory = () => {
  return (
    <div style={StorybookWhiteCentered}>
      <MainMenu />
    </div>
  );
};
