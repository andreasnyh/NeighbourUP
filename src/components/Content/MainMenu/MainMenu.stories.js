import React from 'react';
import MainMenu from './MainMenu';

export default { title: 'MainMenu' };

const StorybookWhiteCentered = {
  //   display: 'flex',
  //   flexWrap: 'wrap',
  //   justifyContent: 'center',
  width: '375px',
  padding: '50px 25px',
  height: '130vh',
  margin: '0 auto',
  border: '1px solid black',
};

export const MainMenuStory = () => {
  return (
    <div style={StorybookWhiteCentered}>
      <MainMenu />
    </div>
  );
};
