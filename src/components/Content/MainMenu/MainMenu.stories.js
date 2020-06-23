import React from 'react';
import StoryBook from 'storybook.style';
import MainMenu from './MainMenu';
import Header from '../../Header/Header';

export default { title: 'MainMenu' };

export const MainMenuStory = () => {
  return (
    <StoryBook>
      <Header />
      <MainMenu />
    </StoryBook>
  );
};
